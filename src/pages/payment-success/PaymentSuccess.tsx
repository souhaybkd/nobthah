import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { account } from "../../appwrite/appwrite.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReactToPrint } from "react-to-print";
import "./paymentsuccess.scss";

// Import all templates
import Madrid from "../dashboard/resume template/templates/Madrid/Madrid";
import Berlin from "../dashboard/resume template/templates/Berlin/Berlin";
import Crisp from "../dashboard/resume template/templates/Crisp/Crisp";
import Santiago from "../dashboard/resume template/templates/Santiago/Santiago";
import London from "../dashboard/resume template/templates/London/London";
import Singapore from "../dashboard/resume template/templates/Singapore/Singapore";
import Rome from "../dashboard/resume template/templates/Rome/Rome";
import Diamond from "../dashboard/resume template/templates/Diamond/Diamond";
import Barcelona from "../dashboard/resume template/templates/Barcelona/Barcelona";

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
    documentTitle: `السيرة الذاتية - ${resumeId}`,
    onAfterPrint: () => {
      console.log("PDF downloaded successfully!");
      setPdfDownloaded(true);
      toast.success("تم تحميل السيرة الذاتية بنجاح! 🎉");
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
            toast.error("لم يتم العثور على بيانات السيرة الذاتية");
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.log("User not logged in", error);
        toast.error("يجب تسجيل الدخول أولاً");
        navigate("/login");
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
    navigate("/navigate/dashboard");
  };

  const handleGoToEditor = () => {
    if (resumeId) {
      navigate(`/navigate/dashboard/create-resume-from-scratch/resume/${resumeId}`);
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
      <div className="payment-success-page" dir="rtl">
        <div className="loading">
          <div className="spinner"></div>
          <p>جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-success-page" dir="rtl">
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

        <h1 className="success-title">تم الدفع بنجاح! 🎉</h1>
        <h2 className="success-subtitle">شكراً لشرائك</h2>

        <div className="success-info">
          <p className="info-text">
            تم استلام دفعتك بنجاح. يمكنك الآن تحميل سيرتك الذاتية بصيغة PDF عالية الجودة.
          </p>
          
          {resumeId && (
            <div className="resume-info">
              <div className="info-badge">
                <span className="badge-label">رقم القالب:</span>
                <span className="badge-value">{resumeId}</span>
              </div>
            </div>
          )}

          <div className="features-list">
            <h3>ما الذي حصلت عليه:</h3>
            <ul>
              <li>✅ وصول كامل لهذا القالب</li>
              <li>✅ تحميل بصيغة PDF عالية الجودة</li>
              <li>✅ إمكانية التعديل في أي وقت</li>
              <li>✅ دعم فني على مدار الساعة</li>
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
                تحميل مرة أخرى
              </button>

              <button className="secondary-button" onClick={handleGoToEditor}>
                تعديل السيرة الذاتية
              </button>
            </>
          ) : (
            <div className="downloading-status">
              <div className="spinner"></div>
              <p>جاري تحضير ملف PDF للتحميل...</p>
            </div>
          )}

          <button className="secondary-button" onClick={handleGoToDashboard}>
            الذهاب إلى لوحة التحكم
          </button>

          <a href="/" className="text-link">
            العودة للرئيسية
          </a>
        </div>

        <div className="support-section">
          <p className="support-text">
            تحتاج مساعدة؟ 
            <a href="mailto:support@nobthah.com" className="support-link"> تواصل معنا</a>
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
        rtl={true}
        theme="dark"
      />
    </div>
  );
}

