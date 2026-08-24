import React, { useState, useEffect } from 'react';

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

export default function BookingModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    service: selectedService || 'Performance Marketing',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop open" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose}>✕</button>

        {submitted ? (
          <div className="text-center" style={{ padding: '1.5rem 0' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--accent-blue-light)', color: 'var(--accent-blue)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Call Requested!</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Thank you <strong>{formData.name}</strong>. Charan Reddy will call you directly at <strong>{formData.phone}</strong>.
            </p>
            <button onClick={handleClose} className="btn btn-primary btn-sm">
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="badge">Schedule Strategy Call</div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Book a Call with VS Media</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Fill in your details below and Charan Reddy will connect with you to discuss your business growth.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-input" 
                  placeholder="Your Name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    className="form-input" 
                    placeholder="+91 9177761519" 
                    required 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="email@example.com" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Business Name</label>
                  <input 
                    type="text" 
                    name="businessName" 
                    className="form-input" 
                    placeholder="Company Name" 
                    value={formData.businessName} 
                    onChange={handleChange} 
                  />
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
              </div>

              <div className="form-group">
                <label className="form-label">Brief Note / Message</label>
                <textarea 
                  name="message" 
                  className="form-textarea" 
                  rows="2" 
                  placeholder="Tell us what you'd like to achieve..."
                  value={formData.message} 
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginBottom: '1rem' }}>
                Confirm Call Booking
              </button>

              <div className="text-center" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Or call us directly: <a href="tel:+919177761519" style={{ color: 'var(--accent-blue)', fontWeight: '700' }}>+91 9177761519</a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
