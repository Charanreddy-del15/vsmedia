import React, { useState } from 'react';

const servicesList = [
  "Social Media Marketing",
  "Social Media Management",
  "Performance Marketing",
  "Meta Ads",
  "Google Ads",
  "Lead Generation",
  "SEO",
  "Website Design & Development",
  "Content Marketing",
  "Branding & Creative Design",
  "Video & Reels Marketing",
  "Influencer Marketing",
  "Local SEO",
  "Marketing Strategy & Consulting"
];

export default function BookingForm({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    service: selectedService || 'Performance Marketing',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="booking-section section-padding">
      <div className="container">
        <div className="booking-grid">
          {/* Left Info & Direct Call */}
          <div className="booking-info-box">
            <div className="badge">Get Started</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Let's Talk About Your Growth
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Tell us about your business and your goals. Let's explore how VS Media can help you grow.
            </p>

            <div className="booking-direct-call">
              <div className="booking-direct-title">Prefer an Immediate Conversation?</div>
              <div style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Call us directly to speak with Charan Reddy:
              </div>
              <a href="tel:+919177761519" className="booking-phone-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 9177761519
              </a>
            </div>
          </div>

          {/* Right Lead Form */}
          <div className="booking-form-card">
            {submitted ? (
              <div className="text-center" style={{ padding: '2rem 1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--accent-blue-light)', color: 'var(--accent-blue)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Call Request Received!</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Charan Reddy and the VS Media team will call you shortly at <strong>{formData.phone}</strong>.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn btn-outline btn-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-input" 
                      placeholder="e.g. Rahul Sharma" 
                      required 
                      value={formData.name} 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mobile Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      className="form-input" 
                      placeholder="+91 98765 43210" 
                      required 
                      value={formData.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-input" 
                      placeholder="rahul@company.com" 
                      required 
                      value={formData.email} 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Business Name</label>
                    <input 
                      type="text" 
                      name="businessName" 
                      className="form-input" 
                      placeholder="e.g. Apex Enterprises" 
                      value={formData.businessName} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Service Required</label>
                  <select 
                    name="service" 
                    className="form-select" 
                    value={formData.service} 
                    onChange={handleChange}
                  >
                    {servicesList.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Goals</label>
                  <textarea 
                    name="message" 
                    className="form-textarea" 
                    rows="3" 
                    placeholder="Tell us about your growth goals or current challenges..."
                    value={formData.message} 
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Book a Call
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
