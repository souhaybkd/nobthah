import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import "./privacy.scss";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="privacy-page privacy-page-en">
      <Navbar />
      
      <div className="legal-container">
        <div className="legal-header">
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-date">Last Updated: {new Date().toLocaleDateString('en-US')}</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2 className="section-title">Introduction</h2>
            <p className="section-text">
              At Nobthah, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our resume creation services.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Information We Collect</h2>
            <div className="info-card">
              <h3 className="info-card-title">Account Information</h3>
              <ul className="info-list">
                <li>Full name</li>
                <li>Email address</li>
                <li>Password (encrypted)</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Resume Information</h3>
              <ul className="info-list">
                <li>Personal and professional information</li>
                <li>Work experience</li>
                <li>Educational qualifications</li>
                <li>Skills and certifications</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Usage Information</h3>
              <ul className="info-list">
                <li>Browsing and usage data</li>
                <li>IP address</li>
                <li>Browser type and device</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">How We Use Your Information</h2>
            <p className="section-text">We use your information for the following purposes:</p>
            <div className="purpose-grid">
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>Create and manage your account</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>Create and save your resume</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>Improve and develop our services</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>Provide technical support</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>Send important updates</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>Ensure service security</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Data Protection</h2>
            <p className="section-text">
              We implement strict security measures to protect your data, including:
            </p>
            <div className="security-features">
              <div className="security-item">
                <div className="security-badge">🔒</div>
                <h3>SSL/TLS Encryption</h3>
                <p>All transmitted data is encrypted</p>
              </div>
              <div className="security-item">
                <div className="security-badge">🛡️</div>
                <h3>Password Encryption</h3>
                <p>Passwords protected with strong algorithms</p>
              </div>
              <div className="security-item">
                <div className="security-badge">🔐</div>
                <h3>Limited Access</h3>
                <p>Data access restricted to authorized personnel</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Information Sharing</h2>
            <div className="highlight-box">
              <p className="highlight-text">
                <strong>We never sell or share your personal information with third parties</strong> except in the following cases:
              </p>
              <ul className="info-list">
                <li>When we have your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and property</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Your Rights</h2>
            <p className="section-text">You have the following rights regarding your data:</p>
            <div className="rights-grid">
              <div className="right-item">
                <h3>Access</h3>
                <p>Request a copy of your personal data</p>
              </div>
              <div className="right-item">
                <h3>Correction</h3>
                <p>Update or correct your information</p>
              </div>
              <div className="right-item">
                <h3>Deletion</h3>
                <p>Request deletion of your data</p>
              </div>
              <div className="right-item">
                <h3>Object</h3>
                <p>Object to processing of your data</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Cookies</h2>
            <p className="section-text">
              We use cookies to improve your experience. You can control cookie usage through your browser settings.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-text">
              If you have any questions about this privacy policy, please contact us:
            </p>
            <div className="contact-box">
              <p><strong>Email:</strong> privacy@nobthah.com</p>
              <button 
                className="contact-button"
                onClick={() => navigate('/en#contact')}
              >
                Contact Us
              </button>
            </div>
          </section>
        </div>
      </div>

      <footer className="legal-footer">
        <p>© 2025 Nobthah. All rights reserved.</p>
      </footer>
    </div>
  );
}

