import nodemailer from "nodemailer";

const emailUser = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASS;

async function sendEmail(name: string, email: string, message: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: password,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: emailUser,
      subject: "New Contact Form Message",
      text: `You received a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      response: { success: true, message: "Email sent successfully!" },
      status: 200,
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`[sendEmail error]: ${message}`);
    throw new Error(message);
  }
}

export default sendEmail;
