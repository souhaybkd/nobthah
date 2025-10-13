import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite/appwrite.config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./paymentfailed.scss";

export default function PaymentFailed() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      try {
        await account.get();
      } catch (error) {
        console.log("User not logged in", error);
        navigate("/login");
      }
    }
    checkAuth();
  }, [navigate]);

  const handleRetry = () => {
    navigate("/navigate/dashboard");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="payment-failed-page" dir="rtl">
      <div className="failed-container">
        <div className="failed-icon">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="#f44336" strokeWidth="2" fill="none" />
            <path
              d="M15 9L9 15M9 9L15 15"
              stroke="#f44336"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 className="failed-title">فشل الدفع</h1>
        <h2 className="failed-subtitle">لم تكتمل عملية الدفع</h2>

        <div className="failed-info">
          <p className="info-text">
            عذراً، لم نتمكن من إكمال عملية الدفع. لا تقلق، لم يتم خصم أي مبلغ من حسابك.
          </p>

          <div className="reasons-list">
            <h3>الأسباب الشائعة:</h3>
            <ul>
              <li>❌ إلغاء عملية الدفع</li>
              <li>❌ عدم كفاية الرصيد</li>
              <li>❌ مشكلة في الاتصال</li>
              <li>❌ خطأ في معلومات البطاقة</li>
            </ul>
          </div>
        </div>

        <div className="action-buttons">
          <button className="primary-button" onClick={handleRetry}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            إعادة المحاولة
          </button>

          <button className="secondary-button" onClick={handleGoHome}>
            العودة للرئيسية
          </button>

          <a href="mailto:support@nobthah.com" className="support-link">
            تواصل مع الدعم الفني
          </a>
        </div>

        <div className="help-section">
          <div className="help-card">
            <h4>تحتاج مساعدة؟</h4>
            <p>
              فريقنا جاهز لمساعدتك على مدار الساعة. يمكنك التواصل معنا عبر البريد الإلكتروني
              أو يمكنك المحاولة مرة أخرى.
            </p>
          </div>
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

