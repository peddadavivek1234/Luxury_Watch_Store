import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send
} from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <span>GET IN TOUCH</span>
        <h1>We Would Love To Hear From You</h1>
        <p>
          Have questions about our watches or need assistance?
          Our team is here to help.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-information">
          <span className="contact-subtitle">CONTACT HOROLOGE</span>
          <h2>Let's Start A Conversation</h2>
          <p className="contact-description">
            Whether you need help choosing a watch, tracking an
            order or learning more about our collection, contact us.
          </p>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <MapPin size={22} />
            </div>
            <div>
              <h3>Our Location</h3>
              <p>Vijayawada, Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Phone size={22} />
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Mail size={22} />
            </div>
            <div>
              <h3>Email Address</h3>
              <p>support@horologe.com</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Clock size={22} />
            </div>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday: 9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us A Message</h2>
          <p>Fill out the form below and we will get back to you.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-input-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-input-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-input-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message <Send size={17} />
            </button>

            {success && (
              <p className="contact-success">
                Thank you! Your message has been submitted.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="contact-bottom">
        <h2>Need Help Finding Your Perfect Watch?</h2>
        <p>Explore our exclusive luxury watch collection.</p>
        <a href="/watches">Explore Watches</a>
      </section>
    </div>
  );
};

export default Contact;
