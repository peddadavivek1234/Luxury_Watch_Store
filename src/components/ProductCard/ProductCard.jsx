import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

const fallbackImage =
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return (
    <div className="product-card">
      <div className="product-image">
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}

        <Link to={`/watch/${product.id}`} className="product-image-link">
          <img
            src={product.image}
            alt={product.name}
            onError={handleImageError}
          />
        </Link>

        <button
          type="button"
          className="product-cart-button"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag size={17} />
          <span>Add to Cart</span>
        </button>
      </div>

      <div className="product-info">
        <span className="product-brand">{product.brand}</span>

        <Link to={`/watch/${product.id}`} className="product-name">
          {product.name}
        </Link>

        <div className="product-rating">
          <Star size={15} fill="currentColor" />
          <span>{product.rating}</span>
        </div>

        <div className="product-prices">
          <strong>
            ₹{product.price.toLocaleString("en-IN")}
          </strong>

          {product.oldPrice && (
            <del>
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </del>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
