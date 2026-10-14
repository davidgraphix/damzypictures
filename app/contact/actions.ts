"use server"

import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

// Must match the <option> values in components/contact/contact-form.tsx ("" = not selected).
const ALLOWED_SERVICES = ["", "Photography", "Videography", "Live Streaming", "Content Creation", "Drone Services", "Other"]

// A single plain address: no spaces, commas, semicolons or angle brackets, so the
// confirmation email can never be addressed to more than one recipient.
const SINGLE_EMAIL = /^[^\s@,;<>"]+@[^\s@,;<>"]+\.[^\s@,;<>"]+$/

/** Escape user-supplied text before inserting it into email HTML. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

/** Validate and normalise the untrusted payload. Returns null if it is not acceptable. */
function parseInput(data: unknown): EmailData | null {
  if (!data || typeof data !== "object") return null
  const raw = data as Record<string, unknown>
  const field = (key: keyof EmailData) => (typeof raw[key] === "string" ? (raw[key] as string).trim() : null)

  const name = field("name")
  const email = field("email")
  const phone = field("phone")
  const service = field("service") ?? ""
  const message = field("message")

  if (!name || name.length > 200) return null
  if (!email || email.length > 254 || !SINGLE_EMAIL.test(email)) return null
  if (!phone || phone.length > 50) return null
  if (!ALLOWED_SERVICES.includes(service)) return null
  if (!message || message.length > 10000) return null

  return { name, email, phone, service, message }
}

export async function sendContactEmail(data: EmailData) {
  const input = parseInput(data)
  if (!input) {
    return { success: false, message: "Some details look incorrect" }
  }

  // Safe copies for HTML bodies; the subject is plain text, so only strip line breaks there.
  const safe = {
    name: escapeHtml(input.name),
    email: escapeHtml(input.email),
    phone: escapeHtml(input.phone),
    service: escapeHtml(input.service),
    message: escapeHtml(input.message).replace(/\r?\n/g, "<br>"),
  }
  const subjectName = input.name.replace(/[\r\n]+/g, " ")

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Send email to business
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "damzypictures@gmail.com",
      subject: `New Contact Form Submission from ${subjectName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Service Interested:</strong> ${safe.service}</p>
        <p><strong>Message:</strong></p>
        <p>${safe.message}</p>
      `,
      replyTo: input.email,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: input.email,
      subject: "We received your inquiry - DamzyPictures",
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${safe.name},</p>
        <p>We've received your inquiry and will get back to you as soon as possible.</p>
        <p><strong>Your Details:</strong></p>
        <p><strong>Service:</strong> ${safe.service}</p>
        <p>Best regards,<br>DamzyPictures Team</p>
      `,
    })

    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email" }
  }
}
