import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, company, email, country, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "coreproseo@gmail.com",
        pass: "Yc5mhIO0403",
      },
    });

    try {
      await transporter.sendMail({
        from: '"Contact Form" <coreproseo@gmail.com>',
        to: "coreproseo@gmail.com",
        subject: "New Contact Form Submission",
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      await transporter.sendMail({
        from: '"Your Company" <coreproseo@gmail.com>',
        to: email,
        subject: "Thank you for contacting us",
        html: `
          <h1>Thank you, ${firstName}!</h1>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your Message:</strong> ${message}</p>
          <br />
          <p>Best regards,</p>
          <p>Your Company</p>
        `,
      });

      res.status(200).json({ message: "Emails sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
