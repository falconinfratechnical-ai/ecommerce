import express from "express";
import Contact from "../schema/contact.js";
import { sendEmail } from "../utils/mailer.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save message to MongoDB
    await Contact.create({ name, email, phone, message });

    // Email to YOU (site owner)
    await sendEmail({
      to: process.env.ORDER_NOTIFICATION_EMAIL,
      subject: "📩 New Contact Form Submission",
      html: `
        <h2><u>FEEDBACK</u></h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
        <hr />
        <p>Submitted on: ${new Date().toLocaleString()}</p>
      `,
    });

    // Confirmation email to customer (optional)
    await sendEmail({
      to: email,
      subject: "Thanks for contacting MMShoppe",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out. We received your message and will get back to you soon.</p>
        <hr />
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ message: "Error occurred" });
  }
});

export default router;
