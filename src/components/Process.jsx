import React from 'react';

const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand your business, audience, competition, and core growth goals."
  },
  {
    step: "02",
    title: "Strategize",
    desc: "Create a customized, actionable marketing strategy tailored to your market."
  },
  {
    step: "03",
    title: "Execute",
    desc: "Launch high-converting campaigns, content, creative assets, and ads."
  },
  {
    step: "04",
    title: "Grow",
    desc: "Measure key results, optimize performance data, and scale what works."
  }
];

export default function Process() {
  return (
    <section className="process-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge">Our Approach</div>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            A clear, predictable 4-step growth process designed to deliver consistent results.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((p) => (
            <div key={p.step} className="process-card">
              <div className="process-step-tag">{p.step}</div>
              <h3 className="process-title">{p.title}</h3>
              <p className="process-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
