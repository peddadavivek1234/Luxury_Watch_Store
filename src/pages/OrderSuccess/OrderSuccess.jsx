import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, PackageCheck } from "lucide-react";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const order = JSON.parse(localStorage.getItem("horologeLastOrder") || "null");

  return (
    <section className="order-success-page">
      <div className="order-success-card">
        <CheckCircle2 size={65} />
        <span>HOROLOGE</span>
        <h1>Thank You for Your Order!</h1>
        <p>Your order has been placed successfully.</p>

        {order && (
          <div className="order-information">
            <div><span>Order ID</span><strong>{order.orderId}</strong></div>
            <div><span>Order Date</span><strong>{order.date}</strong></div>
            <div><span>Payment Method</span><strong>{order.payment}</strong></div>
            <div><span>Total Amount</span><strong>₹{order.total.toLocaleString("en-IN")}</strong></div>
          </div>
        )}

        <div className="order-processing">
          <PackageCheck size={22} />
          <span>We appreciate your purchase.</span>
        </div>

        <Link to="/watches">Continue Shopping</Link>
      </div>
    </section>
  );
};

export default OrderSuccess;
