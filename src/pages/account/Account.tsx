//@ts-ignore
import { account } from "../../appwrite/appwrite.config";
import "./account.scss";
import React, { useEffect, useState } from 'react';
import banner from "../../assets/banner.png"
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

import { useNavigate } from "react-router-dom"
  ;
import { toast, ToastContainer } from "react-toastify";
export default function Account() {
  const [userData, setUserData] = useState<any>(); // Initialize state with null
  const navigate = useNavigate()



  async function logOut() {
    const promise = account.deleteSession("current");
    // Show toast notification for the operation
    toast.promise(promise, {
      pending: "Logging Out...",
      success: "Logged Out Sucessfully!",
      error: "Failed to Logout. Please try again.",
    });

    // Handle promise if needed
    promise
      .then(() => {
        console.log("Document updated successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating document:", error);
      });
  }

  useEffect(() => {
    async function getAuthStatus() {
      try {
        const user = await account.get();
        setUserData(user);
        console.log(user);
      } catch (error) {
        console.log("No user logged in", error);
        navigate("/")
      }
    }
    getAuthStatus();
  }, []);

  if (!userData) {
    return <h1>Loading...</h1>; // Display loading message while userData is null
  }

  async function logout() {
    const promise = account.deleteSession("current");
    // Show toast notification for the operation
    toast.promise(promise, {
      pending: "Logging Out...",
      success: "Logged Out Sucessfully!",
      error: "Failed to Logout. Please try again.",
    });

    // Handle promise if needed
    promise
      .then(() => {
        console.log("Document updated successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating document:", error);
      });
  }
  return (

    <div className="account-settings">
      <div className="dashboard">
        <img className="profile-pic" src={profile} alt="" />
        <div className="content">
          <h1>Hello There {userData.name} !!</h1>
          <h2>{userData.email}</h2>
          <div className="btns">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kota.baby.work@gmail.com">
              <button>
                Contact Us

              </button></a>
            <button onClick={logout}>Sign Out</button>
          </div>
        </div>
      </div>

          <div className="resumes">
            {
              userData.labels.map((item) => {
                if (item === "madrid") {
                  return <div className="resume-img">
                    <button onClick={() => navigate("/navigate/dashboard/create-resume-from-scratch/resume/" + item)}>EDIT RESUME</button>
                    <img src={Madrid} alt="" />
                  </div>
                } else if (item === "berlin") {
                  return <div className="resume-img">
                    <button onClick={() => navigate("/navigate/dashboard/create-resume-from-scratch/resume/" + item)}>EDIT RESUME</button>
                    <img src={Berlin} alt="" />
                  </div>
                } else if (item === "crisp") {
                  return <div className="resume-img">
                    <button onClick={() => navigate("/navigate/dashboard/create-resume-from-scratch/resume/" + item)}>EDIT RESUME</button>
                    <img src={Crisp} alt="" />
                  </div>
                } else if (item === "santiago") {
                  return <div className="resume-img">
                    <button onClick={() => navigate("/navigate/dashboard/create-resume-from-scratch/resume/" + item)}>EDIT RESUME</button>
                    <img src={Santiago} alt="" />
                  </div>
                } else if (item === "london") {
                  return <div className="resume-img">
                    <button onClick={() => navigate("/navigate/dashboard/create-resume-from-scratch/resume/" + item)}>EDIT RESUME</button>
                    <img src={London} alt="" />
                  </div>
                } else if (item === "singapore") {
                  return <div className="resume-img">
                    <button onClick={() => navigate("/navigate/dashboard/create-resume-from-scratch/resume/" + item)}>EDIT RESUME</button>
                    <img src={Singapore} alt="" />
                  </div>
                } else if (item === "rome") {
                  return <div className="resume-img">
                    <button onClick={() => navigate("/navigate/dashboard/create-resume-from-scratch/resume/" + item)}>EDIT RESUME</button>
                    <img src={Rome} alt="" />
                  </div>
                } else if (item === "diamond") {
                  return <div className="resume-img">
                    <button onClick={() => navigate("/navigate/dashboard/create-resume-from-scratch/resume/" + item)}>EDIT RESUME</button>
                    <img src={Diamond} alt="" />
                  </div>
                } else if (item === "barcelona") {
                  return <div className="resume-img">
                    <button onClick={() => navigate("/navigate/dashboard/create-resume-from-scratch/resume/" + item)}>EDIT RESUME</button>
                    <img src={Barcelona} alt="" />
                  </div>
                }
                return <li>{item}</li>
              })
            }
          </div>
      <ToastContainer
        style={{ width: "500px" }}
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

