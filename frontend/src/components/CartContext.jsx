import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [total, setTotal] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  // 🟢 Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🟢 Recalculate TOTAL & CART QUANTITY when cart changes
  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => {
      const price = item.offerPrice || item.price || 0;
      return sum + price * item.quantity;
    }, 0);

    const newCartQty = cart.reduce((sum, item) => sum + item.quantity, 0);

    setTotal(newTotal);
    setCartQuantity(newCartQty);
  }, [cart]);

  // Add product to cart 
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === product._id);
      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prev,
          {
            ...product,
            price: product.offerPrice || product.price || 0,
            quantity: 1
          }
        ];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  // Update quantity 
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item._id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartQuantity,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
