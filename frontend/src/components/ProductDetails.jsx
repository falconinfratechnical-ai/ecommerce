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

  // 🔍 ZOOM STATE
  const [zoom, setZoom] = useState({
    show: false,
    x: 0,
    y: 0,
  });

  const { cart, addToCart, updateQuantity } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/products/${id}`
        );
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

  // 🔍 HANDLE ZOOM (tracks mouse position)
  const handleZoom = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoom({
      show: true,
      x,
      y,
    });
  };

  const cartItem = cart.find((item) => item._id === id);
  const quantity = cartItem ? cartItem.quantity : 1;

  const increaseQty = () => {
    updateQuantity(id, quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!cartItem) {
      addToCart(product, 1);
    }
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details-container">
      <button className="back-arrow" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* LEFT COLUMN */}
      <div className="left-column">

        {/* IMAGE SLIDER (HOVER SOURCE) */}
        <div
          className="image-slider zoom-source"
          onMouseMove={handleZoom}
          onMouseLeave={() => setZoom({ show: false })}
        >
    

          <img
            src={product.images[currentImage]}
            alt="Product"
            className="slider-image"
          />

        </div>

        {/* THUMBNAILS */}
  <div className="thumbnail-wrapper">

  {/* LEFT ARROW */}
  <button
    className="thumb-arrow left"
    onClick={handlePrev}
  >
    ❮
  </button>

  {/* THUMBNAILS */}
  <div className="thumbnail-row">
    {product.images.slice(0, 3).map((img, index) => (
      <img
        key={index}
        src={img}
        alt="thumbnail"
        className={`thumbnail ${
          currentImage === index ? "active" : ""
        }`}
        onClick={() => setCurrentImage(index)}
      />
    ))}
  </div>

  {/* RIGHT ARROW */}
  <button
    className="thumb-arrow right"
    onClick={handleNext}
  >
    ❯
  </button>

</div>


        {/* QUANTITY */}
        {cartItem && (
          <div className="quantity-box">
            <div className="qty-controls">
              <button onClick={decreaseQty}>−</button>
              <span className="qty-value">{quantity}</span>
              <button onClick={increaseQty}>+</button>
            </div>
          </div>
        )}

        {/* ADD TO CART */}
        <button className="cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
        <h1 className="product-title">{product.machineName}</h1>

        <p className="price">
          {product.originalPrice && (
            <span className="old-price">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
          ₹{(product.offerPrice ?? product.price).toLocaleString()}
        </p>

        {/* 🔍 ZOOM PREVIEW BELOW PRICE */}
        {zoom.show && (
          <div className="zoom-preview-right">
            <img
              src={product.images[currentImage]}
              alt="Zoomed"
              style={{
                transform: `translate(-${zoom.x}%, -${zoom.y}%) scale(2)`,
              }}
            />
          </div>
        )}

        <div className="info-box">
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Model:</strong> {product.modelNumber}</p>
          <p><strong>Capacity:</strong> {product.capacity}</p>
        </div>

        <div className="description-box">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
