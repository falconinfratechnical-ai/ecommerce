import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// Function to send emails
export const sendEmail = async ({ to, subject, html }) => {
  try {
    const result = await resend.emails.send({
      from: "MMShoppes <onboarding@resend.dev>", 
      to,
      subject,
      html,
    });

    console.log("📩 Email sent:", result);
    return result;
  } catch (err) {
    console.error("❌ Email Error:", err);
    throw err;
  }
};
