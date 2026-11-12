import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  ShieldCheck,
  Gem,
  Clock,
  ArrowRight
} from "lucide-react";
import "./About.css";

const About = () => {
  const values = [
    {
      icon: <Gem size={30} />,
      title: "Premium Quality",
      description:
        "We believe every timepiece should reflect exceptional quality, elegance and attention to detail."
    },
    {
      icon: <Award size={30} />,
      title: "Timeless Design",
      description:
        "Our collection brings together classic designs and modern sophistication."
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Trusted Service",
      description:
        "We are committed to providing a smooth and reliable shopping experience."
    },
    {
      icon: <Clock size={30} />,
      title: "Every Second Matters",
      description:
        "A beautiful watch is more than an accessory. It represents moments and memories."
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span>OUR STORY</span>
          <h1>Elegance That Stands The Test Of Time</h1>
          <p>
            Discover the world of HOROLOGE, where timeless style,
            craftsmanship and sophistication come together.
          </p>
          <Link to="/watches" className="about-hero-button">
            Explore Collection <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1000"
            alt="Luxury wristwatch"
          />
        </div>

        <div className="about-story-content">
          <span className="about-subtitle">WHO WE ARE</span>
          <h2>More Than Just A Watch</h2>
          <p>
            At HOROLOGE, we believe a watch is more than a device
            that tells time. It is a reflection of personality,
            confidence and individual style.
          </p>
          <p>
            Our collection brings together elegant designs,
            sophisticated details and carefully selected
            timepieces for people who appreciate timeless beauty.
          </p>
          <p>
            Whether you are celebrating a special moment or
            upgrading your everyday style, HOROLOGE helps you
            find a watch that tells your story.
          </p>

          <Link to="/watches" className="about-text-link">
            Discover Our Watches <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <span>WHAT MAKES US DIFFERENT</span>
          <h2>Our Core Values</h2>
          <p>
            Everything we do is guided by our commitment to
            elegance, quality and customer satisfaction.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value, index) => (
            <div className="about-value-card" key={index}>
              <div className="about-value-icon">
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-banner">
        <span>TIMELESS STYLE. ENDLESS POSSIBILITIES.</span>
        <h2>Find The Watch That Defines You</h2>
        <Link to="/watches">
          Shop Collection <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
};

export default About;
