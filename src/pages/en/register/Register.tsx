import React, { useState, useEffect } from "react";
import "./register.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";
import { account } from "../../../appwrite/appwrite.config";
import { Link } from "react-router-dom";
import DebugInfo from "../../../components/DebugInfo";
import AppwriteTest from "../../../components/AppwriteTest";


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
        toast.promise(
          accountCreationPromise,
          {
            pending: "Creating account...",
            success: "Account created successfully!",
            error: "Error creating account. Please try again."
          }
        ).then(() => {
          navigate("/navigate/dashboard/create-resume-from-scratch");
        }).catch(error => {
          console.error("Registration failed:", error);
          // Enhanced error logging for debugging
          console.error("Error details:", {
            message: error.message,
            type: error.type,
            code: error.code,
            response: error.response
          });
          toast.error(`Detailed error: ${error.message || 'Unknown error'}`);
        });
      } catch (error) {
        console.error("Registration error:", error);
        toast.error(`Connection error: ${error.message || 'Check your internet connection'}`);
      }
    } else {
      toast.error("Please enter all required fields.");
    }
  };

  return (
    <main className="register-page">
      <DebugInfo />
      <AppwriteTest />
      <div className="form">
        <div className="left">
          x
        </div>
        <div className="right">
          <h2>Register In Nobthah</h2>
          <p>Get Hired 10x Faster With Nobthah</p>
          <input
            className="name-input"
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create A New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegistration}>Create A New Account</button>
          <div className="or">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>
          <Link to="/login">
            <button>Visit Login Page</button>
          </Link>
          <button>Forgot Your Password</button>
        </div>
      </div>
      <div className="overlay"></div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        style={{
          width: "500px"
        }}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}
