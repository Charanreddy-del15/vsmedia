import React from 'react';

export default function Founder() {
  return (
    <section id="founder" className="founder-section section-padding">
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
          <div className="badge">Leadership</div>
          <h2 className="section-title">Meet the Founder</h2>
        </div>

        <div className="founder-container" style={{ gridTemplateColumns: '1fr', maxWidth: '840px', margin: '0 auto', textAlign: 'center', padding: '3.5rem 3rem' }}>
          <div className="founder-details" style={{ alignItems: 'center' }}>
            <h3 className="founder-name" style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>Charan Reddy</h3>
            <div className="founder-role" style={{ fontSize: '1.15rem', marginBottom: '1.75rem' }}>Founder — VS MEDIA</div>
            
            <p className="founder-bio" style={{ fontSize: '1.2rem', lineHeight: '1.75', maxWidth: '720px', margin: '0 auto 2rem auto' }}>
              Charan Reddy is the founder of VS Media, focused on helping businesses grow through practical, creative, and performance-driven digital marketing strategies.
            </p>

            <div>
              <a href="tel:+919177761519" className="btn btn-call btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Connect Direct: +91 9177761519
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
