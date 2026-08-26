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


          </div>
        </div>
      </div>
    </section>
  );
}
