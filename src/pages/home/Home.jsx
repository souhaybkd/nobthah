import Woman from "../../assets/woman.png";
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  
  return (
    <div className="home-page">
      <Navbar />
      <div className="section1">
        <div className="left">
          <h1>ATS Friendly & Beautiful Resume !!</h1>
          <h2>CREATE BETTER RESUME'S.</h2>
          <p>
            Just in a matter of 3 clicks create a beautiful & ATS friendly resume without
            spending hours on it. Get good resumes & get hired quickly & easily. Try Now !!
          </p>
          <div className="btns">
            <button className="button" onClick={() => navigate("/dashboard/create-resume-from-scratch")}>
              <h2>Create Resume</h2>
            </button>
          </div>
        </div>
        <div className="right">
          <img src={Woman} alt="Woman" />
        </div>
      </div>
    </div>
  );
}
