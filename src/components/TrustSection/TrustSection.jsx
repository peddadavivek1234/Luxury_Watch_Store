import React, { useState } from "react";
import { Star } from "lucide-react";
import "./TrustSection.css";

const reviews = [
  {
    name: "Arjun Mehta",
    role: "Verified Customer",
    message: "Excellent craftsmanship and a beautiful design. The watch feels premium and elegant.",
    rating: 5
  },
  {
    name: "Rahul Sharma",
    role: "Verified Customer",
    message: "A wonderful shopping experience. The collection has an impressive range of watches.",
    rating: 5
  },
  {
    name: "Karan Reddy",
    role: "Verified Customer",
    message: "The quality and finishing exceeded my expectations. Highly recommended.",
    rating: 5
  }
];

const TrustSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="trust-section">
      <div className="testimonials-section">
        <div className="trust-heading">
          <span>CLIENT EXPERIENCES</span>
          <h2>Words From Our Customers</h2>
          <p>Experiences that reflect our commitment to timeless quality.</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.name}>
              <div className="testimonial-stars">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <p>"{review.message}"</p>
              <h3>{review.name}</h3>
              <span>{review.role}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="newsletter-section">
        <span>THE HOROLOGE JOURNAL</span>
        <h2>Stay In Time With Us</h2>
        <p>Subscribe for collection updates, exclusive launches and news.</p>

        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>

        {subscribed && <p className="newsletter-success">Thank you for subscribing!</p>}
      </div>
    </section>
  );
};

export default TrustSection;
