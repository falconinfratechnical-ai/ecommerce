import React, { useState } from "react";
import "../styles/ContactUs.css";
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Response submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Error submitting form!");
    }
  };

  return (
    <>
      <div className="products-banner">
        <h1 className="products-heading1">CONTACT US</h1>
        <h3 className="products-subtitle">
          One of India's fastest-growing Food Processing Machines, Machineries & tools brands.
        </h3>
      </div>
   <div className="feedback"><h2>FEEDBACK</h2></div>
      <div className="contact-wrapper">
        
        {/* Left Form */}
        <div className="contact-left">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Your Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Your Phone"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            Submit Now
          </button>
        </div>

        {/* Middle Contact Details */}
        <div className="contact-middle">
  <h3 className="person-name">
    <u>For Trade Enquiry</u>
  </h3>

  <div className="info-item">
    <MdLocationPin className="icon1" />
    <p>
      mmshoppe<br /> ISC, Falcon Infrastructure ltd, Door No. XVI/128, puthiya
road jn. Eloor udhyogamandal P.O., Cochin-683501<br />
    </p>
  </div>

  <div className="info-item">
    <MdPhone className="icon" />
    <a href="tel:+917510155444">+91 7510155444</a>
  </div>

  <div className="info-item">
    <MdEmail className="icon" />
    <a href="mailto:mmshoppes@gmail.com">mmshoppes@gmail.com</a>
  </div>

  <div className="social-icons">
    <FaFacebookF />
    <FaTwitter />
    <FaInstagram />
    <FaYoutube />
  </div>
</div>


        {/* Google Map */}
        <div className="contact-right">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=..." loading="lazy"></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
