import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { account } from "../../../appwrite/appwrite.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReactToPrint } from "react-to-print";
import "./paymentsuccess.scss";

// Import all templates
import Madrid from "../../dashboard/resume template/templates/Madrid/Madrid";
import Berlin from "../../dashboard/resume template/templates/Berlin/Berlin";
import Crisp from "../../dashboard/resume template/templates/Crisp/Crisp";
import Santiago from "../../dashboard/resume template/templates/Santiago/Santiago";
import London from "../../dashboard/resume template/templates/London/London";
import Singapore from "../../dashboard/resume template/templates/Singapore/Singapore";
import Rome from "../../dashboard/resume template/templates/Rome/Rome";
import Diamond from "../../dashboard/resume template/templates/Diamond/Diamond";
import Barcelona from "../../dashboard/resume template/templates/Barcelona/Barcelona";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [resumeData, setResumeData] = useState<any>(null);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const navigate = useNavigate();
  const resumeTemplateRef = useRef<any>(null);

  const resumeId = searchParams.get("resumeId") || searchParams.get("resume_id");

  // Setup PDF printing
  const handlePrint = useReactToPrint({
    content: () => resumeTemplateRef.current,
    documentTitle: `Resume - ${resumeId}`,
    onAfterPrint: () => {
      console.log("PDF downloaded successfully!");
      setPdfDownloaded(true);
      toast.success("Resume downloaded successfully! 🎉");
    },
  });

  useEffect(() => {
    async function checkAuth() {
      try {
        const userData = await account.get();
        setUser(userData);
        
        // Load resume data from localStorage
        if (resumeId) {
          const savedData = localStorage.getItem(`resume-${resumeId}`);
          if (savedData) {
            const parsedData = JSON.parse(savedData);
            setResumeData(parsedData);
            console.log("Resume data loaded from localStorage:", parsedData);
          } else {
            console.error("No resume data found in localStorage");
            toast.error("Resume data not found");
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.log("User not logged in", error);
        toast.error("Please login first");
        navigate("/en/login");
      }
    }
    checkAuth();
  }, [navigate, resumeId]);

  // Auto-download PDF when data is ready
  useEffect(() => {
    if (!loading && resumeData && resumeTemplateRef.current && !pdfDownloaded) {
      // Small delay to ensure template is fully rendered
      const timer = setTimeout(() => {
        console.log("Auto-downloading PDF...");
        handlePrint();
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [loading, resumeData, pdfDownloaded]);

  const handleManualDownload = () => {
    if (resumeTemplateRef.current) {
      handlePrint();
    }
  };

  const handleGoToDashboard = () => {
    navigate("/en/navigate/dashboard");
  };

  const handleGoToEditor = () => {
    if (resumeId) {
      navigate(`/en/navigate/dashboard/create-resume-from-scratch/resume/${resumeId}`);
    }
  };

  // Template selection helper
  const renderTemplate = () => {
    if (!resumeData) return null;

    const templateProps = {
      personalInfo: resumeData.personalInfo || {},
      experiences: resumeData.experiences || [],
      education: resumeData.education || [],
      skills: resumeData.skills || [],
      languages: resumeData.languages || [],
      certificates: resumeData.certificates || [],
      image: resumeData.personalInfo?.image || null,
    };

    switch (resumeId?.toLowerCase()) {
      case 'madrid':
        return <Madrid ref={resumeTemplateRef} {...templateProps} />;
      case 'berlin':
        return <Berlin ref={resumeTemplateRef} {...templateProps} />;
      case 'crisp':
        return <Crisp ref={resumeTemplateRef} {...templateProps} />;
      case 'santiago':
        return <Santiago ref={resumeTemplateRef} {...templateProps} />;
      case 'london':
        return <London ref={resumeTemplateRef} {...templateProps} />;
      case 'singapore':
        return <Singapore ref={resumeTemplateRef} {...templateProps} />;
      case 'rome':
        return <Rome ref={resumeTemplateRef} {...templateProps} />;
      case 'diamond':
        return <Diamond ref={resumeTemplateRef} {...templateProps} />;
      case 'barcelona':
        return <Barcelona ref={resumeTemplateRef} {...templateProps} />;
      default:
        return null;
    }
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
            Your payment has been received successfully. Your resume PDF is being prepared for download.
          </p>
          
          {resumeId && (
            <div className="resume-info">
              <div className="info-badge">
                <span className="badge-label">Template:</span>
                <span className="badge-value">{resumeId}</span>
              </div>
            </div>
          )}

          <div className="features-list">
            <h3>What you got:</h3>
            <ul>
              <li>✅ Full access to this template</li>
              <li>✅ High-quality PDF download</li>
              <li>✅ Edit anytime you want</li>
              <li>✅ 24/7 technical support</li>
            </ul>
          </div>
        </div>

        <div className="action-buttons">
          {pdfDownloaded ? (
            <>
              <button className="primary-button" onClick={handleManualDownload}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Again
              </button>

              <button className="secondary-button" onClick={handleGoToEditor}>
                Edit Resume
              </button>
            </>
          ) : (
            <div className="downloading-status">
              <div className="spinner"></div>
              <p>Preparing PDF for download...</p>
            </div>
          )}

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

      {/* Hidden template for PDF generation */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        {renderTemplate()}
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
