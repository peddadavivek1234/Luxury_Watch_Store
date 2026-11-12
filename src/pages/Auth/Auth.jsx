import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./Auth.css";

const Auth = ({ mode = "login" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignup) {
      localStorage.setItem(
        "horologeUser",
        JSON.stringify({ name: form.name, email: form.email })
      );
    }

    navigate(location.state?.from || "/");
  };

  return (
    <section className="auth-page">
      <div className="auth-image">
        <span>HOROLOGE</span>
        <h2>Timeless Style.<br />Exceptional Craftsmanship.</h2>
        <p>Discover watches that define your moments.</p>
      </div>

      <div className="auth-content">
        <form className="auth-form" onSubmit={handleSubmit}>
          <span>WELCOME TO HOROLOGE</span>
          <h1>{isSignup ? "Create Account" : "Welcome Back"}</h1>
          <p>{isSignup ? "Register to explore our luxury collection." : "Sign in to continue your journey."}</p>

          {isSignup && (
            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </label>
          )}

          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Password
            <div className="auth-password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                minLength="6"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </label>

          <button className="auth-submit" type="submit">
            {isSignup ? "Create Account" : "Login"}
          </button>

          <div className="auth-switch">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <Link to={isSignup ? "/login" : "/signup"}>
              {isSignup ? " Login" : " Sign Up"}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Auth;
