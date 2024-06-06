import "./scratch.scss"
import "../dashboard.scss"
import React, { useState } from "react"
import { account } from "../../../appwrite/appwrite.config";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const tabData = {
  "Innovative": [
    <div className="card" key="creative1"></div>,
    <div className="card" key="creative2"></div>,
    <div className="card" key="creative3"></div>,
  ],
  Professional: [
    <div className="card" key="professional1"></div>,
    <div className="card" key="professional2"></div>,
    <div className="card" key="professional3"></div>,
  ],
  Minimalistic: [
    <div className="card" key="minimalistic1"></div>,
    <div className="card" key="minimalistic2"></div>,
    <div className="card" key="minimalistic3"></div>,
  ]
};

export default function Scratch() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("Innovative")

  async function logout() {
    const promise = account.deleteSession("current");
    // Show toast notification for the operation
    toast.promise(promise, {
      pending: "Logging Out...",
      success: "Logged Out Successfully!",
      error: "Failed to Logout. Please try again.",
    });

    // Handle promise if needed
    promise
      .then(() => {
        console.log("Logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
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

      <div className="mainSection">
        <h1>Job-winning resume templates</h1>
        <p>Each resume template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p>
        <div className="menu">
          {Object.keys(tabData).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab ${activeTab === tab ? "active" : ""}`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="bubble"
                  className="bubble"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <h2>{tab}</h2>
            </button>
          ))}
        </div>

        <div className="grid">
          <AnimatePresence mode="wait">
            {tabData[activeTab].map(card => (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {card}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

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
