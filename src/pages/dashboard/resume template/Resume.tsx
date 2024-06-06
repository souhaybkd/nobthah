// @ts-nocheck
import "./resume.scss";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, CalendarDays, Globe, Mail, MapPin, Phone, Trash2, User } from "lucide-react";
import { Rating } from 'react-simple-star-rating'

export default function Resume() {
  const steps = [
    { stepNumber: 1, stepTitle: "STEP 1", stepDescription: "Personal Info" },
    { stepNumber: 2, stepTitle: "STEP 2", stepDescription: "Work History" },
    { stepNumber: 3, stepTitle: "STEP 3", stepDescription: "Education" },
    { stepNumber: 4, stepTitle: "STEP 4", stepDescription: "Your Skills" },
    { stepNumber: 5, stepTitle: "STEP 5", stepDescription: "Achievements" },
  ];
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const [activeStep, setActiveStep] = useState(steps[0].stepNumber);
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([{ name: '', rating: 0 }]);


  function nextStep() {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  }

  function prevStep() {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  }


  function addSkill() {
    setSkills([...skills, { name: '', rating: 0 }]);
  }

  function deleteSkill(index) {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  }

  function handleSkillChange(index, value) {
    const updatedSkills = skills.map((skill, i) => (i === index ? { ...skill, name: value } : skill));
    setSkills(updatedSkills);
  }

  function handleRatingChange(index, rating) {
    const updatedSkills = skills.map((skill, i) => (i === index ? { ...skill, rating } : skill));
    setSkills(updatedSkills);
  }

  function addNewExperience() {
    setExperiences([{}, ...experiences]);
  }

  function deleteExperience(index) {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  }

  function addEducation() {
    setEducation([{}, ...education]);
  }

  function deleteEducation(index) {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  }

  function collectData() {
    const data = {
      personalInfo: {
        firstName: document.getElementById("firstName")?.value,
        profession: document.getElementById("profession")?.value,
        country: document.getElementById("country")?.value,
        city: document.getElementById("city")?.value,
        pinCode: document.getElementById("pinCode")?.value,
        phone: document.getElementById("phone")?.value,
        email: document.getElementById("email")?.value,
        portfolio: document.getElementById("portfolio")?.value,
      },
      experiences: experiences.map((_, index) => ({
        employerName: document.getElementById(`employerName${index}`)?.value,
        jobTitle: document.getElementById(`jobTitle${index}`)?.value,
        contribution: document.getElementById(`contribution${index}`)?.value,
        joiningDate: document.getElementById(`joiningDate${index}`)?.value,
        endingDate: document.getElementById(`endingDate${index}`)?.value,
      })),
      education: education.map((_, index) => ({
        instituteName: document.getElementById(`instituteName${index}`)?.value,
        degreePursued: document.getElementById(`degreePursued${index}`)?.value,
        achievements: document.getElementById(`achievements${index}`)?.value,
        joiningDate: document.getElementById(`joiningDate${index}`)?.value,
        endingDate: document.getElementById(`endingDate${index}`)?.value,
      })),
    };
    console.log(data);
  }

  function returnUI() {
    if (steps.find(step => step.stepNumber === activeStep).stepDescription.toLowerCase() === "personal info") {
      return (
        <div className="form">
          <h2>Personal Info</h2>
          <p>Please provide your name, email address, and phone number.</p>
          <div className="profilePic">
            <div className="left">
            <div className="image-container" onClick={handleClick}>
        {image ? (
          <img src={image} alt="Profile" className="profile-image" />
        ) : (
          <div className="placeholder">Click to upload image</div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
            </div>

            <div className="right">
              <div className="form-group">
                <div className="input-icon">
                  <Globe size={20} />
                  <input type="text" id="portfolio" placeholder="Linkedin Profile URL" />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon">
                  <Globe size={20} />
                  <input type="text" id="portfolio" placeholder="Portfolio Website URL" />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon">
                  <Globe size={20} />
                  <input type="text" id="portfolio" placeholder="Twitter Profile URL" />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon">
                  <Globe size={20} />
                  <input type="text" id="portfolio" placeholder="Other Profile URL" />
                </div>
              </div>
            </div>
          </div>
          <div className="dual">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <div className="input-icon">
                <User size={20} />
                <input type="text" id="firstName" placeholder="Enter Your First Name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="profession">Profession</label>
              <div className="input-icon">
                <Briefcase size={20} />
                <input type="text" id="profession" placeholder="Enter Your Profession" />
              </div>
            </div>
          </div>

          <div className="triple">
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <div className="input-icon">
                <MapPin size={20} />
                <input type="text" id="country" placeholder="eg:- UAE" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <div className="input-icon">
                <MapPin size={20} />
                <input type="text" id="city" placeholder="eg:- Dubai" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="pinCode">Pin Code</label>
              <div className="input-icon">
                <MapPin size={20} />
                <input type="text" id="pinCode" placeholder="eg:- 517001" />
              </div>
            </div>
          </div>
          <div className="dual">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="input-icon">
                <Phone size={20} />
                <input type="text" id="phone" placeholder="Enter Your Phone Number" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-icon">
                <Mail size={20} />
                <input type="text" id="email" placeholder="Enter Your Email" />
              </div>
            </div>
          </div>
      
          <div className="btns">
            <button className="next-button" onClick={prevStep}>Go Back</button>
            <button className="prev-button" onClick={nextStep}>Next</button>
          </div>
        </div>
      );
    } else if (steps.find(step => step.stepNumber === activeStep).stepDescription.toLowerCase() === "work history") {
      return (
        <div className="form">
          <h2>Work History</h2>
          <p className="history-desc">Please provide your work history or experience.</p>
          <div className="history">
            <nav>
              <h2>Experience</h2>
              <svg style={{ cursor: "pointer" }} onClick={addNewExperience} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
            </nav>
            <div className="job-cards">
              {experiences.length > 0 && experiences.map((_, index) => (
                <motion.div
                  className="jobDetails"
                  key={index}
                  initial={{ opacity: 1, scaleY: 0, translateY: -50 }}
                  animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
                  exit={{ opacity: 1, scaleY: 0, translateY: -50 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 0.5,
                    delay: index * 0.1 // Delay each item by index
                  }}
                >
                  <div className="dual">
                    <div className="form-group">
                      <label htmlFor={`employerName${index}`}>Employer Name</label>
                      <div className="input-icon">
                        <User size={20} />
                        <input type="text" id={`employerName${index}`} placeholder="eg:- Google, Microsoft " />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor={`jobTitle${index}`}>Job Title/Role</label>
                      <div className="input-icon">
                        <Briefcase size={20} />
                        <input type="text" id={`jobTitle${index}`} placeholder="Enter Your Job Title" />
                      </div>
                    </div>
                  </div>
                  <textarea name={`contribution${index}`} id={`contribution${index}`} placeholder="Discuss About Your Contribution"></textarea>
                  <div className="dual">
                    <div className="form-group">
                      <label htmlFor={`joiningDate${index}`}>Joining Date</label>
                      <div className="input-icon">
                        <CalendarDays />
                        <input type="text" id={`joiningDate${index}`} placeholder="eg:- 7th April 2020" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor={`endingDate${index}`}>Ending Date</label>
                      <div className="input-icon">
                        <CalendarDays />
                        <input type="text" id={`endingDate${index}`} placeholder="eg:- 17th Feb 2024" />
                      </div>
                    </div>
                  </div>
                  <motion.button
                    className="delete-button"
                    onClick={() => deleteExperience(index)}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  >
                    Delete Experience
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="history-btns btns">
            <button className="next-button" onClick={prevStep}>Go Back</button>
            <button className="prev-button" onClick={nextStep}>Next</button>
          </div>
        </div>
      );
    } else if (steps.find(step => step.stepNumber === activeStep).stepDescription.toLowerCase() === "education") {
      return (
        <div className="form">
          <h2>Your Education</h2>
          <p className="history-desc">Please provide your education or academics</p>
          <div className="history">
            <nav>
              <h2>Education</h2>
              <svg style={{ cursor: "pointer" }} onClick={addEducation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
            </nav>
            {education.length > 0 && education.map((_, index) => (
              <motion.div
                className="jobDetails"
                key={index}
                initial={{ opacity: 0, scaleY: 0, translateY: -50 }}
                animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
                exit={{ opacity: 0, scaleY: 0, translateY: -50 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 0.5,
                  delay: index * 0.1 // Delay each item by index
                }}
              >
                <div className="dual">
                  <div className="form-group">
                    <label htmlFor={`instituteName${index}`}>Institute Name</label>
                    <div className="input-icon">
                      <User size={20} />
                      <input type="text" id={`instituteName${index}`} placeholder="eg:- Stanford University " />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor={`degreePursued${index}`}>Degree Pursued</label>
                    <div className="input-icon">
                      <Briefcase size={20} />
                      <input type="text" id={`degreePursued${index}`} placeholder="eg:- B-tech, PHD" />
                    </div>
                  </div>
                </div>
                <textarea name={`achievements${index}`} id={`achievements${index}`} placeholder="Enter your achievements"></textarea>
                <div className="dual">
                  <div className="form-group">
                    <label htmlFor={`joiningDate${index}`}>Joining Date</label>
                    <div className="input-icon">
                      <CalendarDays />
                      <input type="text" id={`joiningDate${index}`} placeholder="eg:- 7th April 2020" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor={`endingDate${index}`}>Ending Date (Expected)</label>
                    <div className="input-icon">
                      <CalendarDays />
                      <input type="text" id={`endingDate${index}`} placeholder="eg:- 17th Feb 2024" />
                    </div>
                  </div>
                </div>
                <motion.button
                  className="delete-button"
                  onClick={() => deleteEducation(index)}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  Delete Education
                </motion.button>
              </motion.div>
            ))}
          </div>
          <div className="history-btns btns">
            <button className="next-button" onClick={prevStep}>Go Back</button>
            <button className="prev-button" onClick={nextStep}>Next</button>
          </div>
        </div>
      );
    } else if (steps.find(step => step.stepNumber === activeStep).stepDescription.toLowerCase() === "your skills") {
      return (
        <div className="form">
          <h2>Your Skills</h2>
          <p className="history-desc">Please provide your skills & expertise</p>
          <div className="history skills">
            <nav>
              <h2>Skills & Expertise</h2>
              <svg style={{ cursor: "pointer" }} onClick={addSkill} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
            </nav>
            {skills.length > 0 && skills.map((skill, index) => (
              <motion.div
                className="jobDetails"
                key={index}
                initial={{ opacity: 1, scaleY: 0, translateY: -50 }}
                animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
                exit={{ opacity: 1, scaleY: 0, translateY: -50 }}
                transition={{ duration: 0.5 }}
              >

                <div className="form-group">
                  <div className="input-icon">
                    <Briefcase size={20} />
                    <input
                      type="text"
                      id={`skill${index}`}
                      value={skill.name}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      placeholder="Enter Skill"
                    />
                  </div>

                </div>

                <div className="form-group rating">
                  <Rating
                    onClick={(rating) => handleRatingChange(index, rating)}
                    ratingValue={skill.rating}
                    size={20}
                    label
                    showTooltip={true}
                    allowFraction={true}
                    transition
                    fillColor='orange'
                    emptyColor='gray'
                    SVGstorkeWidth={2}
                    SVGstrokeColor="#000"
                    className='foo' // Will remove the inline style if applied
                  />
                </div>
                <button>                  <Trash2 onClick={() => deleteSkill(index)} style={{ cursor: "pointer" }} />
                </button>
              </motion.div>
            ))}
          </div>
          <div className="history-btns btns">
            <button className="next-button" onClick={prevStep}>Go Back</button>
            <button className="prev-button" onClick={nextStep}>Next</button>
          </div>
        </div>
      );
    } else if (steps.find(step => step.stepNumber === activeStep).stepDescription.toLowerCase() === "achievements") {
      return (
        <div className="form">
          <h2>Achievements</h2>
          <p>Please provide your achievements.</p>

          <div className="btns">
            <button className="next-button" onClick={prevStep}>Go Back</button>
            <button className="prev-button" onClick={collectData}>Finish</button>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="resume-form">
      <div className="mainBox">
        <div className="sideBar">
          <div className="steps">
            {steps.map((step) => (
              <div
                className={`step ${activeStep === step.stepNumber ? "active" : ""}`}
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
              >
                <div className="circle">
                  <h1>{step.stepNumber}</h1>
                </div>
                <div>
                  <p>{step.stepTitle}</p>
                  <h2>{step.stepDescription}</h2>
                </div>
                {activeStep === step.stepNumber && (
                  <motion.span
                    layoutId="highlight"
                    className="highlight"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="content">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            {returnUI()}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
