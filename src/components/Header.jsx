import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function Header({ onOpenBooking }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Logo */}
        <a href="#home" className="brand-logo-wrap" onClick={closeMobile}>
          <img src={logoImg} alt="VS MEDIA Logo" className="brand-logo-img" />
        </a>

        {/* Desktop Nav */}
        <nav>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#founder" className="nav-link">Founder</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-actions">
          <a href="tel:+919177761519" className="btn btn-call btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Now
          </a>
          <button onClick={onOpenBooking} className="btn btn-primary btn-sm">
            Book a Call
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="hamburger-btn" 
          onClick={toggleMobile} 
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" className="mobile-nav-link" onClick={closeMobile}>Home</a></li>
          <li><a href="#about" className="mobile-nav-link" onClick={closeMobile}>About</a></li>
          <li><a href="#services" className="mobile-nav-link" onClick={closeMobile}>Services</a></li>
          <li><a href="#founder" className="mobile-nav-link" onClick={closeMobile}>Founder</a></li>
          <li><a href="#contact" className="mobile-nav-link" onClick={closeMobile}>Contact</a></li>
        </ul>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button 
            onClick={() => { closeMobile(); onOpenBooking(); }} 
            className="btn btn-primary btn-lg" 
            style={{ width: '100%' }}
          >
            Book a Call
          </button>
          <a 
            href="tel:+919177761519" 
            className="btn btn-call btn-lg" 
            style={{ width: '100%' }}
          >
            Call +91 9177761519
          </a>
        </div>
      </div>
    </header>
  );
}
