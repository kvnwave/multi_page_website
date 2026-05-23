import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="hero-section">

      <div className="hero-left">

        <h1 className="hero-title">
          Multi-page website<br />
          used for <em>ITPS205</em>
        </h1>

        <p className="hero-subtitle">
          This page is the home section.
          It contains all the necessary information you'll 
          need to learn regarding this website.
        </p>

        <div className="hero-actions">
          <Link to="/about" className="btn-hero-primary">About Us</Link>
          <Link to="/contact" className="btn-hero-ghost">
            Contact
            <span className="btn-arrow">›</span>
          </Link>
        </div>
      </div>

      <div className="hero-right">
          <img src="photo 1.jpg" alt="descriptive alt text" className="hero-photo" />
        </div>

    </section>
  );
}

export default Home;