import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { to, subject, name, email, service, budget, timeline, message } = body

    // Create email content
    const emailContent = `
New project inquiry received:

Name: ${name}
Email: ${email}
Service: ${service || "Not specified"}
Budget: ${budget || "Not specified"}
Timeline: ${timeline || "Not specified"}

Message:
${message}

---
This message was sent from your video editor website contact form.
    `.trim()

    // In a real implementation, you would use a service like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    // - Resend
    // - EmailJS

    // For now, we'll return success to indicate the form was processed
    // The main email sending is handled by the mailto: link in the frontend

    console.log("Email would be sent to:", to)
    console.log("Subject:", subject)
    console.log("Content:", emailContent)

    return NextResponse.json({
      success: true,
      message: "Email processed successfully",
    })
  } catch (error) {
    console.error("Error processing email:", error)
    return NextResponse.json({ success: false, message: "Failed to process email" }, { status: 500 })
  }
}
