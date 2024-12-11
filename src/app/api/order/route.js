import { NextResponse } from "next/server";
import { google } from "googleapis";

function makeBody(to, from, subject, message) {
  const str = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    message,
  ].join("\n");

  return Buffer.from(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const {
      firstName,
      lastName,
      company,
      email,
      country,
      phone,
      solution,
      message,
      agreement,
    } = bodyJSON;

    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID,
      process.env.EMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error("Failed to generate access token.");
    }

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    const adminEmailBody = makeBody(
      process.env.EMAIL_USER,
      process.env.EMAIL_USER,
      `New Order Request`,
      `
      <p><b>First Name:</b> ${firstName}</p>
      <p><b>Last Name:</b> ${lastName}</p>
      <p><b>Company:</b> ${company}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Country:</b> ${country}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Solution:</b> ${solution}</p>
      <p><b>Message:</b> ${message || "N/A"}</p>
      `
    );

    const clientEmailBody = makeBody(
      email,
      process.env.EMAIL_USER,
      "Aceptanta: We've Received Your Request ",
      `
      <table width="640" style="border-collapse:collapse;margin: 0 auto;">
            <thead>
                <tr>
                    <th style="background: url(https://aceptanta.com/images/mail/Header.png);padding: 20px;text-align: left;height: 117px;background-size: contain;background-repeat: no-repeat;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 50px 40px;">
                        <h3 style="font-family: 'Roboto', sans-serif; color: #141D23;font-size: 16px;font-weight: 700;line-height: 22px;margin: 0 0 25px 0;">Dear ${firstName},</h3>
                        <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; line-height: 22.4px; color: #0A0A0A; margin: 20px 0;">
                            Thank you for reaching out to Acceptance LTD. We'’'ve successfully received your request for a consultation regarding our solutions, and our team is already reviewing the details.
                        </p>
                        <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; line-height: 22.4px; color: #0A0A0A; margin: 20px 0;">
                            One of our experts will contact you shortly to discuss your specific needs and provide tailored recommendations to help you move forward efficiently.
                            In the meantime, feel free to explore more about our services or reply to this email if you have any immediate questions.
                        </p>
                        <p style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 400; line-height: 22.4px; color: #0A0A0A; margin: 20px 0;">
                            We look forward to assisting you.
                        </p>

                        <span style="font-family: 'Roboto', sans-serif; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #0A0A0A; margin: 20px 0;">
                            Best regards,<br>The Aceptanta Team
                        </span>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td style="background-color: #222222;padding: 25px 40px;background-size: cover;background-position: top right;">
                        <table style="width: 100%;border-collapse:collapse;">
                            <tr>
                                <td style="font-family: 'Roboto', sans-serif; color: #FFFFFF;font-style: normal;font-weight: 600;font-size: 20px;line-height: 24px;text-align: center;">
                                    Thanks for using <span style="color: #47B782;">Aceptanta</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </tfoot>
        </table>
      `
    );

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: adminEmailBody },
    });

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: clientEmailBody },
    });

    return NextResponse.json({ message: "Emails sent successfully." });
  } catch (error) {
    console.error("Error details:");
    console.error("Message:", error.message);
    console.error("Stack Trace:", error.stack);
    return NextResponse.json(
      { message: "Failed to send emails.", error: error.message },
      { status: 500 }
    );
  }
}
