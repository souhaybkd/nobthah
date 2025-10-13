import React, { useState, useEffect } from "react";
import "./resetpassword.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { account } from "../../../appwrite/appwrite.config";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  useEffect(() => {
    // Check if we have the required parameters
    if (!userId || !secret) {
      toast.error("Invalid or expired password reset link.");
      setTimeout(() => {
        navigate("/en/forgot-password");
      }, 3000);
    }
  }, [userId, secret, navigate]);

  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      toast.error("Please enter and confirm your password.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!userId || !secret) {
      toast.error("Invalid reset link.");
      return;
    }

    setIsSubmitting(true);

    try {
      const resetPromise = account.updateRecovery({
        userId: userId,
        secret: secret,
        password: password
      });

      toast
        .promise(resetPromise, {
          pending: "Resetting your password...",
          success: "Password reset successfully!",
          error: "Reset failed. Please request a new link.",
        })
        .then(() => {
          setTimeout(() => {
            navigate("/en/login");
          }, 2000);
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
    <main className="reset-password-page">
      <div className="form">
        <div className="left"></div>
        <div className="right">
          <h2>Set New Password</h2>
          <p>Enter your new password</p>

          <input
            type="password"
            className="password-input"
            placeholder="New Password (at least 8 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isSubmitting}
          />
          
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isSubmitting}
          />
          
          <button 
            onClick={handleResetPassword}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </button>

          <div className="or">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>

          <Link to="/en/login">
            <button>Back To Login</button>
          </Link>
          
          <Link to="/en/forgot-password">
            <button>Request New Link</button>
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

