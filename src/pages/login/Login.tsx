import React, { useState, useEffect } from "react";
import "./login.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite/appwrite.config";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleLogin = async () => {
    if (email && password) {
      const loginPromise = account.createEmailPasswordSession(email, password);
      toast
        .promise(loginPromise, {
          pending: "جاري تسجيل الدخول إلى حسابك...",
          success: "تم تسجيل الدخول بنجاح!",
          error: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
        })
        .then(() => {
          console.log("Navigating to dashboard");
          navigate("/navigate/dashboard/create-resume-from-scratch");
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    } else {
      toast.error("الرجاء إدخال البريد الإلكتروني وكلمة المرور.");
    }
  };

  return (
    <main className="register-page login-page" dir="rtl">
      <div className="form">
        <div className="left">{/* يمكن إزالة هذا القسم إذا لم يكن مطلوباً */}</div>
        <div className="right">
          <h2>مرحباً بك في نبذة</h2>
          <p>أنشئ سيرتك الذاتية بسرعة وبجودة عالية</p>

          <input
            type="text"
            className="name-input"
            placeholder="أدخل بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="أدخل كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>تسجيل الدخول</button>

          <div className="or">
            <div className="line"></div>
            <span>أو</span>
            <div className="line"></div>
          </div>

          <Link to="/register">
            <button>إنشاء حساب جديد</button>
          </Link>
          <button>هل نسيت كلمة المرور؟</button>
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
