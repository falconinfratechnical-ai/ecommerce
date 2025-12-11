import express from "express";
import Contact from "../schema/contact.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ALERT_EMAIL,
    pass: process.env.ALERT_EMAIL_PASS,
  },
});

// Contact Form API
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save to MongoDB
    await Contact.create({ name, email, phone, message });

    // Email content
    const mailOptions = {
      from: process.env.ALERT_EMAIL,
      to: process.env.ORDER_NOTIFICATION_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
        <hr />
        <p>Submitted on: ${new Date().toLocaleString()}</p>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted and email sent successfully!" });
  } catch (error) {
    console.error("Error saving contact data or sending email:", error);
    res.status(500).json({ message: "Error occurred" });
  }
});

export default router;
