import "./navbar.scss"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Nobthah</h1>
            </div>

            <div className="links">
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Templates</a>
            </div>

            <div className="btns">
                <Link to={"/dashboard/create-resume-from-scratch"}>
                    <button>
                        <h2>Create Resume</h2>
                    </button>
                </Link>
            </div>
        </nav>
    )
}
