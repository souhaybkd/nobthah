import React from "react";
import "./dashboard.scss";
import { ToastContainer, toast } from "react-toastify";
import { account } from "../../appwrite/appwrite.config";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  async function logout() {
    const promise = account.deleteSession("current");
    toast.promise(promise, {
      pending: "جاري تسجيل الخروج...",
      success: "تم تسجيل الخروج بنجاح!",
      error: "فشل تسجيل الخروج. حاول مرة أخرى.",
    });

    promise
      .then(() => {
        console.log("تم تسجيل الخروج");
        navigate("/");
      })
      .catch((error) => {
        console.error("خطأ أثناء تسجيل الخروج:", error);
      });
  }

  return (
    <div className="dashboard" dir="rtl">
      <nav>
        <div className="container">
          <h1>نبذة</h1>
          <button onClick={logout} className="logoutBtn">
            <h2>تسجيل الخروج</h2>
          </button>
        </div>
      </nav>

      <div className="mainContainer">
        <h1>هل لديك سيرة ذاتية سابقة تريد رفعها؟</h1>
        <p>فقط راجعها، عدّلها، وأضف المعلومات الجديدة</p>
        <div className="btns">
          <button>
            <img
              src="https://media-public.canva.com/7WvN0/MAFV6-7WvN0/1/tl.png"
              alt="رفع السيرة الذاتية"
            />
            <h2>نعم، ارفع سيرتي الذاتية</h2>
            <p>
              سنقدم لك إرشادات احترافية لملء بياناتك وتحسين سيرتك الذاتية
            </p>
          </button>
          <button
            onClick={() => navigate("create-resume-from-scratch")}
          >
            <img
              src="https://media-public.canva.com/6pLcA/MAFLoO6pLcA/1/tl.png"
              alt="إنشاء سيرة جديدة"
            />
            <h2>لا، أنشئ سيرة جديدة من الصفر</h2>
            <p>
              سنرشدك خلال العملية كاملة لتبرز مهاراتك في سيرتك الذاتية
            </p>
          </button>
        </div>
      </div>

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
    </div>
  );
}
