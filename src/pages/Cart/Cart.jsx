import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();

  const shipping = subtotal >= 50000 || subtotal === 0 ? 0 : 500;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <ShoppingBag size={55} />
        <h2>Your Shopping Bag Is Empty</h2>
        <p>Discover our exclusive collection of luxury watches.</p>
        <Link to="/watches">Explore Watches</Link>
      </div>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-heading">
        <span>YOUR SELECTION</span>
        <h1>Shopping Bag</h1>
        <p>{cartItems.length} different watch(es) in your bag</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <span>{item.brand}</span>
                <h3>{item.name}</h3>
                <strong>₹{item.price.toLocaleString("en-IN")}</strong>

                <div className="cart-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>

              <div className="cart-item-end">
                <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                <button onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={18} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>
          <div><span>Subtotal</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
          <div><span>Shipping</span><strong>{shipping === 0 ? "Free" : `₹${shipping}`}</strong></div>
          <div className="cart-total"><span>Total</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
          <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
          <Link to="/watches">Continue Shopping</Link>
        </aside>
      </div>
    </section>
  );
};

export default Cart;
