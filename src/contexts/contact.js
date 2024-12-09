export default function handler(req, res) {
    if (req.method === "POST") {
      const { firstName, lastName, company, email, country, phone, message } = req.body;
  
      // Логирование данных (можно заменить на отправку email или сохранение в базу данных)
      console.log("Form submission:", {
        firstName,
        lastName,
        company,
        email,
        country,
        phone,
        message,
      });
  
      // Ответ клиенту
      res.status(200).json({ message: "Form submitted successfully" });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  