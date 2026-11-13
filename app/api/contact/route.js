// ─── ─── Contact form API route — sends the inquiry email directly ─── ───
import nodemailer from "nodemailer";

const TO = ["sohail@sohailworks.com", "sohaildev125@gmail.com"];

// Pooled connection — reused across submissions.
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  pool: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  console.log("Contact form submission received");
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company") || "";
    const website = formData.get("website") || "";
    const service = formData.get("service");
    const budget = formData.get("budget");
    const message = formData.get("message");
    const file = formData.get("attachment");

    if (!name || !email || !service || !budget || !message) {
      return Response.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      ...(company ? [`Company: ${company}`] : []),
      ...(website ? [`Website: ${website}`] : []),
      `Service: ${service}`,
      `Budget: ${budget}`,
      "",
      message,
    ];

    const attachments = [];
    if (file && file.size > 0) {
      attachments.push({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      });
    }

    await transporter.sendMail({
      from: `"SohailWorks Contact Form" <${process.env.SMTP_USER}>`,
      to: TO.join(", "),
      replyTo: email,
      subject: `New inquiry: ${service} — ${name}`,
      text: lines.join("\n"),
      attachments,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { success: false, message: error.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
