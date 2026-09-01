import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import './contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mqpkeenz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try sending an email directly.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or want to collaborate? Let's connect.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's build something together!</h3>
            <p>
              Feel free to reach out if you're looking for a mobile or web developer, have a question, or want to discuss opportunities.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={20} />
                <span>abdullateefpopoola12@gmail.com</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {submitted ? (
              <div className="success-message">
                <CheckCircle2 size={32} className="success-icon" />
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="error-message" style={{ color: '#ef4444', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <AlertCircle size={18} /> {error}
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required placeholder="Ade Bola" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" required placeholder="ade@gmail.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" className="btn primary-btn submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : <>Send Message <Send size={16} /></>}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}