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
            
            <a href="tel:+919177761519" className="btn btn-call btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call +91 9177761519
            </a>
          </div>

          <div className="hero-tagline">
            Strategy <span>•</span> Creativity <span>•</span> Performance <span>•</span> Growth
          </div>
        </div>
      </div>
    </section>
  );
}
