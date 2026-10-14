"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, CheckCircle2, Loader2, MessageCircle, AlertCircle } from "lucide-react"
import { sendContactEmail } from "@/app/contact/actions"
import { contact } from "@/lib/site"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormData, string>>

// Client-side timeout so the loading state can never hang indefinitely.
const SUBMIT_TIMEOUT_MS = 45000
const TIMEOUT = "timeout"

// Mirrors the server rule in app/contact/actions.ts: one plain address only.
const SINGLE_EMAIL = /^[^\s@,;<>"]+@[^\s@,;<>"]+\.[^\s@,;<>"]+$/

const emptyForm: FormData = { name: "", email: "", phone: "", service: "", message: "" }

// Values must stay in sync with what the business expects in the notification email.
const serviceOptions = ["Photography", "Videography", "Live Streaming", "Content Creation", "Drone Services", "Other"]

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {}
  if (!data.name.trim()) errors.name = "Please tell us your name."
  if (!data.email.trim()) errors.email = "Please enter your email address."
  else if (!SINGLE_EMAIL.test(data.email.trim())) errors.email = "Please enter a valid email address."
  if (!data.phone.trim()) errors.phone = "Please enter a phone number we can reach you on."
  else if (data.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number."
  if (!data.message.trim()) errors.message = "Please share a few details about your project."
  return errors
}

const fieldClass =
  "peer block w-full border-0 border-b bg-transparent px-0 pb-3 pt-2 text-base text-ink placeholder:text-stone/60 transition-colors focus:outline-none focus:shadow-[0_1px_0_0_var(--gold-deep)] focus-visible:outline-none"

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(emptyForm)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const statusRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Pre-select a service when arriving from /contact?service=...
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service")
    if (requested && serviceOptions.includes(requested)) {
      setFormData((prev) => (prev.service ? prev : { ...prev, service: requested }))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLoading) return

    const found = validate(formData)
    setErrors(found)
    const firstInvalid = (Object.keys(found) as (keyof FormData)[])[0]
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Same server action and payload shape as before the redesign.
      let timer: ReturnType<typeof setTimeout> | undefined
      const timeout = new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error(TIMEOUT)), SUBMIT_TIMEOUT_MS)
      })
      const result = await Promise.race([sendContactEmail(formData), timeout]).finally(() => clearTimeout(timer))

      if (result.success) {
        setSubmitted(true)
        setFormData(emptyForm)
        requestAnimationFrame(() => statusRef.current?.focus())
      } else {
        setError(result.message)
      }
    } catch (err) {
      console.error("Error sending email:", err)
      setError(err instanceof Error && err.message === TIMEOUT ? TIMEOUT : "Failed to send message")
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="flex flex-col items-start py-10 outline-none">
        <CheckCircle2 aria-hidden="true" className="size-10 text-gold-deep" />
        <h3 className="display-sm mt-6 text-ink">Thank you, your message is on its way.</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
          We&apos;ve received your inquiry and will be in touch soon. A confirmation has been sent to your inbox.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn btn-outline-dark mt-10">
          Send another message
        </button>
      </div>
    )
  }

  const describe = (field: keyof FormData) => (errors[field] ? `${field}-error` : undefined)
  const border = (field: keyof FormData) =>
    errors[field] ? "border-destructive" : "border-ink/25 hover:border-ink/50 focus:border-gold-deep"

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate aria-busy={isLoading} className="space-y-10">
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
        <Field id="name" label="Name" required error={errors.name}>
          <input
            type="text"
            id="name"
            name="name"
            maxLength={200}
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={describe("name")}
            className={`${fieldClass} ${border("name")}`}
            placeholder="Your full name"
          />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={254}
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={describe("email")}
            className={`${fieldClass} ${border("email")}`}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
        <Field id="phone" label="Phone" required error={errors.phone}>
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength={50}
            autoComplete="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={describe("phone")}
            className={`${fieldClass} ${border("phone")}`}
            placeholder="+234 ..."
          />
        </Field>
        <Field id="service" label="Service of interest">
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${fieldClass} ${border("service")} cursor-pointer appearance-none bg-[length:12px] bg-[right_0.25rem_center] bg-no-repeat pr-8 bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%237a5c1a' stroke-width='1.5'/%3E%3C/svg%3E")] ${
              formData.service ? "" : "text-stone/80"
            }`}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s} className="text-ink">
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          maxLength={10000}
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={describe("message")}
          rows={5}
          className={`${fieldClass} ${border("message")} resize-y`}
          placeholder="Tell us about your project: the date, location and what you have in mind."
        />
      </Field>

      {error && (
        <div role="alert" className="flex gap-4 border-l-2 border-destructive bg-destructive/5 p-5 text-sm text-ink">
          <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-destructive" />
          <div>
            <p className="font-medium">
              {error === TIMEOUT ? "Still waiting for confirmation." : "We couldn’t send your message."}
            </p>
            <p className="mt-1 text-stone">
              {error === TIMEOUT
                ? "This is taking longer than expected, and your message may still arrive. Please check your inbox for our confirmation before sending again, or reach us directly on"
                : `${error}. Please try again, or reach us directly on`}{" "}
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline underline-offset-4"
              >
                WhatsApp
              </a>{" "}
              or at{" "}
              <a href={contact.emailHref} className="font-medium text-ink underline underline-offset-4">
                {contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={isLoading} className="btn btn-ink w-full sm:w-auto sm:min-w-56">
          {isLoading ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <ArrowRight aria-hidden="true" className="size-4" />
            </>
          )}
        </button>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 text-sm text-stone transition-colors hover:text-ink"
        >
          <MessageCircle aria-hidden="true" className="size-4 text-gold-deep" />
          Prefer WhatsApp? Chat now
        </a>
      </div>
      <p className="sr-only" aria-live="polite">
        {isLoading ? "Sending your message" : ""}
      </p>
    </form>
  )
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block text-stone">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-gold-deep">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-destructive">
          <AlertCircle aria-hidden="true" className="size-3.5" />
          {error}
        </p>
      )}
    </div>
  )
}
