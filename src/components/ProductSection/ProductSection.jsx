import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductSection.css";

const ProductSection = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="product-section">
      <div className="product-section-heading">
        <div>
          <span className="product-section-subtitle">
            OUR EXCLUSIVE COLLECTION
          </span>
          <h2>Featured Watches</h2>
          <p>
            Discover our handpicked collection of timeless luxury watches.
          </p>
        </div>

        <Link to="/watches" className="view-all-link">
          View All Watches
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="product-section-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
