import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { firstName, lastName, company, email, country, phone, message } = req.body;

  // Проверка на обязательные поля
  if (!firstName || !lastName || !company || !email || !country || !phone) {
    return res.status(400).json({ message: "All required fields must be filled." });
  }

  // Настройка транспорта Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Отправка письма администратору
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message || "No message provided."}</p>
      `,
    });

    // Отправка благодарственного письма пользователю
    await transporter.sendMail({
      from: `"Your Company" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us",
      html: `
        <h1>Thank you, ${firstName}!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
        ${message ? `<p><strong>Your Message:</strong> ${message}</p>` : ""}
        <br />
        <p>Best regards,</p>
        <p>Your Company</p>
      `,
    });

    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email. Please try again later." });
  }
}
