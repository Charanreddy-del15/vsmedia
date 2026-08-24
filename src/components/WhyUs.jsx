import React from 'react';

const whyData = [
  {
    num: "01",
    title: "Results Focused",
    desc: "We focus on marketing that contributes to real business growth, not vanity metrics."
  },
  {
    num: "02",
    title: "Custom Strategies",
    desc: "Every business gets a strategy designed around its unique goals and audience."
  },
  {
    num: "03",
    title: "Creative + Data Driven",
    desc: "Strong creative messaging combined with continuous performance data."
  },
  {
    num: "04",
    title: "Transparent Communication",
    desc: "Clear communication, direct access, and straightforward reporting."
  },
  {
    num: "05",
    title: "Growth Mindset",
    desc: "We continuously test, optimize, and improve what works to scale performance."
  }
];

export default function WhyUs() {
  return (
    <section className="why-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge">Why Work With Us</div>
          <h2 className="section-title">Why Businesses Choose VS Media</h2>
          <p className="section-subtitle">
            Built on accountability, clarity, and strategies engineered for real business returns.
          </p>
        </div>

        <div className="why-grid">
          {whyData.map((item) => (
            <div key={item.num} className="why-card">
              <span className="why-num">{item.num}</span>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
