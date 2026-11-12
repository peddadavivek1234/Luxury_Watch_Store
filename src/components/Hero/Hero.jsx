import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-label">THE ART OF TIMEKEEPING</span>

        <h1>
          TIMELESS
          <span>ELEGANCE.</span>
        </h1>

        <p>
          Discover the art of luxury watchmaking.
          Experience exceptional craftsmanship,
          precision and timeless elegance.
        </p>

        <div className="hero-buttons">
          <Link to="/watches" className="hero-shop-btn">
            EXPLORE COLLECTION
          </Link>

          <Link to="/about" className="hero-about-btn">
            DISCOVER MORE
          </Link>
        </div>

        <div className="hero-features">
          <div>
            <h3>100%</h3>
            <span>PREMIUM QUALITY</span>
          </div>

          <div>
            <h3>24/7</h3>
            <span>CUSTOMER SUPPORT</span>
          </div>

          <div>
            <h3>5+</h3>
            <span>LUXURY BRANDS</span>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <img
          src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200"
          alt="Luxury wristwatch"
        />

        <div className="hero-image-caption">
          <span>EXCLUSIVE COLLECTION</span>
          <h3>Beyond Time.</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
