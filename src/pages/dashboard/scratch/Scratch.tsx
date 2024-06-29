// @ts-nocheck
import "./scratch.scss";
import "../dashboard.scss";
import React, { useState, useEffect } from "react";
import { account } from "../../../appwrite/appwrite.config";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Madrid from "../../../assets/madrid.jpg";
import Berlin from "../../../assets/berlin.png";
import Rome from "../../../assets/rome.png";
import Crisp from "../../../assets/crisp.png";
import Barcelona from "../../../assets/barcelona.png";
import Singapore from "../../../assets/singapore.png";
import Diamond from "../../../assets/diamond.png";
import Santiago from "../../../assets/santiago.png";
import London from "../../../assets/london.png";
import { CircleUserRound } from "lucide-react";

const tabData = {
  Modern: [
    {
      html: <div className="card" key="creative1"><img src={Madrid} alt="" /></div>,
      route: "/madrid"
    },
    {
      html: <div className="card" key="creative2"><img src={Berlin} alt="" /></div>,
      route: "/berlin"
    },
    {
      html: <div className="card" key="creative3"><img src={Rome} alt="" /></div>,
      route: "/rome"
    },
  ],
  Professional: [
    {
      html: <div className="card" key="professional1"><img src={Crisp} alt="" /></div>,
      route: "/crisp"
    },
    {
      html: <div className="card" key="professional2"><img src={Barcelona} alt="" /></div>,
      route: "/barcelona"
    },
    {
      html: <div className="card" key="professional3"><img src={Diamond} alt="" /></div>,
      route: "/diamond"
    },
  ],
  Minimalistic: [
    {
      html: <div className="card" key="minimalistic1"><img src={Singapore} alt="" /></div>,
      route: "/singapore"
    },
    {
      html: <div className="card" key="minimalistic2"><img src={Santiago} alt="" /></div>,
      route: "/santiago"
    },
    {
      html: <div className="card" key="minimalistic3"><img src={London} alt="" /></div>,
      route: "/london"
    },
  ]
};

export default function Scratch() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Modern");
  const [cards, setCards] = useState(tabData[activeTab]);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!exiting) {
      setCards(tabData[activeTab]);
    }
  }, [activeTab, exiting]);

  async function logout() {
    const promise = account.deleteSession("current");
    toast.promise(promise, {
      pending: "Logging Out...",
      success: "Logged Out Successfully!",
      error: "Failed to Logout. Please try again.",
    });

    promise
      .then(() => {
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
          <div className="btns">
            <button onClick={logout} className="logoutBtn">
              <h2>Log Out</h2>
            </button>

            <button className="logoutBtn user" onClick={() => navigate("/account")}>
              <CircleUserRound size={30}/>
            </button>
          </div>
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
          <AnimatePresence
            mode="wait"
            onExitComplete={() => setExiting(false)}
          >
            {cards.map((card, index) => (
              <motion.div
                onClick={() => navigate(`resume${card.route}`)}
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                onAnimationStart={() => setExiting(true)}
              >
                {card.html}
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
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
