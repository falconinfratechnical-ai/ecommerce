import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AddProduct.css";

const API = "http://localhost:5000/api/products";

export default function AddProduct() {
  const [machineName, setMachineName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [weight, setWeight] = useState("");
  const [warranty, setWarranty] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  // ✅ CATEGORY LIST
  const categories = [
    "Food Machinery",
    "Construction Machinery",
    "Agricultural Machinery",
    "Industrial Machinery",
    "Textile Machinery",
    "Transport & Automotive",
    "Thermal Machinery",
    "Packaging Machinery",
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageUpload = (e) => {
    setImages([...e.target.files]);
  };

  // ✅ ADD PRODUCT
  const addProduct = async () => {
    if (!category) {
      alert("Please select a category");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();

      formData.append("machineName", machineName);
      formData.append("category", category);
      formData.append("brand", brand);
      formData.append("modelNumber", modelNumber);
      formData.append("originalPrice", originalPrice);
      formData.append("offerPrice", offerPrice);
      formData.append("capacity", capacity);
      formData.append("weight", weight);
      formData.append("warranty", warranty);
      formData.append("description", description);

      images.forEach((img) => formData.append("images", img));

      const res = await axios.post(API, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      //  NEW PRODUCT COMES FIRST
      setProducts([res.data.product, ...products]);

      //  RESET FORM
      setMachineName("");
      setCategory("");
      setBrand("");
      setModelNumber("");
      setOriginalPrice("");
      setOfferPrice("");
      setCapacity("");
      setWeight("");
      setWarranty("");
      setDescription("");
      setImages([]);

      alert("Product added successfully!");
    } catch (err) {
      console.log(err);
      alert("Error adding product");
    }
  };

  //  DELETE
  const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");

    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${API}/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProducts(products.filter((p) => p._id !== id));
        alert("Product deleted successfully");
      } catch (err) {
        console.log(err);
        alert("Error deleting product");
      }
    }
  };

  //  START EDIT
  const startEdit = (product) => {
    setEditingId(product._id);
    setEditData({
      machineName: product.machineName || "",
      category: product.category || "",
      brand: product.brand || "",
      modelNumber: product.modelNumber || "",
      originalPrice: product.originalPrice || "",
      offerPrice: product.offerPrice || "",
      capacity: product.capacity || "",
      weight: product.weight || "",
      warranty: product.warranty || "",
      description: product.description || "",
    });
  };

  //  SAVE EDIT
  const saveEdit = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();

      Object.keys(editData).forEach((key) => {
        formData.append(key, editData[key]);
      });

      images.forEach((img) => formData.append("images", img));

      const res = await axios.put(`${API}/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setProducts(products.map((p) => (p._id === id ? res.data.product : p)));
      setEditingId(null);
      setImages([]);

      alert("Product updated successfully!");
    } catch (err) {
      console.log(err);
      alert("Error updating product");
    }
  };

  return (
    <div className="add-product-container">
      <h2 className="heading">Add New Product</h2>

      {/* ✅ FORM */}
      <div className="form">
        <input
          type="text"
          placeholder="Machine Name"
          value={machineName}
          onChange={(e) => setMachineName(e.target.value)}
        />

        {/* ✅ SELECT CATEGORY */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select Category
          </option>

          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <input
          type="text"
          placeholder="Model Number"
          value={modelNumber}
          onChange={(e) => setModelNumber(e.target.value)}
        />

        <input
          type="number"
          placeholder="Original Price"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Offer Price"
          value={offerPrice}
          onChange={(e) => setOfferPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />

        <input
          type="text"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="text"
          placeholder="Warranty"
          value={warranty}
          onChange={(e) => setWarranty(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="upload-label">Upload Images</label>
        <input type="file" multiple onChange={handleImageUpload} />

        {/* PREVIEW */}
        <div className="image-preview">
          {images.map((img, i) => (
            <img key={i} src={URL.createObjectURL(img)} alt="preview" />
          ))}
        </div>

        <button className="add-btn" onClick={addProduct}>
          Add Product
        </button>
      </div>

      {/* ✅ PRODUCT LIST */}
      <div className="all-products">
        <h2>All Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              {editingId === product._id ? (
                <>
                  <input
                    type="text"
                    value={editData.machineName}
                    onChange={(e) =>
                      setEditData({ ...editData, machineName: e.target.value })
                    }
                  />

                  <select
                    value={editData.category}
                    onChange={(e) =>
                      setEditData({ ...editData, category: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Select Category
                    </option>

                    {categories.map((cat, i) => (
                      <option key={i} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>

                  <textarea
                    value={editData.description}
                    onChange={(e) =>
                      setEditData({ ...editData, description: e.target.value })
                    }
                  />

                  <input type="file" multiple onChange={handleImageUpload} />

                  <div className="card-actions">
                    <button className="save-btn" onClick={() => saveEdit(product._id)}>
                      Save
                    </button>
                    <button className="cancel-btn" onClick={() => setEditingId(null)}>
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {product.images?.[0] && (
                    <img src={product.images[0]} alt={product.machineName} />
                  )}

                  <p>{product.machineName}</p>
                  <p>₹{product.offerPrice}</p>

                  <div className="card-actions">
                    <button className="edit-btn" onClick={() => startEdit(product)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => deleteProduct(product._id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
