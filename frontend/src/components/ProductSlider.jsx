import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductSlider.css";

const ProductSlider = ({ title, products = [] }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  if (!products.length) return null;

  const slide = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

 return (
  <div className="products-container">
    <h2 className="slider-heading">{title}</h2>

    {/* FULL WIDTH SLIDER */}
    <div className="full-width-slider">
      <div className="slider-wrapper">
        <button className="slider-btn left" onClick={() => slide("left")}>
          ❮
        </button>

        <div className="products-slider" ref={sliderRef}>
          {products.map((product) => {
            const offerPrice = product.offerPrice ?? product.price;
            const originalPrice = product.originalPrice;

            return (
              <div className="product-card" key={product._id}>
                <img
                  src={product.images?.[0] || "/placeholder.png"}
                  alt={product.machineName}
                />

                <p className="product-description">
                  {product.machineName}
                </p>

                <p className="product-price">
                  ₹{offerPrice?.toLocaleString()}
                  {originalPrice && (
                    <span className="old-price">
                      ₹{originalPrice.toLocaleString()}
                    </span>
                  )}
                </p>

                <button
                  className="product-btn"
                   onClick={() => navigate(`/product/${product._id}`)}
                >
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>

        <button className="slider-btn right" onClick={() => slide("right")}>
          ❯
        </button>
      </div>
    </div>
  </div>
);

};

export default ProductSlider;
