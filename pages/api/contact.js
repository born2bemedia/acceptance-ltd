import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, company, email, country, phone, message } = req.body;

    // Конфигурация транспортера для Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Используем Gmail
      auth: {
        user: process.env.EMAIL_USER, // Берем логин из .env
        pass: process.env.EMAIL_PASS, // Берем пароль из .env
      },
    });

    try {
      // Настройка письма
      await transporter.sendMail({
        from: process.env.EMAIL_USER, // Отправитель (должен совпадать с логином)
        to: "your-recipient-email@example.com", // Замените на email получателя
        subject: "New Contact Form Submission", // Тема письма
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message || "No message provided"}</p>
        `,
      });

      // Успешный ответ
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
