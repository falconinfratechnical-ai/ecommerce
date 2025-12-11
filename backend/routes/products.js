import express from "express";
import upload from "../middelware/multer.js";
import adminAuth from "../middelware/adminAuth.js";
import Product from "../schema/product.js";

const router = express.Router();


// CREATE PRODUCT (Admin only)
router.post("/", adminAuth, upload.array("images", 10), async (req, res) => {
  try {
     const { machineName, category, brand, modelNumber,originalPrice, offerPrice, capacity, weight, warranty, description } = req.body;

    const imageUrls = req.files.map((file) => file.path);

    const product = await Product.create({
      machineName,
      category,
      brand,
      modelNumber,
      price: offerPrice ? Number(offerPrice) : originalPrice ? Number(originalPrice) : undefined,
     originalPrice: originalPrice ? Number(originalPrice) : undefined,
      offerPrice: offerPrice ? Number(offerPrice) : undefined,
      capacity,
      weight,
      warranty,
      description,
      images: imageUrls,
    });

    res.json({ msg: "Product created", product });
  } catch (err) {
  console.error("PRODUCT CREATE ERROR:", err);
  res.status(500).json({ msg: "Server error", error: err.message });
}
});

// 🔍 SEARCH PRODUCT (IMPORTANT: PLACE ABOVE /:id)
router.get("/search", async (req, res) => {
  const query = req.query.q;

  const products = await Product.find({
    
    machineName: { $regex: query, $options: "i" }
  });

  res.json(products);
});


// UPDATE PRODUCT
router.put("/:id", adminAuth, upload.array("images", 10), async (req, res) => {
  try {
    const updatedData = { ...req.body };

    if (req.files && req.files.length > 0) {
      updatedData.images = req.files.map((file) => file.path);
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    if (!updatedProduct) return res.status(404).json({ msg: "Product not found" });

    res.json({ msg: "Product updated successfully", product: updatedProduct });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});


// DELETE PRODUCT
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "Product not found" });
    res.json({ msg: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});



// ⭐ GET ALL PRODUCTS + FILTER BY CATEGORY
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {};

    if (category) {
      filter.category = category;
    }
    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});



// GET SINGLE PRODUCT (Must be last)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ msg: "Product not found" });

    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});


export default router;
