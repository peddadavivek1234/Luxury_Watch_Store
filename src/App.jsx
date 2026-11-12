import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Watches from "./pages/Watches/Watches";
import WatchDetails from "./pages/WatchDetails/WatchDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import Auth from "./pages/Auth/Auth";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/watches" element={<Watches />} />

          <Route path="/watch/:id" element={<WatchDetails />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/order-success" element={<OrderSuccess />} />

          <Route path="/login" element={<Auth />} />

          <Route path="/signup" element={<Auth />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
