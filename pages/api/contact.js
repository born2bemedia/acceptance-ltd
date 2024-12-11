import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, company, email, country, phone, message } = req.body;

  if (!firstName || !lastName || !email || !company || !country || !phone) {
    return res.status(400).json({ message: "All required fields must be filled." });
  }

  try {
    // Настройка транспортера для отправки email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email, который отправляется вам
    const mailToAdmin = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `
        You have a new contact form submission:
        - Name: ${firstName} ${lastName}
        - Company: ${company}
        - Email: ${email}
        - Country: ${country}
        - Phone: ${phone}
        - Message: ${message || "No message provided."}
      `,
    };

    // Email-ответ пользователю
    const mailToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us!",
      text: `
        Hi ${firstName},

        Thank you for reaching out to us. We have received your message and will get back to you shortly.

        Best regards,
        The Team
      `,
    };

    // Отправка писем
    await transporter.sendMail(mailToAdmin);
    await transporter.sendMail(mailToUser);

    res.status(200).json({ message: "Emails sent successfully." });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ message: "Failed to send emails. Please try again later." });
  }
}
