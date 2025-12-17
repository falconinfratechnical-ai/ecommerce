import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AddProduct from "./components/AddProduct.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import Products from "./components/Product.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/CartPage.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Contact from "./components/ContactUs.jsx";
import { CartProvider } from "./components/CartContext.jsx";
import Privacy from "./components/Privacy.jsx";
import Terms from "./components/Terms.jsx";
import ReturnPolicy from "./components/ReturnPolicy.jsx";

function App() {
  return (
    <BrowserRouter>   
      {/* Wrap your entire app inside CartProvider to share cart state */}
      <CartProvider>

        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
               <Route path="/about" element={<AboutUs />} />
                       <Route path="/contact" element={<Contact />} />

                         <Route path="/privacy" element={<Privacy />} />
                         <Route path="/terms" element={<Terms />} />
                          <Route path="/return" element={<ReturnPolicy />} />

          <Route path="/admin/login" element={<AdminLogin />} />

          {/* You can add protected/admin routes here if needed */}
          <Route
            path="/admin/products"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/add-product"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />
        </Routes>

        <Footer />

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
   