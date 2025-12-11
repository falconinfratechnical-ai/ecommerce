import bcrypt from "bcrypt";
import User from "./schema/User.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    await User.create({
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin Created Successfully");
    process.exit();
  } catch (err) {
    console.error("Error:", err);
    process.exit();
  }
}

createAdmin();
