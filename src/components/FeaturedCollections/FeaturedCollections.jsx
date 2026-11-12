import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedCollections.css";

const collections = [
  {
    id: 1,
    name: "CLASSIC",
    description: "Elegance that never fades",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
    category: "Classic"
  },
  {
    id: 2,
    name: "SPORTS",
    description: "Designed for adventure",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
    category: "Sports"
  },
  {
    id: 3,
    name: "LUXURY",
    description: "The ultimate statement",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
    category: "Luxury"
  },
  {
    id: 4,
    name: "MINIMAL",
    description: "Less is more",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    category: "Minimal"
  }
];

const FeaturedCollections = () => {
  return (
    <section className="featured-section">
      <div className="featured-heading">
        <span>CURATED FOR YOU</span>
        <h2>Featured Collections</h2>
        <p>
          Discover exceptional timepieces crafted
          for every style and occasion.
        </p>
      </div>

      <div className="featured-grid">
        {collections.map((item) => (
          <Link
            to={`/watches?category=${item.category}`}
            className="collection-card"
            key={item.id}
          >
            <img src={item.image} alt={item.name} />

            <div className="collection-overlay">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>EXPLORE COLLECTION →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
