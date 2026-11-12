import React from "react";
import Hero from "../../components/Hero/Hero";
import FeaturedCollections from "../../components/FeaturedCollections/FeaturedCollections";
import ProductSection from "../../components/ProductSection/ProductSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />

      <FeaturedCollections />

      <ProductSection
        title="New Arrivals"
        subtitle="JUST ARRIVED"
        items={[2, 4, 5, 7]}
      />

      <ProductSection
        title="Best Sellers"
        subtitle="CUSTOMER FAVORITES"
        items={[1, 3, 6, 8]}
      />

      <section className="home-promo">
        <div className="promo-content">
          <span>EXCLUSIVE TIMEPIECES</span>
          <h2>Time Is Your Greatest Luxury.</h2>
          <p>
            Find a timepiece that reflects your
            personality and defines your style.
          </p>

          <a href="/watches">DISCOVER COLLECTION →</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
