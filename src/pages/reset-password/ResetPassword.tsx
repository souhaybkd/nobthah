import React, { useState, useEffect } from "react";
import "./resetpassword.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { account } from "../../appwrite/appwrite.config";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  useEffect(() => {
    // Check if we have the required parameters
    if (!userId || !secret) {
      toast.error("رابط إعادة تعيين كلمة المرور غير صالح أو منتهي الصلاحية.");
      setTimeout(() => {
        navigate("/forgot-password");
      }, 3000);
    }
  }, [userId, secret, navigate]);

  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      toast.error("الرجاء إدخال كلمة المرور وتأكيدها.");
      return;
    }

    if (password.length < 8) {
      toast.error("يجب أن تكون كلمة المرور 8 أحرف على الأقل.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("كلمات المرور غير متطابقة.");
      return;
    }

    if (!userId || !secret) {
      toast.error("رابط إعادة التعيين غير صالح.");
      return;
    }

    setIsSubmitting(true);

    try {
      const resetPromise = account.updateRecovery({
        userId: userId,
        secret: secret,
        password: password
      });

      toast
        .promise(resetPromise, {
          pending: "جاري إعادة تعيين كلمة المرور...",
          success: "تم إعادة تعيين كلمة المرور بنجاح!",
          error: "فشلت إعادة التعيين. الرجاء طلب رابط جديد.",
        })
        .then(() => {
          setTimeout(() => {
            navigate("/login");
          }, 2000);
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
    <main className="reset-password-page" dir="rtl">
      <div className="form">
        <div className="left"></div>
        <div className="right">
          <h2>تعيين كلمة مرور جديدة</h2>
          <p>أدخل كلمة المرور الجديدة الخاصة بك</p>

          <input
            type="password"
            className="password-input"
            placeholder="كلمة المرور الجديدة (8 أحرف على الأقل)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isSubmitting}
          />
          
          <input
            type="password"
            placeholder="تأكيد كلمة المرور الجديدة"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isSubmitting}
          />
          
          <button 
            onClick={handleResetPassword}
            disabled={isSubmitting}
          >
            {isSubmitting ? "جاري إعادة التعيين..." : "إعادة تعيين كلمة المرور"}
          </button>

          <div className="or">
            <div className="line"></div>
            <span>أو</span>
            <div className="line"></div>
          </div>

          <Link to="/login">
            <button>العودة لتسجيل الدخول</button>
          </Link>
          
          <Link to="/forgot-password">
            <button>طلب رابط جديد</button>
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

