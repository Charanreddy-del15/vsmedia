import React from 'react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="hero-section text-center">
      <div className="container">
        <div className="hero-content">
          <div className="badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            Digital Marketing & Growth Agency
          </div>

          <h1 className="hero-title">
            We Help Businesses Grow With Digital Marketing
          </h1>

          <p className="hero-subheadline">
            VS Media helps businesses build a stronger online presence, generate quality leads, and turn digital marketing into measurable growth.
          </p>

          <div className="hero-cta-group">
            <button onClick={onOpenBooking} className="btn btn-primary btn-lg">
              Book a Call
            </button>
            
            
          </div>

          <div className="hero-tagline">
            Strategy <span>•</span> Creativity <span>•</span> Performance <span>•</span> Growth
          </div>
        </div>
      </div>
    </section>
  );
}
