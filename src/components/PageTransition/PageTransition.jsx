import "./pagetransition.scss";

export default function PageTransition() {
  return (
    <div className="page-transition">
      <div className="transition-content">
        <div className="spinner-box">
          <div className="spinner"></div>
        </div>
        <p className="loading-text">جاري التحميل...</p>
      </div>
    </div>
  );
}

