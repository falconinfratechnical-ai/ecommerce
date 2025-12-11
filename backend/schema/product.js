import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  machineName: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  modelNumber: { type: String, required: true },
 originalPrice: { type: Number },
   offerPrice: { type: Number },
  capacity: { type: String, required: true },
  weight: { type: String, required: true },
  warranty: { type: String, required: true },
  description: { type: String, required: true },
  images: [String],
}, { timestamps: true });

export default mongoose.model("Product", productSchema);