import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

function Home() {
  return (
    <section className="hero-section">

      <div className="hero-left">

        <h1 className="hero-title">
          Currently at About<br />
          multi-page for <em>ITPS205</em>
        </h1>

        <p className="hero-subtitle">
          This page is the About section.
          If you want to learn more about the website,
          this is the perfect place for you!
        </p>

        <div className="hero-actions">
          <Link to="/" className="btn-hero-primary">Home</Link>
          <Link to="/contact" className="btn-hero-ghost">
            Contact
            <span className="btn-arrow">›</span>
          </Link>
        </div>
      </div>

      <div className="hero-right">
          <img src="photo 2.jpg" alt="descriptive alt text" className="hero-photo" />
        </div>

    </section>
  );
}

export default Home;