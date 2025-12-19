import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [total, setTotal] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => {
      const price = item.offerPrice || item.price || 0;
      return sum + price * item.quantity;
    }, 0);

    const newQty = cart.reduce((sum, item) => sum + item.quantity, 0);

    setTotal(newTotal);
    setCartQuantity(newQty);
  }, [cart]);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === product._id);

      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: qty,
          price: product.offerPrice || product.price || 0,
        },
      ];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartQuantity,
        addToCart,
        updateQuantity,
        removeFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
