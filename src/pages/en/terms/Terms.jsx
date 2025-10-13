import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import "./terms.scss";

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="terms-page terms-page-en">
      <Navbar />
      
      <div className="legal-container">
        <div className="legal-header">
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-date">Last Updated: {new Date().toLocaleDateString('en-US')}</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2 className="section-title">Introduction</h2>
            <p className="section-text">
              Welcome to Nobthah. By using our services, you agree to comply with these Terms of Service. Please read them carefully before using our platform.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Acceptance of Terms</h2>
            <div className="highlight-box">
              <p className="highlight-text">
                By using Nobthah's services, you agree to:
              </p>
              <ul className="info-list">
                <li>Comply with all terms and conditions stated in this document</li>
                <li>Use the service legally and legitimately</li>
                <li>Not violate intellectual property rights</li>
                <li>Provide accurate and truthful information</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Service Usage</h2>
            <p className="section-text">Nobthah is a platform for creating professional resumes. You can use our services for the following purposes:</p>
            <div className="purpose-grid">
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>Create professional resumes</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>Edit and update your resume</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>Download your resume as PDF</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>Store your information securely</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">User Account</h2>
            <div className="info-card">
              <h3 className="info-card-title">User Responsibilities</h3>
              <ul className="info-list">
                <li>You are responsible for maintaining the confidentiality of your password</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>You are responsible for all activities under your account</li>
                <li>You must be over 18 years old or have parental consent</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Pricing and Payment</h2>
            <div className="pricing-box">
              <div className="price-tag">
                <span className="currency">SAR</span>
                <span className="amount">20</span>
              </div>
              <p className="section-text">
                The service fee is 20 Saudi Riyals one-time. After payment, you will receive:
              </p>
              <div className="benefits-grid">
                <div className="benefit-item">✓ Full access to all templates</div>
                <div className="benefit-item">✓ High-quality PDF export</div>
                <div className="benefit-item">✓ Unlimited saves</div>
                <div className="benefit-item">✓ Lifetime technical support</div>
              </div>
            </div>
            <p className="section-text">
              All payments are final and non-refundable unless otherwise required by law.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Intellectual Property</h2>
            <div className="info-card">
              <p className="section-text">
                All content, templates, and designs available on Nobthah are protected by intellectual property rights:
              </p>
              <ul className="info-list">
                <li>Templates and designs are owned by Nobthah</li>
                <li>Your resume content remains your property</li>
                <li>Copying or distributing templates without permission is prohibited</li>
                <li>Using the service does not grant you ownership of templates</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Prohibited Uses</h2>
            <div className="prohibited-grid">
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>Using the service for illegal purposes</p>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>Publishing false or misleading information</p>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>Attempting to hack or disrupt the service</p>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>Violating intellectual property rights</p>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>Using bots or automated tools</p>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>Abusing technical support</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Disclaimer</h2>
            <div className="warning-box">
              <h3>⚠️ Important Notice</h3>
              <p className="section-text">
                Nobthah provides the platform "as is" without any express or implied warranties. We are not responsible for:
              </p>
              <ul className="info-list">
                <li>Results of using the created resumes</li>
                <li>Any errors or service interruptions</li>
                <li>Data loss due to circumstances beyond our control</li>
                <li>Hiring decisions made by companies</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Service Termination</h2>
            <p className="section-text">
              We reserve the right to suspend or terminate your account if:
            </p>
            <div className="termination-grid">
              <div className="termination-item">
                <h3>Terms Violation</h3>
                <p>Breach of any terms of service</p>
              </div>
              <div className="termination-item">
                <h3>Fraudulent Use</h3>
                <p>Attempt to defraud or cheat the system</p>
              </div>
              <div className="termination-item">
                <h3>Suspicious Activity</h3>
                <p>Detection of abnormal activity</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Modifications to Terms</h2>
            <p className="section-text">
              We reserve the right to modify these terms at any time. You will be notified of any material changes via email or through the website.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Governing Law</h2>
            <p className="section-text">
              These terms are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-text">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="contact-box">
              <p><strong>Email:</strong> legal@nobthah.com</p>
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

