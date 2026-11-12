import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, UserRound } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav-container">
      <div className="container">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <span className="logo-icon">H</span>
          <span>HOROLOGE</span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/watches" onClick={closeMenu}>Watches</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="login-link">
            <UserRound size={20} />
            <span>Login</span>
          </Link>

          <Link to="/cart" className="cart-link">
            <ShoppingBag size={22} />
            <span className="cart-count">{cartCount}</span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
