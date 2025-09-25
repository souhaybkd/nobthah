import "./navbar.scss"
import { Link } from "react-router-dom"
import { useLanguage } from "../../contexts/LanguageContext"

export default function Navbar() {
    const { switchLanguage, isEnglish } = useLanguage();

    const handleLanguageSwitch = () => {
        switchLanguage(isEnglish ? 'ar' : 'en');
    };

    return (
        <nav className="navbar" dir="rtl">
            <div className="logo">
                <h1>نبذة</h1>
            </div>

            <div className="links">
                <a href="#">الرئيسية</a>
                <a href="#">المميزات</a>
                <a href="#">الأسعار</a>
                <a href="#">القوالب</a>
            </div>

            <div className="btns">
                <div className="language-switcher">
                    <button 
                        className="lang-btn" 
                        onClick={handleLanguageSwitch}
                        title="Switch to English"
                    >
                        <span className="lang-icon">🌐</span>
                        <span className="lang-text">English</span>
                    </button>
                </div>
                
                <Link to={"navigate/dashboard/create-resume-from-scratch"}>
                    <button>
                        <h2>أنشئ سيرتك الذاتية</h2>
                    </button>
                </Link>
            </div>
        </nav>
    )
}
