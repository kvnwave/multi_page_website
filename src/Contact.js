import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

function Home() {
  return (
    <section className="hero-section">

      <div className="hero-left">

        <h1 className="hero-title">
          Currently at Contact Us<br />
          multi-page for <em>ITPS205</em>
        </h1>

        <p className="hero-subtitle">
          This page is the Contact us section.
          If you want to reach out to the developer,
          this is the perfect place for you!
        </p>

        <div className="hero-actions">
          <Link to="/" className="btn-hero-primary">Home</Link>
          <Link to="/about" className="btn-hero-ghost">
            About
            <span className="btn-arrow">›</span>
          </Link>
        </div>
      </div>

      <div className="hero-right">
          <img src="photo 3.jpg" alt="descriptive alt text" className="hero-photo" />
        </div>

    </section>
  );
}

export default Home;