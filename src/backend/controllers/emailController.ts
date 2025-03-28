import nodemailer from "nodemailer";

export async function sendEmail(name: string, email: string, message: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      text: `You received a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      response: { success: true, message: "Email sent successfully!" },
      status: 200,
    };
  } catch (err) {
    console.error("Email sending error:", err);
    return {
      response: { success: false, message: "Failed to send email" },
      status: 500,
    };
  }
}
