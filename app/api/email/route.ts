import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  const { email, message, name } = await request.json();

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    subject: `Message from ${name}`,
    // text: message,
    html: `
    <p>Name: ${name} </p>
    <p>Email: ${email} </p>
    <p>Message: ${message} </p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success!", status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 });
  }
}
