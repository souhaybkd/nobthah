import React, { useState, useEffect } from "react";
import "./register.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite/appwrite.config";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
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

  const handleRegistration = async () => {
    if (email && password) {
      try {
        const accountCreationPromise = account.create(ID.unique(), email, password, name);
        toast
          .promise(accountCreationPromise, {
            pending: "جاري إنشاء الحساب...",
            success: "تم إنشاء الحساب بنجاح!",
            error: "حدث خطأ أثناء إنشاء الحساب. الرجاء المحاولة مرة أخرى.",
          })
          .then(() => {
            navigate("/navigate/dashboard/create-resume-from-scratch");
          })
          .catch((error) => {
            console.error("Registration failed:", error);
            // Enhanced error logging for debugging
            console.error("Error details:", {
              message: error.message,
              type: error.type,
              code: error.code,
              response: error.response
            });
            toast.error(`خطأ مفصل: ${error.message || 'خطأ غير معروف'}`);
          });
      } catch (error) {
        console.error("Registration error:", error);
        toast.error(`خطأ في الاتصال: ${error.message || 'تحقق من اتصال الإنترنت'}`);
      }
    } else {
      toast.error("الرجاء إدخال جميع الحقول المطلوبة.");
    }
  };

  return (
    <main className="register-page" dir="rtl">
      <div className="form">
        <div className="left">x</div>
        <div className="right">
          <h2>إنشاء حساب في نبذة</h2>
          <p>احصل على وظيفة أسرع 10 مرات مع نبذة</p>

          <input
            className="name-input"
            type="text"
            placeholder="أدخل اسمك"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="أدخل بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="أنشئ كلمة مرور جديدة"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegistration}>إنشاء حساب جديد</button>

          <div className="or">
            <div className="line"></div>
            <span>أو</span>
            <div className="line"></div>
          </div>

          <Link to="/login">
            <button>زيارة صفحة تسجيل الدخول</button>
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
