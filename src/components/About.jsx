import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-card">
          <div className="badge" style={{ marginBottom: '1.25rem' }}>
            About VS Media
          </div>
          <h2 className="about-title">
            Marketing That Moves Your Business Forward
          </h2>
          <p className="about-copy">
            VS Media is a digital marketing agency focused on helping businesses attract attention, generate leads, and grow online. We combine creative marketing with practical strategies designed around real business goals.
          </p>
        </div>
      </div>
    </section>
  );
}
