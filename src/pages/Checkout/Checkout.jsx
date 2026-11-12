import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, clearCart } = useCart();
  const [payment, setPayment] = useState("Cash on Delivery");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const shipping = subtotal >= 50000 || subtotal === 0 ? 0 : 500;
  const total = subtotal + shipping;

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cartItems.length === 0) {
      navigate("/watches");
      return;
    }

    const order = {
      orderId: `HORO${Date.now().toString().slice(-8)}`,
      customer: form,
      items: cartItems,
      total,
      payment,
      date: new Date().toLocaleDateString("en-IN")
    };

    localStorage.setItem("horologeLastOrder", JSON.stringify(order));
    clearCart();
    navigate("/order-success");
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <Link to="/watches">Explore Watches</Link>
      </div>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-heading">
        <span>HOROLOGE</span>
        <h1>Secure Checkout</h1>
        <p>Complete your details to place your order.</p>
      </div>

      <form className="checkout-layout" onSubmit={handleSubmit}>
        <div className="checkout-form">
          <div className="checkout-card">
            <h2>Customer Details</h2>
            <div className="checkout-fields">
              <label>Full Name<input name="name" value={form.name} onChange={handleChange} required /></label>
              <label>Email Address<input type="email" name="email" value={form.email} onChange={handleChange} required /></label>
              <label>Phone Number<input type="tel" name="phone" value={form.phone} onChange={handleChange} pattern="[0-9]{10}" title="Enter a 10-digit phone number" required /></label>
            </div>
          </div>

          <div className="checkout-card">
            <h2>Shipping Address</h2>
            <div className="checkout-fields">
              <label className="checkout-full">Address<input name="address" value={form.address} onChange={handleChange} required /></label>
              <label>City<input name="city" value={form.city} onChange={handleChange} required /></label>
              <label>State<input name="state" value={form.state} onChange={handleChange} required /></label>
              <label>PIN Code<input name="pincode" value={form.pincode} onChange={handleChange} pattern="[0-9]{6}" title="Enter a 6-digit PIN code" required /></label>
            </div>
          </div>

          <div className="checkout-card">
            <h2>Payment Method</h2>
            <div className="payment-options">
              {["Cash on Delivery", "UPI", "Credit / Debit Card"].map((method) => (
                <label key={method}>
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={payment === method}
                    onChange={(event) => setPayment(event.target.value)}
                  />
                  {method}
                </label>
              ))}
            </div>
            <p className="payment-note">Payment selection is a demonstration UI. No actual payment is processed.</p>
          </div>
        </div>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>
          {cartItems.map((item) => (
            <div className="checkout-product" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <span>Qty: {item.quantity}</span>
              </div>
              <b>₹{(item.price * item.quantity).toLocaleString("en-IN")}</b>
            </div>
          ))}
          <div className="checkout-total-row"><span>Subtotal</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
          <div className="checkout-total-row"><span>Shipping</span><strong>{shipping === 0 ? "Free" : `₹${shipping}`}</strong></div>
          <div className="checkout-grand-total"><span>Total</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
          <button type="submit">Place Order</button>
          <p className="checkout-secure">Your order details are stored locally for this demo.</p>
        </aside>
      </form>
    </section>
  );
};

export default Checkout;
