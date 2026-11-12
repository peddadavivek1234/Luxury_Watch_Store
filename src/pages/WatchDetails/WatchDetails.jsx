import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
  Star
} from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./WatchDetails.css";

const WatchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => String(item.id) === id
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="details-not-found">
        <h2>Watch Not Found</h2>
        <Link to="/watches">Explore Watches</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/checkout");
  };

  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.category === product.category
    )
    .slice(0, 4);

  const specifications = [
    ["Brand", product.brand],
    ["Collection", product.category],
    ["Case Material", product.caseMaterial || "Stainless Steel"],
    ["Strap Material", product.strapMaterial || "Premium Leather"],
    ["Movement", product.movement || "Automatic"],
    ["Water Resistance", product.waterResistance || "50 Meters"],
    ["Dial Color", product.dialColor || "Black"]
  ];

  return (
    <div className="watch-details-page">
      <div className="details-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/watches">Watches</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <section className="watch-details-container">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-content">
          <span className="details-brand">{product.brand}</span>

          <h1>{product.name}</h1>

          <div className="details-rating">
            <Star size={17} fill="currentColor" />
            <span>{product.rating} / 5</span>
            <span className="review-label">Customer Rating</span>
          </div>

          <div className="details-price">
            <strong>
              ₹{product.price.toLocaleString("en-IN")}
            </strong>

            {product.oldPrice && (
              <del>
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </del>
            )}
          </div>

          <p className="details-description">
            Experience timeless elegance with this {product.brand}{" "}
            {product.name}. Designed with premium materials, refined
            craftsmanship and a sophisticated finish, this watch
            makes a statement for every occasion.
          </p>

          <div className="details-quantity">
            <span>Quantity</span>

            <div className="quantity-control">
              <button
                onClick={() =>
                  setQuantity((value) => Math.max(1, value - 1))
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity((value) => value + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="details-actions">
            <button
              className="details-add-button"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            <button
              className="details-buy-button"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>

          <div className="details-benefits">
            <div>
              <Truck size={20} />
              <span>Free Shipping</span>
            </div>

            <div>
              <ShieldCheck size={20} />
              <span>Secure Payment</span>
            </div>

            <div>
              <RotateCcw size={20} />
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </section>

      <section className="specifications-section">
        <h2>Watch Specifications</h2>

        <div className="specifications-grid">
          {specifications.map(([label, value]) => (
            <div className="specification-item" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="related-watches">
        <div className="related-heading">
          <span>DISCOVER MORE</span>
          <h2>Related Watches</h2>
        </div>

        <div className="related-grid">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WatchDetails;
