import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube
} from "react-icons/fa6";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter-content">
          <span className="footer-small-title">STAY CONNECTED</span>
          <h2>Time Is Precious. Stay Timeless.</h2>
          <p>
            Subscribe to receive exclusive offers, new arrivals,
            and luxury watch updates.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Subscribe <ArrowRight size={18} />
          </button>

          {message && <p className="newsletter-message">{message}</p>}
        </form>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            HOROLOGE<span>.</span>
          </Link>

          <p>
            Discover timeless elegance with our exclusive collection
            of premium luxury watches. Every second tells a story.
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/watches">Our Watches</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>
          <Link to="/login">My Account</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/watches">Collections</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <p>
            <MapPin size={18} />
            India
          </p>

          <p>
            <Phone size={18} />
            +91 98765 43210
          </p>

          <p>
            <Mail size={18} />
            support@horologe.com
          </p>

          <p>
            <Clock size={18} />
            Mon - Sat: 9 AM - 6 PM
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} HOROLOGE. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
