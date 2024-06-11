// @ts-nocheck
import "./resume.scss";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, CalendarDays, Globe, Mail, MapPin, Phone, Trash2, User } from "lucide-react";
import { Rating } from 'react-simple-star-rating'
import { useReactToPrint } from 'react-to-print';
import Madrid from "./templates/Madrid/Madrid";
import { useParams } from 'react-router-dom';
import TextEditor from "../tiptapEditor/TextEditor";
import Berlin from "./templates/Berlin/Berlin";
import Crisp from "./templates/Crisp/Crisp";
import Santiago from "./templates/Santiago/Santiago";

export default function Resume() {
  const steps = [
    { stepNumber: 1, stepTitle: "STEP 1", stepDescription: "Personal Info" },
    { stepNumber: 2, stepTitle: "STEP 2", stepDescription: "Work History" },
    { stepNumber: 3, stepTitle: "STEP 3", stepDescription: "Education" },
    { stepNumber: 4, stepTitle: "STEP 4", stepDescription: "Your Skills" },
    { stepNumber: 5, stepTitle: "STEP 5", stepDescription: "Finalize" },
  ];
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const resumeTemplate = useRef()
  const handlePrint = useReactToPrint({
    content: () => resumeTemplate.current,
    documentTitle: "RESUME",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true
  });
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
  const [experiences, setExperiences] = useState([{ employerName: '', jobTitle: '', contribution: '', joiningDate: '', endingDate: '' }]);
  const [skills, setSkills] = useState([{ name: '', rating: 0 }]);

  // Personal Info state
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    profession: '',
    address: '',
    phone: '',
    email: '',
    profileDesc: ""
  });

  const [education, setEducation] = useState([{ institutionName: '', degree: '', contribution: '', joiningDate: '', endingDate: '' }]);

  function addEducation() {
    setEducation([...education, { institutionName: '', degree: '', contribution: '', joiningDate: '', endingDate: '' }]);
  }

  function deleteEducation(index) {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  }

  function handleEducationChange(index, field, value) {
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setEducation(updatedEducation);
  }

  const handlePersonalInfoChange = (e) => {
    const { id, value } = e.target;
    setPersonalInfo(prevState => ({ ...prevState, [id]: value }));
  };

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
    setExperiences([...experiences, { employerName: '', jobTitle: '', contribution: '', joiningDate: '', endingDate: '' }]);
  }

  function handleExperienceChange(index, field, value) {
    const updatedExperiences = experiences.map((experience, i) =>
      i === index ? { ...experience, [field]: value } : experience
    );
    setExperiences(updatedExperiences);
  }

  function deleteExperience(index) {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  }

  function collectData() {
    const data = {
      personalInfo,
      experiences,
      education,
      skills
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
                  <User size={20} />
                  <input
                    type="text"
                    id="firstName"
                    value={personalInfo.firstName}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon">
                  <Briefcase size={20} />
                  <input
                    type="text"
                    id="profession"
                    value={personalInfo.profession}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter Job Title"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon">
                  <Phone size={20} />
                  <input
                    type="text"
                    id="phone"
                    value={personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter Your Phone Number"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon">
                  <Mail size={20} />
                  <input
                    type="text"
                    id="email"
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="form-group">
            <div className="input-icon">
              <MapPin size={20} />
              <input
                type="text"
                id="address"
                value={personalInfo.address}
                onChange={handlePersonalInfoChange}
                placeholder="Enter Your Address"
              />
            </div>
          </div>

          <textarea placeholder="Write a profile description" value={personalInfo.profileDesc}
            type="text"
            id="profileDesc"
            onChange={handlePersonalInfoChange}
          ></textarea>





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
              <AnimatePresence>

                {experiences.length > 0 && experiences.map((_, index) => (
                  <motion.div
                    className="jobDetails"
                    key={index}
                    initial={{ opacity: 0, height: 0, scaleY: 0, translateY: -50 }}
                    animate={{ opacity: 1, scaleY: 1, height: "auto", translateY: 0 }}
                    exit={{
                      opacity: 0,
                      scaleY: 0.5,
                      translateY: 50,
                      height: 0,
                      transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                    style={{ overflow: "hidden" }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <div className="dual">
                      <div className="form-group">
                        <label htmlFor={`employerName${index}`}>Employer Name</label>
                        <div className="input-icon">
                          <input
                            type="text"
                            id={`employerName${index}`}
                            placeholder="eg:- Google, Microsoft"
                            value={experiences[index].employerName}
                            onChange={(e) => handleExperienceChange(index, 'employerName', e.target.value)}
                          />              <User size={20} />

                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor={`jobTitle${index}`}>Job Title/Role</label>
                        <div className="input-icon">
                          <Briefcase size={20} />
                          <input
                            type="text"
                            placeholder="Enter Your Job Title"
                            value={experiences[index].jobTitle}
                            onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <textarea name={`contribution${index}`} id={`contribution${index}`} placeholder="Discuss About Your Contribution" value={experiences[index].joiningDate}
                      value={experiences[index].contribution}
                      onChange={(e) => handleExperienceChange(index, 'contribution', e.target.value)}></textarea>
                    <div className="dual">
                      <div className="form-group">
                        <label htmlFor={`joiningDate${index}`}>Joining Date</label>
                        <div className="input-icon">
                          <CalendarDays />
                          <input
                            type="text"
                            id={`employerName${index}`}
                            placeholder="eg:- 7th April 2020" value={experiences[index].joiningDate}
                            onChange={(e) => handleExperienceChange(index, 'joiningDate', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor={`endingDate${index}`}>Ending Date</label>
                        <div className="input-icon">
                          <CalendarDays />
                          <input
                            type="text"
                            id={`employerName${index}`}
                            placeholder="eg:- 7th April 2020" value={experiences[index].endingDate}
                            onChange={(e) => handleExperienceChange(index, 'endingDate', e.target.value)}
                          />                      </div>
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
              </AnimatePresence>
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
              <svg
                style={{ cursor: "pointer" }}
                onClick={addEducation}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-plus"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </nav>
            <div className="job-cards">
              <AnimatePresence>

                {education.length > 0 &&
                  education.map((edu, index) => (
                    <motion.div
                      className="jobDetails"
                      key={index}
                      initial={{ opacity: 0, height: 0, scaleY: 0, translateY: -50 }}
                      animate={{ opacity: 1, scaleY: 1, height: "auto", translateY: 0 }}
                      exit={{
                        opacity: 0,
                        scaleY: 0.5,
                        translateY: 50,
                        height: 0,
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }}
                      style={{ overflow: "hidden" }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                    >
                      <div className="dual">
                        <div className="form-group">
                          <label htmlFor={`instituteName${index}`}>Institute Name</label>
                          <div className="input-icon">
                            <User size={20} />
                            <input
                              type="text"
                              id={`instituteName${index}`}
                              placeholder="eg:- Stanford University"
                              value={edu.institutionName}
                              onChange={(e) => handleEducationChange(index, "institutionName", e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor={`degreePursued${index}`}>Degree Pursued</label>
                          <div className="input-icon">
                            <Briefcase size={20} />
                            <input
                              type="text"
                              id={`degreePursued${index}`}
                              placeholder="eg:- B-tech, PHD"
                              value={edu.degree}
                              onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <textarea
                        name={`finalize${index}`}
                        id={`finalize${index}`}
                        placeholder="Enter your Achievements"
                        value={edu.contribution}
                        onChange={(e) => handleEducationChange(index, "contribution", e.target.value)}
                      ></textarea>
                      <div className="dual">
                        <div className="form-group">
                          <label htmlFor={`joiningDate${index}`}>Joining Date</label>
                          <div className="input-icon">
                            <CalendarDays />
                            <input
                              type="text"
                              id={`joiningDate${index}`}
                              placeholder="eg:- 7th April 2020"
                              value={edu.joiningDate}
                              onChange={(e) => handleEducationChange(index, "joiningDate", e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor={`endingDate${index}`}>Ending Date (Expected)</label>
                          <div className="input-icon">
                            <CalendarDays />
                            <input
                              type="text"
                              id={`endingDate${index}`}
                              placeholder="eg:- 17th Feb 2024"
                              value={edu.endingDate}
                              onChange={(e) => handleEducationChange(index, "endingDate", e.target.value)}
                            />
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
              </AnimatePresence>

            </div>
          </div>
          <div className="history-btns btns">
            <button className="next-button" onClick={prevStep}>Go Back</button>
            <button className="prev-button" onClick={nextStep}>Next</button>
          </div>
        </div>
      );
    }

    else if (steps.find(step => step.stepNumber === activeStep).stepDescription.toLowerCase() === "your skills") {
      return (
        <div className="form">
          <h2>Your Skills</h2>
          <p className="history-desc">Please provide your skills & expertise</p>
          <div className="history skills">
            <nav>
              <h2>Skills & Expertise</h2>
              <svg style={{ cursor: "pointer" }} onClick={addSkill} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
            </nav>
            <AnimatePresence>
              {skills.length > 0 && skills.map((skill, index) => (
                <motion.div
                  className="jobDetails"
                  key={index}
                  initial={{ opacity: 0, scaleY: 0, translateY: -50 }}
                  animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
                  exit={{
                    opacity: 0,
                    translateY: 50,
                    transition: { duration: 0.5, ease: "easeInOut" }
                  }}
                  style={{ overflow: "hidden" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
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

                  <div className="flexy">
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
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="history-btns btns">
            <button className="next-button" onClick={prevStep}>Go Back</button>
            <button className="prev-button" onClick={nextStep}>Next</button>
          </div>
        </div>
      );
    } else if (steps.find(step => step.stepNumber === activeStep).stepDescription.toLowerCase() === "finalize") {
      function getTemplate(id: string) {
        if (id === "madrid") {
          return <Madrid image={image} personalInfo={personalInfo} education={education} skills={skills} experiences={experiences}></Madrid>
        } else if (id === "berlin") {
          return <Berlin image={image} personalInfo={personalInfo} education={education} skills={skills} experiences={experiences}></Berlin>
        } else if (id === "crisp") {
          return <Crisp image={image} personalInfo={personalInfo} education={education} skills={skills} experiences={experiences}></Crisp>
        } else if (id === "santiago") {
          return <Santiago image={image} personalInfo={personalInfo} education={education} skills={skills} experiences={experiences}/>
        }
      }
      return (
        <div className="form resume-final-look">
          <h2>Dowload Your Resume</h2>
          <p className="history-desc">Download Your Customized Resume</p>
          <div ref={resumeTemplate} className="resumeTemplate">
            {
              getTemplate(id)
            }
          </div>


          <div className="btns">
            <button className="next-button" onClick={prevStep}>Go Back</button>
            <button className="prev-button" onClick={() => {
              resumeTemplate.current.style.display = "flex"
              handlePrint()
              resumeTemplate.current.style.display = "none"

            }}>Download The Resume</button>
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


