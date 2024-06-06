import React from "react"
import "./dashboard.scss"
import { ToastContainer, toast } from "react-toastify";
import { account } from "../../appwrite/appwrite.config";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate()

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
    <div className="dashboard">
      <nav>
        <div className="container">
          <h1>Nobthah</h1>
          <button onClick={logout} className="logoutBtn">
              <h2>Log Out</h2>
            </button>
        </div>
      </nav>

      <div className="mainContainer">
        <h1>Are you uploading an existing resume?</h1>
        <p>Just review, edit, and update it with new information</p>
        <div className="btns">
          <button>
          <img src="https://media-public.canva.com/7WvN0/MAFV6-7WvN0/1/tl.png" alt="" />
            <h2>Yes, upload from my resume</h2>
            <p>We'll give you expert guidance to fill out your info and enhance your resume</p>
          </button>
          <button 
          onClick={() => navigate("create-resume-from-scratch")}
          >
            <img src="https://media-public.canva.com/6pLcA/MAFLoO6pLcA/1/tl.png" alt="" />
            <h2>No, start from scratch</h2>
            <p>We'll guide you through the whole process so your skills in resume can shine</p>
          </button>
        </div>
      </div>

     
      {/* <div className="banner" style={{background: "#1E8D82"}}>
        <h2>Do you know why colors are important in a CV</h2>
        <h1>A Recuiter spends less than 7 seconds viewing a CV</h1>
      </div>
      <div className="banner" style={{background: "#DBB23C"}}>
        <h2>Do you know why colors are important in a CV</h2>
        <h1>A Recuiter spends less than 7 seconds viewing a CV</h1>
      </div>
      <div className="banner" style={{background: "#fc8d2d"}}>
        <h2>Do you know why colors are important in a CV</h2>
        <h1>A Recuiter spends less than 7 seconds viewing a CV</h1>
      </div>
      <div className="banner" style={{background: ""}}>
        <h2>Do you know why colors are important in a CV</h2>
        <h1>A Recuiter spends less than 7 seconds viewing a CV</h1>
      </div> */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        style={{
          width: "500px",
        }}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
