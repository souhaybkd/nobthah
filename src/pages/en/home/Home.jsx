import Woman from "../../../assets/woman.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import Navbar from "../../../components/Navbar/Navbar";
import "./home.scss";
import { useNavigate } from "react-router-dom";

import Berlin from "../../../assets/templates-cover/berlin-template.png";
import Barcelona from "../../../assets/templates-cover/barcelona-resume.png";
import Crisp from "../../../assets/templates-cover/crisp-resume.png";
import Diamond from "../../../assets/templates-cover/diamond-resume.png";
import London from "../../../assets/templates-cover/london-resume.png";
import Madrid from "../../../assets/templates-cover/madrid-template.png";
import Rome from "../../../assets/templates-cover/rome-resume.png";
import Santiago from "../../../assets/templates-cover/santiago-resume.png";
import Singapore from "../../../assets/templates-cover/singapore-resume.png";

// Import all templates
import MadridTemplate from "../../../pages/dashboard/resume template/templates/Madrid/Madrid";
import BerlinTemplate from "../../../pages/dashboard/resume template/templates/Berlin/Berlin";
import RomeTemplate from "../../../pages/dashboard/resume template/templates/Rome/Rome";
import CrispTemplate from "../../../pages/dashboard/resume template/templates/Crisp/Crisp";
import BarcelonaTemplate from "../../../pages/dashboard/resume template/templates/Barcelona/Barcelona";
import DiamondTemplate from "../../../pages/dashboard/resume template/templates/Diamond/Diamond";
import SingaporeTemplate from "../../../pages/dashboard/resume template/templates/Singapore/Singapore";
import SantiagoTemplate from "../../../pages/dashboard/resume template/templates/Santiago/Santiago";
import LondonTemplate from "../../../pages/dashboard/resume template/templates/London/London";
import ProfileImage from "../../../assets/profile.png";

// Sample data for preview
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
    coverImage: Madrid
  },
  {
    route: "/berlin",
    name: "Berlin",
    component: BerlinTemplate,
    coverImage: Berlin
  },
  {
    route: "/rome",
    name: "Rome",
    component: RomeTemplate,
    coverImage: Rome
  },
  {
    route: "/crisp",
    name: "Crisp",
    component: CrispTemplate,
    coverImage: Crisp
  },
  {
    route: "/barcelona",
    name: "Barcelona",
    component: BarcelonaTemplate,
    coverImage: Barcelona
  },
  {
    route: "/diamond",
    name: "Diamond",
    component: DiamondTemplate,
    coverImage: Diamond
  },
  {
    route: "/singapore",
    name: "Singapore",
    component: SingaporeTemplate,
    coverImage: Singapore
  },
  {
    route: "/santiago",
    name: "Santiago",
    component: SantiagoTemplate,
    coverImage: Santiago
  },
  {
    route: "/london",
    name: "London",
    component: LondonTemplate,
    coverImage: London
  },
];

// Import Swiper modules

export default function Home() {
  const navigate = useNavigate()
  const [openFAQ, setOpenFAQ] = useState(null);
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Nobthah?",
      answer: "Nobthah is an innovative platform for creating professional, beautiful, and ATS-friendly resumes in minutes. We provide 9 professional templates specifically designed to help you land your dream job."
    },
    {
      question: "How long does it take to create a resume?",
      answer: "You can create your resume in 3 simple steps and in less than 10 minutes! All you need to do is enter your information, choose your preferred template, and download your high-quality PDF resume."
    },
    {
      question: "What does ATS-friendly mean?",
      answer: "ATS (Applicant Tracking System) is software that companies use to filter resumes. Our templates are designed so these systems can easily read your information, increasing your chances of getting to the interview stage."
    },
    {
      question: "Can I edit my resume after creating it?",
      answer: "Yes! You can edit your resume anytime. Your information will remain saved in your account and you can access and update it whenever you want."
    },
    {
      question: "What do I get for 20 SAR?",
      answer: "For only 20 SAR, you get full access to all nine templates, the ability to export your resume in high-quality PDF format, ATS-friendly designs, and 24/7 customer support. One payment, unlimited benefits!"
    },
    {
      question: "Is my information secure?",
      answer: "Yes, your data security is our top priority. We use the latest encryption technologies to protect your personal information and we never share your data with any third parties."
    }
  ];

  return (
    <div className="home-page home-page-en">
      <Navbar />

      <div id="home" className="hero-section">
        <div className="hero-section__left">
          <h1 className="hero-section__title">ATS Friendly & Beautiful Resume !!</h1>
          <h2 className="hero-section__subtitle">CREATE BETTER RESUMES</h2>
          <p className="hero-section__description">
            Just in a matter of 3 clicks create a beautiful & ATS friendly resume without
            spending hours on it. Get good resumes & get hired quickly & easily. Try Now !!
          </p>
          <div className="hero-section__btns">
            <button className="hero-section__button" onClick={() => navigate("/en/navigate/dashboard/create-resume-from-scratch")}>
              <h2 className="hero-section__button-text">Create Resume</h2>
            </button>
          </div>
        </div>
        <div className="hero-section__right">
          <img src={Woman} alt="Woman" className="hero-section__image" />
        </div>
      </div>

      <div id="portfolio" className="cv-section">
        <h1 className="hero-section__subtitle" style={{ textAlign: 'center' }}><span>WITH PROFESSIONAL </span> RESUME DESIGN</h1>
        
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
                  <img src={template.coverImage} alt={`${template.name} template`} />
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
                onClick={() => navigate("/en/navigate/dashboard/create-resume-from-scratch")}
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

      <div id="home" className="hero-section">
        <div className="hero-section__left">
          <h1 className="hero-section__title">Only 2% of resumes make it past the first round !!</h1>
          <h2 className="hero-section__subtitle">ENJOY BECOMING THE TOP 2%</h2>
          <p className="hero-section__description">
            Just in a matter of 3 clicks create a beautiful & ATS friendly resume without
            spending hours on it. Get good resumes & get hired quickly & easily. Try Now !!
          </p>
          <div className="hero-section__btns">
            <button className="hero-section__button" onClick={() => navigate("/en/navigate/dashboard/create-resume-from-scratch")}>
              <h2 className="hero-section__button-text">Create Resume</h2>
            </button>
          </div>
        </div>

        <div className="hero-section__right">
          <img src={Woman} alt="Woman" className="hero-section__image" />
        </div>
      </div>

{/* Pricing Section */}
<div id="pricing" className="pricing-section">
  <div className="pricing-header">
    <h1 className="hero-section__title">Unbeatable Price 💰</h1>
    <h2 className="hero-section__subtitle">One Plan, Unlimited Value</h2>
    <p className="hero-section__description">
      Get a professional resume at an affordable price for everyone
    </p>
  </div>

  <div className="pricing-card">
    <div className="pricing-badge">
      <span className="badge-text">Best Value</span>
    </div>
    
    <div className="pricing-content">
      <h3 className="pricing-plan-name">Complete Plan</h3>
      
      <div className="pricing-amount">
        <span className="currency">SAR</span>
        <span className="price">20</span>
        <span className="period">One-time</span>
      </div>

      <div className="pricing-features">
        <div className="feature-item">
          <span className="feature-icon">✓</span>
          <span className="feature-text">9 Professional Resume Templates</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">✓</span>
          <span className="feature-text">ATS-Friendly Designs</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">✓</span>
          <span className="feature-text">Beautiful & Modern Styles</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">✓</span>
          <span className="feature-text">High-Quality PDF Export</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">✓</span>
          <span className="feature-text">Create in Just 3 Steps</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">✓</span>
          <span className="feature-text">24/7 Customer Support</span>
        </div>
      </div>

      <button 
        className="pricing-button"
        onClick={() => navigate("/en/navigate/dashboard/create-resume-from-scratch")}
      >
        <h3 className="pricing-button-text">Get Started</h3>
      </button>
    </div>
  </div>
</div>

{/* FAQ Section */}
<div id="faq" className="faq-section">
  <div className="faq-header">
    <h1 className="hero-section__title">Got Questions? 🤔</h1>
    <h2 className="hero-section__subtitle">Frequently Asked Questions</h2>
    <p className="hero-section__description">
      Here are answers to the most common questions about Nobthah
    </p>
  </div>

  <div className="faq-container">
    {faqs.map((faq, index) => (
      <div 
        key={index} 
        className={`faq-item ${openFAQ === index ? 'active' : ''}`}
      >
        <button 
          className="faq-question"
          onClick={() => toggleFAQ(index)}
        >
          <span className="question-text">{faq.question}</span>
          <span className="faq-icon">{openFAQ === index ? '−' : '+'}</span>
        </button>
        <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
          <p>{faq.answer}</p>
        </div>
      </div>
    ))}
  </div>

  <div className="faq-cta">
    <p className="faq-cta-text">Didn't find your answer?</p>
    <button 
      className="faq-cta-button"
      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
    >
      <h3 className="faq-cta-button-text">Contact Us</h3>
    </button>
  </div>
</div>

      <div id="contact" class="hero-section contact-us">
        <div class="hero-section__left">
          <div>
            <h1 class="hero-section__title">lets Stay In Touch 💼</h1>
            <h2 class="hero-section__subtitle">CONTACT US</h2>
            <p class="hero-section__description">
              Need Help? Get in touch with our friendly support team who are happy to answer any questions you might have.

            </p>
          </div>

          <div class="social">


            <div class="right">
              <h3>Follow Me:- </h3>
              <div class="icons">
                <div class="icon">
                  <a>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.6289 26.7835C15.1495 27.8436 16.999 28.4697 18.9931 28.4697C20.0006 28.4697 20.945 28.2646 21.8605 27.9751C21.6975 25.7574 21.2634 23.5686 20.6058 21.4614C17.8434 22.4479 15.3969 24.2763 13.6289 26.7835Z"
                        fill="#0D0C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M19.8992 19.4883C19.6728 18.9122 19.4361 18.3676 19.1704 17.8125C17.0737 18.7386 14.8006 19.2515 12.4699 19.2515C11.4938 19.2515 10.5073 19.128 9.53125 18.9937C9.53125 21.4719 10.4968 23.7002 12.0489 25.3865C14.072 22.611 16.8054 20.588 19.8992 19.4883Z"
                        fill="#0D0C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M24.2337 11.1114C22.7341 10.1144 20.9374 9.53027 18.9933 9.53027C18.1303 9.53027 17.3174 9.68286 16.5176 9.89858C17.8725 11.4719 19.0748 13.166 20.0823 14.976C21.6767 13.9895 23.084 12.6952 24.2337 11.1114Z"
                        fill="#0D0C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M18.2022 15.9309C17.1552 14.0709 15.9108 12.324 14.4718 10.7324C12.1514 12.0058 10.4151 14.205 9.79688 16.8569C12.6855 17.391 15.6029 17.0515 18.2022 15.9309Z"
                        fill="#0D0C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M22.6309 20.8849C23.257 22.9 23.6701 24.9651 23.8753 27.0723C26.093 25.7254 27.7372 23.5155 28.2739 20.8953C26.3718 20.5244 24.4592 20.5139 22.6309 20.8849Z"
                        fill="#0D0C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.0391 16.8463C21.3574 17.5146 21.6441 18.1933 21.9125 18.8799C24.0275 18.409 26.2374 18.3985 28.4473 18.7878C28.3946 16.3517 27.4081 14.1419 25.8481 12.4897C24.5117 14.2761 22.8779 15.7466 21.0391 16.8463Z"
                        fill="#0D0C22"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M19 0C8.50659 0 0 8.50659 0 19V19C0 29.4934 8.50659 38 19 38V38C29.4934 38 38 29.4934 38 19V19C38 8.50659 29.4934 0 19 0V0ZM18.9935 30.5767C12.6112 30.5767 7.42328 25.3756 7.42328 18.9934C7.42328 12.6112 12.6112 7.42328 18.9935 7.42328C25.3756 7.42328 30.5767 12.6112 30.5767 18.9934C30.5767 25.3756 25.3756 30.5767 18.9935 30.5767Z"
                        fill="#0D0C22"></path>
                    </svg>
                  </a>

                </div>

                <div class="icon">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.6367 19C22.6367 21.0085 21.0085 22.6367 19 22.6367C16.9915 22.6367 15.3633 21.0085 15.3633 19C15.3633 16.9915 16.9915 15.3633 19 15.3633C21.0085 15.3633 22.6367 16.9915 22.6367 19Z"
                      fill="#0D0C22"></path>
                    <path
                      d="M27.5062 12.5655C27.3313 12.0918 27.0524 11.663 26.69 11.311C26.3381 10.9486 25.9096 10.6697 25.4356 10.4949C25.0511 10.3456 24.4736 10.1679 23.4099 10.1194C22.2592 10.067 21.9142 10.0557 19.0012 10.0557C16.0878 10.0557 15.7428 10.0667 14.5924 10.1192C13.5287 10.1679 12.9509 10.3456 12.5667 10.4949C12.0927 10.6697 11.6639 10.9486 11.3123 11.311C10.9499 11.663 10.671 12.0915 10.4959 12.5655C10.3466 12.9499 10.1688 13.5277 10.1204 14.5914C10.0679 15.7418 10.0566 16.0868 10.0566 19.0002C10.0566 21.9133 10.0679 22.2583 10.1204 23.4089C10.1688 24.4727 10.3466 25.0502 10.4959 25.4346C10.671 25.9086 10.9496 26.3371 11.312 26.6891C11.6639 27.0515 12.0924 27.3304 12.5665 27.5052C12.9509 27.6548 13.5287 27.8325 14.5924 27.8809C15.7428 27.9334 16.0875 27.9444 19.0009 27.9444C21.9145 27.9444 22.2595 27.9334 23.4096 27.8809C24.4733 27.8325 25.0511 27.6548 25.4356 27.5052C26.3871 27.1382 27.1391 26.3861 27.5062 25.4346C27.6555 25.0502 27.8332 24.4727 27.8819 23.4089C27.9344 22.2583 27.9454 21.9133 27.9454 19.0002C27.9454 16.0868 27.9344 15.7418 27.8819 14.5914C27.8335 13.5277 27.6558 12.9499 27.5062 12.5655ZM19.0012 24.6022C15.9069 24.6022 13.3985 22.0942 13.3985 18.9999C13.3985 15.9056 15.9069 13.3975 19.0012 13.3975C22.0952 13.3975 24.6035 15.9056 24.6035 18.9999C24.6035 22.0942 22.0952 24.6022 19.0012 24.6022ZM24.825 14.4853C24.102 14.4853 23.5157 13.8991 23.5157 13.176C23.5157 12.453 24.102 11.8668 24.825 11.8668C25.5481 11.8668 26.1343 12.453 26.1343 13.176C26.134 13.8991 25.5481 14.4853 24.825 14.4853Z"
                      fill="#0D0C22"></path>
                    <path
                      d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM29.8443 23.4981C29.7916 24.6595 29.6069 25.4524 29.3373 26.1465C28.7705 27.612 27.612 28.7705 26.1465 29.3373C25.4527 29.6069 24.6595 29.7913 23.4984 29.8443C22.3349 29.8974 21.9632 29.9102 19.0003 29.9102C16.037 29.9102 15.6657 29.8974 14.5019 29.8443C13.3408 29.7913 12.5476 29.6069 11.8538 29.3373C11.1256 29.0633 10.4663 28.6339 9.92125 28.0788C9.36635 27.534 8.93698 26.8744 8.66301 26.1465C8.39339 25.4527 8.20871 24.6595 8.15594 23.4984C8.10231 22.3346 8.08984 21.963 8.08984 19C8.08984 16.037 8.10231 15.6654 8.15565 14.5019C8.20842 13.3405 8.39281 12.5476 8.66243 11.8535C8.9364 11.1256 9.36606 10.466 9.92125 9.92125C10.466 9.36606 11.1256 8.93669 11.8535 8.66272C12.5476 8.3931 13.3405 8.20871 14.5019 8.15565C15.6654 8.1026 16.037 8.08984 19 8.08984C21.963 8.08984 22.3346 8.1026 23.4981 8.15594C24.6595 8.20871 25.4524 8.3931 26.1465 8.66243C26.8744 8.9364 27.534 9.36606 28.079 9.92125C28.6339 10.4663 29.0636 11.1256 29.3373 11.8535C29.6072 12.5476 29.7916 13.3405 29.8446 14.5019C29.8977 15.6654 29.9102 16.037 29.9102 19C29.9102 21.963 29.8977 22.3346 29.8443 23.4981Z"
                      fill="#0D0C22"></path>
                  </svg>
                </div>

                <div class="icon">

                  <a href="https://x.com/1imcris">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM27.6752 14.8142C27.6836 15.0012 27.6877 15.189 27.6877 15.3778C27.6877 21.1405 23.3012 27.7856 15.2795 27.7859H15.2798H15.2795C12.8167 27.7859 10.5249 27.064 8.59488 25.827C8.93611 25.8673 9.28343 25.8873 9.6351 25.8873C11.6784 25.8873 13.5588 25.1903 15.0516 24.0205C13.1425 23.9851 11.5329 22.7243 10.9774 20.9914C11.2433 21.0425 11.5167 21.0703 11.797 21.0703C12.1951 21.0703 12.5807 21.0167 12.9471 20.9166C10.9516 20.5171 9.44839 18.7536 9.44839 16.6418C9.44839 16.6221 9.44839 16.6044 9.44897 16.5862C10.0366 16.9129 10.7087 17.1095 11.4242 17.1315C10.2532 16.3502 9.48347 15.0145 9.48347 13.5014C9.48347 12.7024 9.69946 11.9539 10.074 11.3094C12.2246 13.9482 15.4387 15.6836 19.0632 15.866C18.9884 15.5465 18.9498 15.2137 18.9498 14.8716C18.9498 12.4641 20.903 10.5109 23.3114 10.5109C24.5658 10.5109 25.6988 11.0412 26.4946 11.8889C27.4882 11.6929 28.4211 11.33 29.2639 10.8304C28.9378 11.8483 28.2466 12.7024 27.3461 13.2425C28.2283 13.137 29.0691 12.903 29.8504 12.5557C29.2668 13.4304 28.5267 14.1987 27.6752 14.8142Z"
                        fill="#0D0C22"></path>
                    </svg></a>

                </div>

                <div class="icon">
                  <a>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM13.4788 28.7227H8.85146V14.8011H13.4788V28.7227ZM11.1653 12.9001H11.1351C9.58234 12.9001 8.57806 11.8312 8.57806 10.4953C8.57806 9.1292 9.61307 8.08984 11.196 8.08984C12.779 8.08984 13.7531 9.1292 13.7832 10.4953C13.7832 11.8312 12.779 12.9001 11.1653 12.9001ZM30.1641 28.7227H25.5373V21.275C25.5373 19.4033 24.8673 18.1268 23.1931 18.1268C21.9148 18.1268 21.1535 18.9878 20.8189 19.819C20.6966 20.1165 20.6667 20.5322 20.6667 20.9482V28.7227H16.0397C16.0397 28.7227 16.1003 16.1072 16.0397 14.8011H20.6667V16.7723C21.2816 15.8237 22.3819 14.4744 24.8369 14.4744C27.8813 14.4744 30.1641 16.4641 30.1641 20.7401V28.7227Z"
                        fill="#0D0C22"></path>
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>


        </div>
        <div class="hero-section__right">
          <div class="form-row">
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Your E-Mail" />
          </div>

          <div class="form-row">
            <select name="cars" id="cars">
              <option value="volvo">Contact Reason</option>
              <option value="mercedes">📞 Customer Support</option>
              <option value="mercedes">🐞Bug Report</option>
              <option value="mercedes">💡 Feedback/Ideas</option>
            </select>
            <select name="cars" id="cars">
              <option value="volvo">Urgency</option>
              <option value="saab">Immediate</option>
              <option value="mercedes">Mediocre</option>
              <option value="mercedes">Minor</option>
            </select>
          </div>

          <input class="full-width" type="text" placeholder="Enter Your Phone Number" />
          <textarea class="project-desc" placeholder="Type Anything Here !!"></textarea>
          <div class="btns">

            <button onclick="goToContact()">Contact Customer Support</button>
          </div>
        </div>
      </div>
      <footer className='home-page-footer'>

        <div className="breaker"></div>
        <div className="flex">
        <div className="footer-brand">
          <h1>Nobthah</h1>

        </div>
        <div className="footer-links">
            <a href="/en/privacy" className="footer-link">Privacy Policy</a>
            <span className="footer-separator">•</span>
            <a href="/en/terms" className="footer-link">Terms of Service</a>
          </div>

<div class="icons">
        <div class="icon">
          <a>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M13.6289 26.7835C15.1495 27.8436 16.999 28.4697 18.9931 28.4697C20.0006 28.4697 20.945 28.2646 21.8605 27.9751C21.6975 25.7574 21.2634 23.5686 20.6058 21.4614C17.8434 22.4479 15.3969 24.2763 13.6289 26.7835Z"
                fill="#0D0C22"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M19.8992 19.4883C19.6728 18.9122 19.4361 18.3676 19.1704 17.8125C17.0737 18.7386 14.8006 19.2515 12.4699 19.2515C11.4938 19.2515 10.5073 19.128 9.53125 18.9937C9.53125 21.4719 10.4968 23.7002 12.0489 25.3865C14.072 22.611 16.8054 20.588 19.8992 19.4883Z"
                fill="#0D0C22"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M24.2337 11.1114C22.7341 10.1144 20.9374 9.53027 18.9933 9.53027C18.1303 9.53027 17.3174 9.68286 16.5176 9.89858C17.8725 11.4719 19.0748 13.166 20.0823 14.976C21.6767 13.9895 23.084 12.6952 24.2337 11.1114Z"
                fill="#0D0C22"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18.2022 15.9309C17.1552 14.0709 15.9108 12.324 14.4718 10.7324C12.1514 12.0058 10.4151 14.205 9.79688 16.8569C12.6855 17.391 15.6029 17.0515 18.2022 15.9309Z"
                fill="#0D0C22"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M22.6309 20.8849C23.257 22.9 23.6701 24.9651 23.8753 27.0723C26.093 25.7254 27.7372 23.5155 28.2739 20.8953C26.3718 20.5244 24.4592 20.5139 22.6309 20.8849Z"
                fill="#0D0C22"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M21.0391 16.8463C21.3574 17.5146 21.6441 18.1933 21.9125 18.8799C24.0275 18.409 26.2374 18.3985 28.4473 18.7878C28.3946 16.3517 27.4081 14.1419 25.8481 12.4897C24.5117 14.2761 22.8779 15.7466 21.0391 16.8463Z"
                fill="#0D0C22"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M19 0C8.50659 0 0 8.50659 0 19V19C0 29.4934 8.50659 38 19 38V38C29.4934 38 38 29.4934 38 19V19C38 8.50659 29.4934 0 19 0V0ZM18.9935 30.5767C12.6112 30.5767 7.42328 25.3756 7.42328 18.9934C7.42328 12.6112 12.6112 7.42328 18.9935 7.42328C25.3756 7.42328 30.5767 12.6112 30.5767 18.9934C30.5767 25.3756 25.3756 30.5767 18.9935 30.5767Z"
                fill="#0D0C22"></path>
            </svg>
          </a>

        </div>

        <div class="icon">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.6367 19C22.6367 21.0085 21.0085 22.6367 19 22.6367C16.9915 22.6367 15.3633 21.0085 15.3633 19C15.3633 16.9915 16.9915 15.3633 19 15.3633C21.0085 15.3633 22.6367 16.9915 22.6367 19Z"
              fill="#0D0C22"></path>
            <path
              d="M27.5062 12.5655C27.3313 12.0918 27.0524 11.663 26.69 11.311C26.3381 10.9486 25.9096 10.6697 25.4356 10.4949C25.0511 10.3456 24.4736 10.1679 23.4099 10.1194C22.2592 10.067 21.9142 10.0557 19.0012 10.0557C16.0878 10.0557 15.7428 10.0667 14.5924 10.1192C13.5287 10.1679 12.9509 10.3456 12.5667 10.4949C12.0927 10.6697 11.6639 10.9486 11.3123 11.311C10.9499 11.663 10.671 12.0915 10.4959 12.5655C10.3466 12.9499 10.1688 13.5277 10.1204 14.5914C10.0679 15.7418 10.0566 16.0868 10.0566 19.0002C10.0566 21.9133 10.0679 22.2583 10.1204 23.4089C10.1688 24.4727 10.3466 25.0502 10.4959 25.4346C10.671 25.9086 10.9496 26.3371 11.312 26.6891C11.6639 27.0515 12.0924 27.3304 12.5665 27.5052C12.9509 27.6548 13.5287 27.8325 14.5924 27.8809C15.7428 27.9334 16.0875 27.9444 19.0009 27.9444C21.9145 27.9444 22.2595 27.9334 23.4096 27.8809C24.4733 27.8325 25.0511 27.6548 25.4356 27.5052C26.3871 27.1382 27.1391 26.3861 27.5062 25.4346C27.6555 25.0502 27.8332 24.4727 27.8819 23.4089C27.9344 22.2583 27.9454 21.9133 27.9454 19.0002C27.9454 16.0868 27.9344 15.7418 27.8819 14.5914C27.8335 13.5277 27.6558 12.9499 27.5062 12.5655ZM19.0012 24.6022C15.9069 24.6022 13.3985 22.0942 13.3985 18.9999C13.3985 15.9056 15.9069 13.3975 19.0012 13.3975C22.0952 13.3975 24.6035 15.9056 24.6035 18.9999C24.6035 22.0942 22.0952 24.6022 19.0012 24.6022ZM24.825 14.4853C24.102 14.4853 23.5157 13.8991 23.5157 13.176C23.5157 12.453 24.102 11.8668 24.825 11.8668C25.5481 11.8668 26.1343 12.453 26.1343 13.176C26.134 13.8991 25.5481 14.4853 24.825 14.4853Z"
              fill="#0D0C22"></path>
            <path
              d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM29.8443 23.4981C29.7916 24.6595 29.6069 25.4524 29.3373 26.1465C28.7705 27.612 27.612 28.7705 26.1465 29.3373C25.4527 29.6069 24.6595 29.7913 23.4984 29.8443C22.3349 29.8974 21.9632 29.9102 19.0003 29.9102C16.037 29.9102 15.6657 29.8974 14.5019 29.8443C13.3408 29.7913 12.5476 29.6069 11.8538 29.3373C11.1256 29.0633 10.4663 28.6339 9.92125 28.0788C9.36635 27.534 8.93698 26.8744 8.66301 26.1465C8.39339 25.4527 8.20871 24.6595 8.15594 23.4984C8.10231 22.3346 8.08984 21.963 8.08984 19C8.08984 16.037 8.10231 15.6654 8.15565 14.5019C8.20842 13.3405 8.39281 12.5476 8.66243 11.8535C8.9364 11.1256 9.36606 10.466 9.92125 9.92125C10.466 9.36606 11.1256 8.93669 11.8535 8.66272C12.5476 8.3931 13.3405 8.20871 14.5019 8.15565C15.6654 8.1026 16.037 8.08984 19 8.08984C21.963 8.08984 22.3346 8.1026 23.4981 8.15594C24.6595 8.20871 25.4524 8.3931 26.1465 8.66243C26.8744 8.9364 27.534 9.36606 28.079 9.92125C28.6339 10.4663 29.0636 11.1256 29.3373 11.8535C29.6072 12.5476 29.7916 13.3405 29.8446 14.5019C29.8977 15.6654 29.9102 16.037 29.9102 19C29.9102 21.963 29.8977 22.3346 29.8443 23.4981Z"
              fill="#0D0C22"></path>
          </svg>
        </div>

        <div class="icon">

          <a href="https://x.com/1imcris">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM27.6752 14.8142C27.6836 15.0012 27.6877 15.189 27.6877 15.3778C27.6877 21.1405 23.3012 27.7856 15.2795 27.7859H15.2798H15.2795C12.8167 27.7859 10.5249 27.064 8.59488 25.827C8.93611 25.8673 9.28343 25.8873 9.6351 25.8873C11.6784 25.8873 13.5588 25.1903 15.0516 24.0205C13.1425 23.9851 11.5329 22.7243 10.9774 20.9914C11.2433 21.0425 11.5167 21.0703 11.797 21.0703C12.1951 21.0703 12.5807 21.0167 12.9471 20.9166C10.9516 20.5171 9.44839 18.7536 9.44839 16.6418C9.44839 16.6221 9.44839 16.6044 9.44897 16.5862C10.0366 16.9129 10.7087 17.1095 11.4242 17.1315C10.2532 16.3502 9.48347 15.0145 9.48347 13.5014C9.48347 12.7024 9.69946 11.9539 10.074 11.3094C12.2246 13.9482 15.4387 15.6836 19.0632 15.866C18.9884 15.5465 18.9498 15.2137 18.9498 14.8716C18.9498 12.4641 20.903 10.5109 23.3114 10.5109C24.5658 10.5109 25.6988 11.0412 26.4946 11.8889C27.4882 11.6929 28.4211 11.33 29.2639 10.8304C28.9378 11.8483 28.2466 12.7024 27.3461 13.2425C28.2283 13.137 29.0691 12.903 29.8504 12.5557C29.2668 13.4304 28.5267 14.1987 27.6752 14.8142Z"
                fill="#0D0C22"></path>
            </svg></a>

        </div>

        <div class="icon">
          <a>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM13.4788 28.7227H8.85146V14.8011H13.4788V28.7227ZM11.1653 12.9001H11.1351C9.58234 12.9001 8.57806 11.8312 8.57806 10.4953C8.57806 9.1292 9.61307 8.08984 11.196 8.08984C12.779 8.08984 13.7531 9.1292 13.7832 10.4953C13.7832 11.8312 12.779 12.9001 11.1653 12.9001ZM30.1641 28.7227H25.5373V21.275C25.5373 19.4033 24.8673 18.1268 23.1931 18.1268C21.9148 18.1268 21.1535 18.9878 20.8189 19.819C20.6966 20.1165 20.6667 20.5322 20.6667 20.9482V28.7227H16.0397C16.0397 28.7227 16.1003 16.1072 16.0397 14.8011H20.6667V16.7723C21.2816 15.8237 22.3819 14.4744 24.8369 14.4744C27.8813 14.4744 30.1641 16.4641 30.1641 20.7401V28.7227Z"
                fill="#0D0C22"></path>
            </svg>
          </a>

        </div>
      </div>
        </div>
      </footer>
    </div>
  );
}
