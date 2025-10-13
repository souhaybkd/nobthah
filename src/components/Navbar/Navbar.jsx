import "./navbar.scss"
import { Link } from "react-router-dom"
import { useLanguage } from "../../contexts/LanguageContext"

export default function Navbar() {
    const { switchLanguage, isArabic } = useLanguage();

    const handleLanguageSwitch = () => {
        switchLanguage(isArabic ? 'en' : 'ar');
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h1 style={{ cursor: 'pointer' }} onClick={() => {
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                }}>Nobthah</h1>
            </div>

            <div className="links">
                <a href="#home" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                }}>Home</a>
                <a href="#portfolio" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}>Templates</a>
                <a href="#pricing" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}>Pricing</a>
                <a href="#contact" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>Contact</a>
            </div>

            <div className="btns">
                <div className="language-switcher">
                    <button 
                        className="lang-btn" 
                        onClick={handleLanguageSwitch}
                        title="Switch to Arabic"
                    >
                        <span className="lang-icon">🌐</span>
                        <span className="lang-text">عربي</span>
                    </button>
                </div>
                
                <Link to={"/en/navigate/dashboard/create-resume-from-scratch"}>
                    <button>
                        <h2>Create Resume</h2>
                    </button>
                </Link>
            </div>
        </nav>
    )
}
