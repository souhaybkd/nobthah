import { useNavigate } from "react-router-dom";
import "./notfound.scss";

export default function NotFoundEn() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <div className="notfound-content">
          <div className="error-badge">
            <h1 className="error-code">404</h1>
          </div>
          
          <h2 className="error-title">Oops! Page Not Found</h2>
          
          <p className="error-description">
            It seems like the page you're looking for doesn't exist or has been moved. 
            Let's get you back on track!
          </p>

          <div className="error-illustration">
            <div className="illustration-circle">
              <span className="illustration-icon">📄</span>
            </div>
            <div className="illustration-cross">✕</div>
          </div>

          <div className="notfound-buttons">
            <button 
              className="primary-btn"
              onClick={() => navigate("/en")}
            >
              <h3>Back to Home</h3>
            </button>
            <button 
              className="secondary-btn"
              onClick={() => navigate("/en/navigate/dashboard/create-resume-from-scratch")}
            >
              <h3>Create Your Resume</h3>
            </button>
          </div>

          <div className="help-links">
            <p>Need Help?</p>
            <div className="links">
              <a href="/en#home">Home</a>
              <a href="/en#portfolio">Templates</a>
              <a href="/en#contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

