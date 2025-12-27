"use server"

import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export async function sendContactEmail(data: EmailData) {
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
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service Interested:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: data.email,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "We received your inquiry - DamzyPictures",
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your inquiry and will get back to you as soon as possible.</p>
        <p><strong>Your Details:</strong></p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p>Best regards,<br>DamzyPictures Team</p>
      `,
    })

    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email" }
  }
}
