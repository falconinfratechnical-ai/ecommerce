import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext.jsx";
import "../styles/CartPage.css";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm"; 

const Cart = () => {
  const navigate = useNavigate();
  const { cart, total, removeFromCart, updateQuantity } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="cart-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="cart-title">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id} className="cart-item">
              <img
                src={item.images?.[0]}
                alt={item.machineName}
                className="cart-item-img"
              />
              <h3 className="item-name">{item.machineName}</h3>

              <div className="item-actions">
                <div className="quantity-container">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>

                  <span className="qty-number">{item.quantity}</span>

                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <p className="item-price">
                  ₹{((item.offerPrice || item.price || 0) * item.quantity).toLocaleString()}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2 className="cart-total">
            Total: ₹{(total || 0).toLocaleString()}
          </h2>
          {!showCheckout && (
            <div className="place-order-container">
              <button
                className="place-order-btn"
                onClick={() => setShowCheckout(true)} 
              >
                Place Order
              </button>
            </div>
          )}
          {showCheckout && <CheckoutForm cart={cart} total={total} />}
        </>
      )}
    </div>
  );
};

export default Cart;
