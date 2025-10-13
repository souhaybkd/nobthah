import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { account } from "../../../appwrite/appwrite.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./paymentsuccess.scss";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const resumeId = searchParams.get("resumeId") || searchParams.get("resume_id");

  useEffect(() => {
    async function checkAuth() {
      try {
        const userData = await account.get();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.log("User not logged in", error);
        toast.error("Please log in first");
        navigate("/en/login");
      }
    }
    checkAuth();
  }, [navigate]);

  const handleGoToResume = () => {
    if (resumeId) {
      // Navigate with autoDownload parameter to trigger PDF download
      navigate(`/en/navigate/dashboard/create-resume-from-scratch/resume/${resumeId}?autoDownload=true`);
    } else {
      navigate("/en/navigate");
    }
  };

  const handleGoToDashboard = () => {
    navigate("/en/navigate/dashboard");
  };

  if (loading) {
    return (
      <div className="payment-success-page">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-success-page">
      <div className="success-container">
        <div className="success-icon">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" fill="none" />
            <path
              d="M8 12L11 15L16 9"
              stroke="#4CAF50"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="success-title">Payment Successful! 🎉</h1>
        <h2 className="success-subtitle">Thank you for your purchase</h2>

        <div className="success-info">
          <p className="info-text">
            Your payment has been received successfully. You can now download your resume in high-quality PDF format.
          </p>
          
          {resumeId && (
            <div className="resume-info">
              <div className="info-badge">
                <span className="badge-label">Template ID:</span>
                <span className="badge-value">{resumeId}</span>
              </div>
            </div>
          )}

          <div className="features-list">
            <h3>What you got:</h3>
            <ul>
              <li>✅ Full access to this template</li>
              <li>✅ High-quality PDF download</li>
              <li>✅ Edit anytime</li>
              <li>✅ 24/7 technical support</li>
            </ul>
          </div>
        </div>

        <div className="action-buttons">
          <button className="primary-button" onClick={handleGoToResume}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume Now
          </button>

          <button className="secondary-button" onClick={handleGoToDashboard}>
            Go to Dashboard
          </button>

          <a href="/en" className="text-link">
            Back to Home
          </a>
        </div>

        <div className="support-section">
          <p className="support-text">
            Need help? 
            <a href="mailto:support@nobthah.com" className="support-link"> Contact us</a>
          </p>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        rtl={false}
        theme="dark"
      />
    </div>
  );
}

