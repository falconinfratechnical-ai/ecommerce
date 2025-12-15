import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetails.css";
import { CartContext } from "../components/CartContext.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  const { cart, addToCart, updateQuantity } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const cartItem = cart.find(item => item._id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading product details, please wait...</p>
      </div>
    );
  }
  if (!product) {
    return <p>Product not found.</p>;
  }

  const handlePrev = () =>
    setCurrentImage(prev =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );

  const handleNext = () =>
    setCurrentImage(prev =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="product-details-container">
      <button className="back-arrow" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Image Slider */}
      <div className="image-slider">
        <button className="arrow left" onClick={handlePrev}>❮</button>
        <img
          src={product.images[currentImage]}
          alt="Product"
          className="slider-image"
        />
        <button className="arrow right" onClick={handleNext}>❯</button>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-row">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`thumbnail ${currentImage === index ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>

      {/* Product Info */}
      <div className="details-box">
        <h1>{product.machineName}</h1>

        <p className="price">
          {product.originalPrice && (
            <span
              style={{
                textDecoration: "line-through",
                color: "#888",
                marginRight: 8,
              }}
            >
              ₹{Number(product.originalPrice).toLocaleString()}
            </span>
          )}
          <span>
            ₹{(product.offerPrice ?? product.price ?? 0).toLocaleString()}
          </span>
        </p>

        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Model:</strong> {product.modelNumber}</p>
        <p><strong>Capacity:</strong> {product.capacity}</p>
        <p><strong>Weight:</strong> {product.weight}</p>
        <p><strong>Warranty:</strong> {product.warranty}</p>

        <p className="description">{product.description}</p>

        {cartItem && (
          <div className="quantity-container">
            <button
              className="qty-btn"
              onClick={() => updateQuantity(product._id, quantity - 1)}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="qty-number">{quantity}</span>
            <button
              className="qty-btn"
              onClick={() => updateQuantity(product._id, quantity + 1)}
            >
              +
            </button>
          </div>
        )}

        <button className="cart-btn" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
