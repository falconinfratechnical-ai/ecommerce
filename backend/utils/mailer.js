import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ALERT_EMAIL,
    pass: process.env.ALERT_EMAIL_PASS
  }
});

transporter.verify((err) => {
  if (err) {
    console.error("❌ Nodemailer error:", err);
  } else {
    console.log("✅ Nodemailer is ready");
  }
});

export default transporter; 