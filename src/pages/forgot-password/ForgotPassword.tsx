import React, { useState, useEffect } from "react";
import "./forgotpassword.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite/appwrite.config";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAuthStatus() {
      try {
        const user = await account.get();
        if (user) {
          navigate("/navigate/dashboard/create-resume-from-scratch");
        }
      } catch (error) {
        console.log("No user logged in", error);
      }
    }
    getAuthStatus();
  }, [navigate]);

  const handlePasswordReset = async () => {
    if (!email) {
      toast.error("الرجاء إدخال البريد الإلكتروني.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("الرجاء إدخال بريد إلكتروني صحيح.");
      return;
    }

    setIsSubmitting(true);

    try {
      // The reset URL should point to your reset password page
      const resetUrl = `${window.location.origin}/reset-password`;
      
      const recoveryPromise = account.createRecovery({
        email: email,
        url: resetUrl
      });
      
      toast
        .promise(recoveryPromise, {
          pending: "جاري إرسال رابط إعادة التعيين...",
          success: "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني!",
          error: "فشل إرسال البريد الإلكتروني. تحقق من صحة البريد الإلكتروني.",
        })
        .then(() => {
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((error) => {
          console.error("Password reset failed:", error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (error) {
      console.error("Password reset error:", error);
      toast.error("حدث خطأ. الرجاء المحاولة مرة أخرى.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="forgot-password-page" dir="rtl">
      <div className="form">
        <div className="left"></div>
        <div className="right">
          <h2>إعادة تعيين كلمة المرور</h2>
          <p>أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور</p>

          <input
            type="email"
            className="email-input"
            placeholder="أدخل بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          
          <button 
            onClick={handlePasswordReset}
            disabled={isSubmitting}
          >
            {isSubmitting ? "جاري الإرسال..." : "إرسال رابط إعادة التعيين"}
          </button>

          <div className="or">
            <div className="line"></div>
            <span>أو</span>
            <div className="line"></div>
          </div>

          <Link to="/login">
            <button>العودة لتسجيل الدخول</button>
          </Link>
          
          <Link to="/register">
            <button>إنشاء حساب جديد</button>
          </Link>
        </div>
      </div>
      <div className="overlay"></div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        style={{
          width: "500px",
        }}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}

