import React, { useContext, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
import { CartContext } from "./CartContext.jsx";
import { CiSearch, CiUser, CiShoppingCart  } from "react-icons/ci";
// import { IoChatbubbles } from "react-icons/io5";
import whatsappIcon from "../assets/whatsapp.jpg"



const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // 🔍 fetch search results
  const handleSearch = async (e) => {
    window.scrollTo(0, 0);
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }
    try {
      const res = await fetch(`http://localhost:5000/api/products/search?q=${value}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="nav-left">
          <Link to="/">
            <img src={logo} className="nav-logo" alt="logo" />
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/contact">CONTACT US</Link>
          <Link to="/admin/login">ADMIN</Link>
        </nav>

        <div className="nav-icons">
 <div className="customer-care">
            <img src={whatsappIcon} alt="WhatsApp" className="nav-icon" />
            <a href="tel:+917510155444" className="phone-number">+91 7510155444</a>
         </div>
          {/* 🔍 Toggle Search Bar */}
          <CiSearch
            size={25}
            className="nav-icon"
            onClick={() => setSearchOpen(!searchOpen)}
          />

          <CiUser size={25} className="nav-icon" />

          <Link to="/cart" className="cart-icon-container">
            <CiShoppingCart size={27} className="nav-icon" />
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </Link>
        </div>
      </div>
      {searchOpen && (
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={handleSearch}
            className="search-input"
          />

          {results.length > 0 && (
            <div className="search-results">
              {results.map((item) => (
                <Link
                  to={`/product/${item._id}`}
                  key={item._id}
                  className="search-item"
                  onClick={() => {
                    setSearchOpen(false);
                    setQuery("");
                    setResults([]);
                  }}
                >
                  <img src={item.images[0]} alt="" />
                  <span>{item.machineName}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
