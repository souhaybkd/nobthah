// @ts-nocheck
import "./scratch.scss";
import "../dashboard.scss";
import React, { useState, useEffect } from "react";
import { account } from "../../../../appwrite/appwrite.config";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Madrid from "../../../../assets/madrid.jpg";
import Berlin from "../../../../assets/berlin.png";
import Rome from "../../../../assets/rome.png";
import Crisp from "../../../../assets/crisp.png";
import Barcelona from "../../../../assets/barcelona.png";
import Singapore from "../../../../assets/singapore.png";
import Diamond from "../../../../assets/diamond.png";
import Santiago from "../../../../assets/santiago.png";
import London from "../../../../assets/london.png";
import { CircleUserRound, X } from "lucide-react";
import MadridTemplate from "../resume template/templates/Madrid/Madrid";
import BerlinTemplate from "../resume template/templates/Berlin/Berlin";
import RomeTemplate from "../resume template/templates/Rome/Rome";
import CrispTemplate from "../resume template/templates/Crisp/Crisp";
import BarcelonaTemplate from "../resume template/templates/Barcelona/Barcelona";
import DiamondTemplate from "../resume template/templates/Diamond/Diamond";
import SingaporeTemplate from "../resume template/templates/Singapore/Singapore";
import SantiagoTemplate from "../resume template/templates/Santiago/Santiago";
import LondonTemplate from "../resume template/templates/London/London";
import ProfileImage from "../../../../assets/profile.png";

// Sample data for preview (English content for all versions)
const sampleData = {
  personalInfo: {
    firstName: "John Smith",
    lastName: "",
    profession: "Software Developer",
    jobTitle: "Software Developer",
    address: "San Francisco, CA, USA",
    phone: "+1 (555) 123-4567",
    email: "john.smith@example.com",
    profileDesc: "Passionate software developer with over 5 years of experience in web and mobile application development. Specialized in React and Node.js with a strong passion for creating exceptional user experiences and innovative technical solutions. Proven track record of delivering high-quality projects on time and mentoring junior developers."
  },
  experiences: [
    {
      employerName: "Tech Innovations Inc.",
      jobTitle: "Senior Full Stack Developer",
      contribution: "Developed and maintained multiple web applications using React and Node.js. Improved application performance by 40% through code optimization. Led a team of 3 developers and conducted code reviews. Implemented CI/CD pipelines and automated testing.",
      joiningDate: "January 2021",
      endingDate: "Present"
    },
    {
      employerName: "Digital Innovation Center",
      jobTitle: "Front-End Developer",
      contribution: "Built interactive user interfaces using React and modern JavaScript. Collaborated with design team to implement responsive designs. Implemented best practices in web development and accessibility standards.",
      joiningDate: "March 2019",
      endingDate: "December 2020"
    }
  ],
  education: [
    {
      institutionName: "University of California",
      degree: "Bachelor of Computer Science",
      contribution: "Graduated with honors, GPA 3.8/4.0. Dean's List all semesters. Led multiple group projects and participated in hackathons.",
      joiningDate: "2015",
      endingDate: "2019"
    }
  ],
  certificates: [
    { name: "AWS Certified Developer Associate", date: "2022" },
    { name: "Advanced React & Redux Certification", date: "2021" },
    { name: "Project Management Professional (PMP)", date: "2020" }
  ],
  skills: [
    { name: "React.js", rating: 5 },
    { name: "Node.js", rating: 4 },
    { name: "TypeScript", rating: 4 },
    { name: "MongoDB", rating: 4 },
    { name: "AWS", rating: 3 },
    { name: "Docker", rating: 4 }
  ],
  languages: [
    { name: "English", proficiency: 5 },
    { name: "Spanish", proficiency: 4 },
    { name: "French", proficiency: 3 }
  ],
  image: ProfileImage
};

const templates = [
  {
    route: "/madrid",
    name: "Madrid",
    component: MadridTemplate,
    fallbackImage: Madrid
  },
  {
    route: "/berlin",
    name: "Berlin",
    component: BerlinTemplate,
    fallbackImage: Berlin
  },
  {
    route: "/rome",
    name: "Rome",
    component: RomeTemplate,
    fallbackImage: Rome
  },
  {
    route: "/crisp",
    name: "Crisp",
    component: CrispTemplate,
    fallbackImage: Crisp
  },
  {
    route: "/barcelona",
    name: "Barcelona",
    component: BarcelonaTemplate,
    fallbackImage: Barcelona
  },
  {
    route: "/diamond",
    name: "Diamond",
    component: DiamondTemplate,
    fallbackImage: Diamond
  },
  {
    route: "/singapore",
    name: "Singapore",
    component: SingaporeTemplate,
    fallbackImage: Singapore
  },
  {
    route: "/santiago",
    name: "Santiago",
    component: SantiagoTemplate,
    fallbackImage: Santiago
  },
  {
    route: "/london",
    name: "London",
    component: LondonTemplate,
    fallbackImage: London
  },
];

export default function Scratch() {
  const navigate = useNavigate();
  const [previewTemplate, setPreviewTemplate] = useState(null);

  useEffect(() => {
    async function getAuthStatus() {
      try {
        const user = await account.get();
      } catch (error) {
        console.log("No user logged in", error);
        navigate("/en/login");
      }
    }
    getAuthStatus();
  }, [navigate]);

  async function logout() {
    const promise = account.deleteSession("current");
    toast.promise(promise, {
      pending: "Logging Out...",
      success: "Logged Out Successfully!",
      error: "Failed to Logout. Please try again.",
    });

    promise
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  }

  return (
    <div className="dashboard">
      <nav>
        <div className="container">
          <h1>Nobthah</h1>
          <div className="btns">
            <button onClick={logout} className="logoutBtn">
              <h2>Log Out</h2>
            </button>

            <button className="logoutBtn user" onClick={() => navigate("/account")}>
              <CircleUserRound size={30}/>
            </button>
          </div>
        </div>
      </nav>

      <div className="mainSection">
        <h1>Job-winning resume templates</h1>
        <p>Each resume template is expertly designed and follows the exact "resume rules" hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p>

        <div className="grid">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="template-wrapper"
            >
              <div className="card-thumbnail">
                <div className="card" dir="ltr">
                  <div className="template-miniature">
                    <template.component {...sampleData} />
                  </div>
                </div>
              </div>
              <button 
                className="preview-btn"
                onClick={() => setPreviewTemplate(template)}
              >
                Preview Template
              </button>
              <button 
                className="choose-btn"
                onClick={() => navigate(`resume${template.route}`)}
              >
                Choose This Template
              </button>
            </motion.div>
          ))}
        </div>

        {/* Preview Modal */}
        <AnimatePresence>
          {previewTemplate && (
            <motion.div 
              className="preview-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewTemplate(null)}
            >
              <motion.div 
                className="preview-content"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="close-btn"
                  onClick={() => setPreviewTemplate(null)}
                >
                  <X size={24} />
                </button>
                <div className="preview-template-container" dir="ltr">
                  <previewTemplate.component {...sampleData} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
