import React, { useState, useEffect } from "react";
import "./forgotpassword.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { account } from "../../../appwrite/appwrite.config";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handlePasswordReset = async () => {
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // The reset URL should point to your reset password page
      const resetUrl = `${window.location.origin}/en/reset-password`;
      
      const recoveryPromise = account.createRecovery({
        email: email,
        url: resetUrl
      });
      
      toast
        .promise(recoveryPromise, {
          pending: "Sending reset link...",
          success: "Password reset link sent to your email!",
          error: "Failed to send email. Please check your email address.",
        })
        .then(() => {
          setTimeout(() => {
            navigate("/en/login");
          }, 3000);
        })
        .catch((error) => {
          console.error("Password reset failed:", error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (error) {
      console.error("Password reset error:", error);
      toast.error("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="forgot-password-page">
      <div className="form">
        <div className="left"></div>
        <div className="right">
          <h2>Reset Your Password</h2>
          <p>Enter your email to reset your password</p>

          <input
            type="email"
            className="email-input"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          
          <button 
            onClick={handlePasswordReset}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </button>

          <div className="or">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>

          <Link to="/en/login">
            <button>Back To Login</button>
          </Link>
          
          <Link to="/en/register">
            <button>Create A New Account</button>
          </Link>
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

