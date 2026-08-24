import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Brand & Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img src={logoImg} alt="VS MEDIA" style={{ height: '38px', width: 'auto', background: '#ffffff', padding: '4px 8px', borderRadius: '4px' }} />
              <span className="footer-brand-title">VS MEDIA</span>
            </div>
            <p className="footer-tagline">
              Digital Marketing & Growth Agency focused on building online presence and delivering measurable revenue.
            </p>
            <div className="footer-info">
              <div><strong>Founder:</strong> Charan Reddy</div>
              <div><strong>Phone:</strong> <a href="tel:+919177761519">+91 9177761519</a></div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#founder" className="footer-link">Founder</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
              <li>
                <button 
                  onClick={onOpenBooking} 
                  style={{ background: 'none', border: 'none', color: '#60a5fa', cursor: 'pointer', padding: 0, font: 'inherit', fontWeight: '600' }}
                >
                  Book a Call
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="footer-col-title">Growth Consultation</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              Ready to scale your leads and sales? Call Charan Reddy directly or schedule a free strategy call.
            </p>
            <a href="tel:+919177761519" className="btn btn-primary btn-sm" style={{ width: '100%', textDecoration: 'none' }}>
              Call +91 9177761519
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} VS MEDIA. All rights reserved. Founded by Charan Reddy.</div>
          <div style={{ color: '#64748b' }}>Designed for Maximum Business Growth</div>
        </div>
      </div>
    </footer>
  );
}
