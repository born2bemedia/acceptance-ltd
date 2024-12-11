import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Проверяем, что метод запроса - POST
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { firstName, lastName, company, email, country, phone, message } = req.body;

  // Проверяем, что все обязательные поля заполнены
  if (!firstName || !lastName || !company || !email || !country || !phone) {
    return res.status(400).json({ message: "All required fields must be filled." });
  }

  // Настройка SMTP-транспорта для Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true для порта 465, false для других портов
    auth: {
      user: process.env.EMAIL_USER, // Ваш email
      pass: process.env.EMAIL_PASS, // Пароль приложения (App Password)
    },
  });

  console.log("Starting email handler...");
  console.log("Request body:", req.body);
  
  try {
    // Отправка email админу
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
    console.log("Email to admin sent successfully.");
  } catch (error) {
    console.error("Error sending email to admin:", error);
    return res.status(500).json({ message: "Failed to send email to admin." });
  }

  try {
    // Отправляем благодарственное письмо пользователю
    await transporter.sendMail({
      from: `"Your Company" <${process.env.EMAIL_USER}>`,
      to: email, // Email пользователя
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
    console.log("Thank you email to user sent successfully.");
  } catch (error) {
    console.error("Error sending thank you email to user:", error);
    return res.status(500).json({ message: "Failed to send thank you email." });
  }

  // Если всё успешно
  return res.status(200).json({ message: "Emails sent successfully." });
}
