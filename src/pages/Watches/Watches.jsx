import React, { useMemo, useState } from "react";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Watches.css";

const Watches = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [maxPrice, setMaxPrice] = useState(100000);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category))
  ];

  const brands = [
    "All",
    ...new Set(products.map((product) => product.brand))
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesBrand =
        selectedBrand === "All" ||
        product.brand === selectedBrand;

      const matchesPrice = product.price <= maxPrice;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand &&
        matchesPrice
      );
    });

    if (sortBy === "low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchTerm, selectedCategory, selectedBrand, sortBy, maxPrice]);

  return (
    <div className="watches-page">
      <section className="watches-hero">
        <span>EXPLORE OUR COLLECTION</span>
        <h1>Discover Your Perfect Timepiece</h1>
        <p>
          Explore our exclusive collection of luxury watches,
          designed for timeless elegance.
        </p>
      </section>

      <section className="watches-content">
        <div className="watches-heading">
          <div>
            <span className="watches-subtitle">HOROLOGE COLLECTION</span>
            <h2>All Watches</h2>
          </div>

          <span className="watches-count">
            {filteredProducts.length} Products
          </span>
        </div>

        <div className="watches-toolbar">
          <div className="watches-search">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search watches or brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="watches-sort">
            <ArrowUpDown size={17} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default Sorting</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="watches-layout">
          <aside className="watches-filters">
            <h3>
              <SlidersHorizontal size={18} />
              Filters
            </h3>

            <div className="filter-group">
              <h4>Categories</h4>

              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category ? "active" : ""
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="filter-group">
              <h4>Brands</h4>

              {brands.map((brand) => (
                <button
                  key={brand}
                  className={
                    selectedBrand === brand ? "active" : ""
                  }
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>

            <div className="filter-group">
              <h4>Maximum Price</h4>

              <input
                type="range"
                min="10000"
                max="100000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />

              <p>Up to ₹{maxPrice.toLocaleString("en-IN")}</p>
            </div>

            <button
              className="clear-filters"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedBrand("All");
                setSortBy("default");
                setMaxPrice(100000);
              }}
            >
              Clear All Filters
            </button>
          </aside>

          <div className="watches-products">
            {filteredProducts.length > 0 ? (
              <div className="watches-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="watches-empty">
                <h3>No Watches Found</h3>
                <p>Try changing your search or filters.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedBrand("All");
                    setMaxPrice(100000);
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Watches;
