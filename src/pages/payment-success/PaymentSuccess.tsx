import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { account } from "../../appwrite/appwrite.config";
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
        toast.error("يجب تسجيل الدخول أولاً");
        navigate("/login");
      }
    }
    checkAuth();
  }, [navigate]);

  const handleGoToResume = () => {
    if (resumeId) {
      // Navigate with autoDownload parameter to trigger PDF download
      navigate(`/navigate/dashboard/create-resume-from-scratch/resume/${resumeId}?autoDownload=true`);
    } else {
      navigate("/navigate");
    }
  };

  const handleGoToDashboard = () => {
    navigate("/navigate/dashboard");
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
          <button className="primary-button" onClick={handleGoToResume}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15V3M12 15L8 11M12 15L16 11M2 17V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            تحميل السيرة الذاتية الآن
          </button>

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

