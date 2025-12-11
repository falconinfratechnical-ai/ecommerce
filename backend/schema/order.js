import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customer: {
    name: String,
    email: String,
    phone: String,
    address: String,
    state: String,
    pincode: String,
    gst: String
  },
  items: Array,
  total: Number,
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
