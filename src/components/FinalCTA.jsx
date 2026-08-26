import React from 'react';

export default function FinalCTA({ onOpenBooking }) {
  return (
    <section className="final-cta-section text-center">
      <div className="container">
        <h2 className="final-cta-title">
          Ready to Grow Your Business?
        </h2>
        <p className="final-cta-subtitle">
          Let's build a marketing strategy that turns attention into real business growth.
        </p>

        <div className="final-cta-buttons">
          <button onClick={onOpenBooking} className="btn btn-primary btn-lg">
            Book a Call
          </button>
          
    
        </div>
      </div>
    </section>
  );
}
