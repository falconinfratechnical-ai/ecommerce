

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get("category");

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `${import.meta.env.VITE_API_URL}/api/products`;

        
        if (categoryFilter) {
          url += `?category=${categoryFilter}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryFilter]);

  return (
    <>
      <div className="products-banner">
        <h1 className="products-heading">Our Products</h1>
        <h3 className="products-subtitle">
          One of India's fastest-growing Food Processing Machines, Machineries &
          tools brands.
        </h3>
      </div>

      <div className="products-container">
        <hr />

        <div className="products-grid">
          {loading ? (
            <div class="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
          ) : products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            products.map((product) => {
              const offerPrice = product.offerPrice ?? product.price;
              const originalPrice = product.originalPrice;

              return (
                <div key={product._id} className="product-card">
                  <img
                    src={product.images?.[0]}
                    alt={product.machineName}
                    className="product-image"
                  />

                  <h3 className="product-title">
                    {product.machineName}
                  </h3>

                  <p className="product-description">
                    {product.description?.slice(0, 80)}...
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
                    View Product
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Products;

