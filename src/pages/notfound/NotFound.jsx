import { useNavigate } from "react-router-dom";
import "./notfound.scss";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page" dir="rtl">
      <div className="notfound-container">
        <div className="notfound-content">
          <div className="error-badge">
            <h1 className="error-code">404</h1>
          </div>
          
          <h2 className="error-title">عذراً، الصفحة غير موجودة!</h2>
          
          <p className="error-description">
            يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها. 
            دعنا نعيدك إلى المسار الصحيح!
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
              onClick={() => navigate("/")}
            >
              <h3>العودة إلى الصفحة الرئيسية</h3>
            </button>
            <button 
              className="secondary-btn"
              onClick={() => navigate("/navigate/dashboard/create-resume-from-scratch")}
            >
              <h3>أنشئ سيرتك الذاتية</h3>
            </button>
          </div>

          <div className="help-links">
            <p>هل تحتاج مساعدة؟</p>
            <div className="links">
              <a href="/#home">الرئيسية</a>
              <a href="/#portfolio">القوالب</a>
              <a href="/#contact">اتصل بنا</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

