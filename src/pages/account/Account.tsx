// @ts-ignore
import { account } from "../../appwrite/appwrite.config";
import "./account.scss";
import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.png";

import Madrid from "../../assets/madrid.jpg";
import Berlin from "../../assets/berlin.png";
import Rome from "../../assets/rome.png";
import Crisp from "../../assets/crisp.png";
import Barcelona from "../../assets/barcelona.png";
import Singapore from "../../assets/singapore.png";
import Diamond from "../../assets/diamond.png";
import Santiago from "../../assets/santiago.png";
import London from "../../assets/london.png";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Account() {
  const [userData, setUserData] = useState<any>();
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

  useEffect(() => {
    async function getAuthStatus() {
      try {
        const user = await account.get();
        setUserData(user);
        console.log(user);
      } catch (error) {
        console.log("لا يوجد مستخدم مسجل الدخول", error);
        navigate("/");
      }
    }
    getAuthStatus();
  }, []);

  if (!userData) {
    return <h1>جارٍ التحميل...</h1>;
  }

  return (
    <div className="account-settings" dir="rtl">
      <div className="dashboard">
        <img className="profile-pic" src={profile} alt="صورة الملف الشخصي" />
        <div className="content">
          <h1>مرحباً {userData.name} 👋</h1>
          <h2>{userData.email}</h2>
          <div className="btns">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kota.baby.work@gmail.com">
              <button>تواصل معنا</button>
            </a>
            <button onClick={logout}>تسجيل الخروج</button>
          </div>
        </div>
      </div>

      <div className="resumes">
        {userData.labels.map((item) => {
          if (item === "madrid") {
            return (
              <div className="resume-img">
                <button
                  onClick={() =>
                    navigate(
                      "/navigate/dashboard/create-resume-from-scratch/resume/" +
                        item
                    )
                  }
                >
                  تعديل السيرة الذاتية
                </button>
                <img src={Madrid} alt="نموذج مدريد" />
              </div>
            );
          } else if (item === "berlin") {
            return (
              <div className="resume-img">
                <button
                  onClick={() =>
                    navigate(
                      "/navigate/dashboard/create-resume-from-scratch/resume/" +
                        item
                    )
                  }
                >
                  تعديل السيرة الذاتية
                </button>
                <img src={Berlin} alt="نموذج برلين" />
              </div>
            );
          } else if (item === "crisp") {
            return (
              <div className="resume-img">
                <button
                  onClick={() =>
                    navigate(
                      "/navigate/dashboard/create-resume-from-scratch/resume/" +
                        item
                    )
                  }
                >
                  تعديل السيرة الذاتية
                </button>
                <img src={Crisp} alt="نموذج كريسپ" />
              </div>
            );
          } else if (item === "santiago") {
            return (
              <div className="resume-img">
                <button
                  onClick={() =>
                    navigate(
                      "/navigate/dashboard/create-resume-from-scratch/resume/" +
                        item
                    )
                  }
                >
                  تعديل السيرة الذاتية
                </button>
                <img src={Santiago} alt="نموذج سانتياغو" />
              </div>
            );
          } else if (item === "london") {
            return (
              <div className="resume-img">
                <button
                  onClick={() =>
                    navigate(
                      "/navigate/dashboard/create-resume-from-scratch/resume/" +
                        item
                    )
                  }
                >
                  تعديل السيرة الذاتية
                </button>
                <img src={London} alt="نموذج لندن" />
              </div>
            );
          } else if (item === "singapore") {
            return (
              <div className="resume-img">
                <button
                  onClick={() =>
                    navigate(
                      "/navigate/dashboard/create-resume-from-scratch/resume/" +
                        item
                    )
                  }
                >
                  تعديل السيرة الذاتية
                </button>
                <img src={Singapore} alt="نموذج سنغافورة" />
              </div>
            );
          } else if (item === "rome") {
            return (
              <div className="resume-img">
                <button
                  onClick={() =>
                    navigate(
                      "/navigate/dashboard/create-resume-from-scratch/resume/" +
                        item
                    )
                  }
                >
                  تعديل السيرة الذاتية
                </button>
                <img src={Rome} alt="نموذج روما" />
              </div>
            );
          } else if (item === "diamond") {
            return (
              <div className="resume-img">
                <button
                  onClick={() =>
                    navigate(
                      "/navigate/dashboard/create-resume-from-scratch/resume/" +
                        item
                    )
                  }
                >
                  تعديل السيرة الذاتية
                </button>
                <img src={Diamond} alt="نموذج دايموند" />
              </div>
            );
          } else if (item === "barcelona") {
            return (
              <div className="resume-img">
                <button
                  onClick={() =>
                    navigate(
                      "/navigate/dashboard/create-resume-from-scratch/resume/" +
                        item
                    )
                  }
                >
                  تعديل السيرة الذاتية
                </button>
                <img src={Barcelona} alt="نموذج برشلونة" />
              </div>
            );
          }
          return <li>{item}</li>;
        })}
      </div>

      <ToastContainer
        style={{ width: "500px" }}
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
