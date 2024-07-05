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
          pending: "Logging In To Your Account...",
          success: "Logged In successfully!",
          error: "Incorrect email/password.",
        })
        .then(() => {
          console.log("Navigating to dashboard");
          navigate("/navigate/dashboard/create-resume-from-scratch"); // Assuming your dashboard route is "/dashboard"
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    } else {
      toast.error("Please enter both email and password.");
    }
  };

  return (
    <main className="register-page login-page">
      <div className="form">
        <div className="left">
          {/* You can remove this section if not required */}
          {/* x */}
        </div>
        <div className="right">
          <h2>Welcome To Nobthah</h2>
          <p>Create beautiful resumes at speed</p>
          {/* Removed name input as per your requirement */}
          <input
            type="text"
            className="name-input"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log In</button>
          <div className="or">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>
          <Link to="/register">
            <button>Create A New Account</button>
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
