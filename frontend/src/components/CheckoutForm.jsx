import { useState } from "react";
import "../styles/Checkout.css";

const states = [
  "Kerala",
  "Tamil Nadu",
  "Karnataka",
  "Maharashtra",
  "Delhi",
  "Telangana",
  "Andhra Pradesh",
  "Gujarat",
  "Rajasthan",
  "Uttar Pradesh"
];

const pincodeHint = {
  Kerala: "6xxxxx",
  "Tamil Nadu": "6xxxxx",
  Karnataka: "5xxxxx",
  Maharashtra: "4xxxxx",
  Delhi: "11xxxx",
  Telangana: "5xxxxx",
  "Andhra Pradesh": "5xxxxx",
  Gujarat: "3xxxxx",
  Rajasthan: "3xxxxx",
  "Uttar Pradesh": "2xxxxx"
};

const CheckoutForm = ({ cart, total }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    state: "",
    pincode: "",
    paymentMethod: "COD",
    gst: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData, cart, total })
    });

    if (res.ok) {
      alert("✅ Order placed! Check your email");
      localStorage.removeItem("cart");
      window.location.reload();
    } else {
      alert("❌ Email failed");
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Secure Checkout</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      <textarea name="address" placeholder="Complete Address" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />

      <select name="state" onChange={handleChange} required>
        <option className="state" value="">Select State</option>
        {states.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <input
        name="pincode"
        placeholder={`Pincode ${pincodeHint[formData.state] || ""}`}
        onChange={handleChange}
        required
      />

      <select name="paymentMethod" onChange={handleChange}>
        <option value="PREPAID">PREPAID</option>
        <option value="ONLINE">Online Payment</option>
      </select>

      <input name="gst" placeholder="GST (Optional)" onChange={handleChange} />

      <button className="button" type="submit">  <div class="wrap">
        <p>
          <span>✧</span>
          <span>✦</span>
          Confirm Order ₹{total}
        </p>
      </div></button>
    </form>
  );
};

export default CheckoutForm;
