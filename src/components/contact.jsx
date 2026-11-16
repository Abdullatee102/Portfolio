import { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, RotateCcw } from 'lucide-react';
import './contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formElement = e.target;
    const formData = new FormData(formElement);

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
        formElement.reset();
      } else {
        setError("Unable to deliver message right now. Please email directly.");
      }
    } catch {
      setError("Network connection issue. Please email directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setError(null);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Have a project in mind, an inquiry, or want to collaborate? Let's connect.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's build something together!</h3>
            <p>
              Feel free to reach out if you're looking for a developer across mobile, web, backend, or blockchain systems, have a question, or want to discuss opportunities.
            </p>
            <div className="contact-details">
              <a
                href="mailto:abdullateefpopoola12@gmail.com"
                className="contact-item direct-mail-link"
                title="Send direct email"
              >
                <Mail size={20} />
                <span>abdullateefpopoola12@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div className="success-message" role="status" aria-live="polite">
                <CheckCircle2 size={42} className="success-icon" />
                <h4>Message Delivered!</h4>
                <p>
                  Thank you for reaching out. Your message has been received and I'll get back to you promptly.
                </p>
                <button
                  type="button"
                  className="btn secondary-btn reset-btn"
                  onClick={handleResetForm}
                >
                  <RotateCcw size={16} /> Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {error && (
                  <div className="error-message" role="alert">
                    <AlertCircle size={18} />
                    <span>
                      {error}{' '}
                      <a
                        href="mailto:abdullateefpopoola12@gmail.com"
                        className="error-fallback-link"
                      >
                        abdullateefpopoola12@gmail.com
                      </a>
                    </span>
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ade Bola"
                    disabled={loading}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="ade@gmail.com"
                    disabled={loading}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell me about your project, idea, or inquiry..."
                    disabled={loading}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn primary-btn submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="btn-spinner" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
