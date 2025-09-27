// @ts-nocheck
import "./resume.scss";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, CalendarDays, Globe, Mail, MapPin, Phone, Trash2, User } from "lucide-react";
import { Rating } from "react-simple-star-rating";
import { useReactToPrint } from "react-to-print";
import Madrid from "./templates/Madrid/Madrid";
import { useNavigate, useParams } from "react-router-dom";
import Berlin from "./templates/Berlin/Berlin";
import Crisp from "./templates/Crisp/Crisp";
import Santiago from "./templates/Santiago/Santiago";
import London from "./templates/London/London";
import Singapore from "./templates/Singapore/Singapore";
import Rome from "./templates/Rome/Rome";
import Diamond from "./templates/Diamond/Diamond";
import Barcelona from "./templates/Barcelona/Barcelona";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { account } from "../../../appwrite/appwrite.config";

export default function Resume() {
  const steps = [
    { stepNumber: 1, stepTitle: "الخطوة 1", stepDescription: "المعلومات الشخصية" },
    { stepNumber: 2, stepTitle: "الخطوة 2", stepDescription: "الخبرات العملية" },
    { stepNumber: 3, stepTitle: "الخطوة 3", stepDescription: "التعليم" },
    { stepNumber: 4, stepTitle: "الخطوة 4", stepDescription: "الشهادات" },
    { stepNumber: 5, stepTitle: "الخطوة 5", stepDescription: "مهاراتك" },
    { stepNumber: 6, stepTitle: "الخطوة 6", stepDescription: "الإتمام" },
  ];

  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null);

  const resumeTemplate = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeTemplate.current,
    documentTitle: "السيرة الذاتية",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
  });
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAuthStatus() {
      try {
        const user = await account.get();
        setUser(user);
      } catch (error) {
        console.log("No user logged in", error);
        navigate("/login");
      }
    }
    getAuthStatus();
  }, [navigate]);

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
    fileInputRef.current?.click();
  };

  const [activeStep, setActiveStep] = useState(steps[0].stepNumber);
  const [experiences, setExperiences] = useState([
    { employerName: "", jobTitle: "", contribution: "", joiningDate: "", endingDate: "" },
  ]);
  const [skills, setSkills] = useState([{ name: "", rating: 0 }]);
  const [languages, setLanguages] = useState([{ name: "", proficiency: 0 }]);
  const [certificates, setCertificates] = useState([{ name: "", date: "" }]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    profession: "",
    address: "",
    phone: "",
    email: "",
    profileDesc: "",
  });

  const [education, setEducation] = useState([
    { institutionName: "", degree: "", contribution: "", joiningDate: "", endingDate: "" },
  ]);

  useEffect(() => {
    const savedData = localStorage.getItem(`resume-${id}`);
    console.log(savedData);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setPersonalInfo(
        parsedData.personalInfo || {
          firstName: "",
          profession: "",
          address: "",
          phone: "",
          email: "",
          profileDesc: "",
        }
      );
      setExperiences(
        parsedData.experiences || [
          { employerName: "", jobTitle: "", contribution: "", joiningDate: "", endingDate: "" },
        ]
      );
      setSkills(parsedData.skills || [{ name: "", rating: 0 }]);
      setLanguages(parsedData.languages || [{ name: "", proficiency: 0 }]);
      setCertificates(parsedData.certificates || [{ name: "", date: "" }]);
      setEducation(
        parsedData.education || [
          { institutionName: "", degree: "", contribution: "", joiningDate: "", endingDate: "" },
        ]
      );
    }
    setDataLoaded(true);
  }, [id]);

  useEffect(() => {
    if (dataLoaded) {
      const dataToSave = {
        personalInfo,
        experiences,
        skills,
        languages,
        certificates,
        education,
      };
      localStorage.setItem(`resume-${id}`, JSON.stringify(dataToSave));
      console.log("SAVED");
    }
  }, [personalInfo, experiences, skills, languages, certificates, education, id, dataLoaded]);

  // لغات
  function addLanguage() {
    setLanguages([...languages, { name: "", proficiency: 0 }]);
  }
  function deleteLanguage(index) {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
  }
  function handleLanguageChange(index, field, value) {
    const updated = languages.map((lang, i) => (i === index ? { ...lang, [field]: value } : lang));
    setLanguages(updated);
  }
  function handleProficiencyChange(index, proficiency) {
    const updated = languages.map((lang, i) => (i === index ? { ...lang, proficiency } : lang));
    setLanguages(updated);
  }

  // تعليم
  function addEducation() {
    setEducation([
      ...education,
      { institutionName: "", degree: "", contribution: "", joiningDate: "", endingDate: "" },
    ]);
  }
  function deleteEducation(index) {
    const updated = education.filter((_, i) => i !== index);
    setEducation(updated);
  }
  function handleEducationChange(index, field, value) {
    const updated = education.map((edu, i) => (i === index ? { ...edu, [field]: value } : edu));
    setEducation(updated);
  }

  // معلومات شخصية
  const handlePersonalInfoChange = (e) => {
    const { id, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [id]: value }));
  };

  // تنقّل الخطوات
  function nextStep() {
    if (activeStep < steps.length) setActiveStep(activeStep + 1);
  }
  function prevStep() {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  }

   // مهارات
   function addSkill() {
     setSkills([...skills, { name: "", rating: 0 }]);
   }
   function deleteSkill(index) {
     const updated = skills.filter((_, i) => i !== index);
     setSkills(updated);
   }
   function handleSkillChange(index, value) {
     const updated = skills.map((s, i) => (i === index ? { ...s, name: value } : s));
     setSkills(updated);
   }
   function handleRatingChange(index, rating) {
     const updated = skills.map((s, i) => (i === index ? { ...s, rating } : s));
     setSkills(updated);
   }

   // شهادات
   function addCertificates() {
     setCertificates([...certificates, { name: "", date: "" }]);
   }
   function deleteCertificates(index) {
     const updated = certificates.filter((_, i) => i !== index);
     setCertificates(updated);
   }
   function handleCertificatesChange(index, field, value) {
     const updated = certificates.map((cert, i) =>
       i === index ? { ...cert, [field]: value } : cert
     );
     setCertificates(updated);
   }

  // خبرات
  function addNewExperience() {
    setExperiences([
      ...experiences,
      { employerName: "", jobTitle: "", contribution: "", joiningDate: "", endingDate: "" },
    ]);
  }
  function handleExperienceChange(index, field, value) {
    const updated = experiences.map((exp, i) => (i === index ? { ...exp, [field]: value } : exp));
    setExperiences(updated);
  }
  function deleteExperience(index) {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
  }

  // تحميل/دفع
  const downloadResume = async () => {
    const lemonSqueezyConfig = {
      API_KEY:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiJiMzFkNjU3MjNmYzk4NTcxMGJkZjE2OGU2NTZlMTllODU0ZTdjZDE3YmFkY2NhMDNkODM1ZDdjN2FjYzNmZjhmNGZmN2EwYTUxNjBjYzQyZSIsImlhdCI6MTcxOTIzNDgwNi4wMjkxNzksIm5iZiI6MTcxOTIzNDgwNi4wMjkxODIsImV4cCI6MjAzNDc2NzYwNi4wMDA2NzQsInN1YiI6IjIyOTI3MDEiLCJzY29wZXMiOltdfQ.zHxwQFCumLAlaWTJQoX_iKb78NZ29OCS6_aH_HrduTpRVBWXIf_TPaoSAj-s9VkTgyMhch1RAYISRiNu4AaAcBq8wu-0Ayq3KA6wGWJWKbOAhClaXWqLIE8jOWK3NefNWuqgTDvmxov4MmUkGq_ij23Wp02nBVcXOyHz_SACevrMoyVREUSYP9NrN6eqTiQ-2qcc6Kwa_IazhGRtKSYHHgD1aov5ywhxv-x8SO_7eRjI1dpshdMZqZL-sFYtLl-dRz-6WLl_dAaCuUZK_G2sTwNwOCQFL0j-hwKuJl-lH-YAzA5GkjsRuARo-mfHdQAJFljWa1m5ZMpOxUGDPiO91svVO5NyyICBwz_whKeClec8veSyQNlswiLN5Nh_rSNe2LH74nXlO94C1a1cXR0Yi45G0JJsPEOHf8bcnzV8wGX1M-HKicI6oWvECyYLd9IHr3yVBUyNS6ep2FMQL2BqNeklo8fpoibmpsmQ9fT1EAln5QUmlEzT5FpOvTTS7J-Y",
      URL: "https://api.lemonsqueezy.com",
    };

    const headers = {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: "Bearer " + lemonSqueezyConfig.API_KEY,
    };

    try {
      console.log("Checking user labels...");
      const hasLabel = user?.labels?.some((item) => item === id);

      if (hasLabel) {
        console.log("Label found, printing resume...");
        resumeTemplate.current.style.display = "flex";
        handlePrint();
        resumeTemplate.current.style.display = "none";
      } else {
        console.log("Label not found, but payment disabled for testing - showing resume directly...");
        
        // TEMPORARY: Skip payment for testing - directly show resume
        toast.success("تم تحميل السيرة الذاتية للاختبار!");
        
        // Display resume template and trigger print
        resumeTemplate.current.style.display = "flex";
        handlePrint();
        resumeTemplate.current.style.display = "none";
        
        /* PAYMENT CODE DISABLED FOR TESTING
        const fetchPromise = fetch("https://api.lemonsqueezy.com/v1/checkouts", {
          method: "POST",
          headers,
          body: JSON.stringify({
            data: {
              type: "checkouts",
              attributes: {
                checkout_data: {
                  // email: user.email,
                  custom: { resumeId: id },
                },
              },
              relationships: {
                store: { data: { type: "stores", id: "96692" } },
                variant: { data: { type: "variants", id: "427561" } },
              },
            },
          }),
        });

        toast
          .promise(fetchPromise, {
            pending: "جاري معالجة طلب الدفع...",
            success: "سيتم فتح صفحة الدفع...",
            error: "خطأ في الخادم. يرجى المحاولة مرة أخرى.",
          })
          .then(async (response) => {
            const checkout = await response.json();
            console.log("Checkout created:", checkout);
            window.location.href = checkout.data.attributes.url;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        */
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function returnUI() {
    const current = steps.find((s) => s.stepNumber === activeStep)?.stepDescription;

    // المعلومات الشخصية
    if (current === "المعلومات الشخصية" || current === "personal info") {
      return (
        <div className="form" dir="rtl">
          <h2>المعلومات الشخصية</h2>
          <p>يرجى إدخال اسمك، بريدك الإلكتروني، رقم هاتفك، واللغات التي تتقنها.</p>

          <div className="profilePic">
            <div className="left">
              <div className="image-container" onClick={handleClick}>
                {image ? (
                  <img src={image} alt="الصورة الشخصية" className="profile-image" />
                ) : (
                  <div className="placeholder">اضغط لرفع صورة</div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageUpload}
                style={{ display: "none" }}
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
                    placeholder="أدخل اسمك الكامل"
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
                    placeholder="أدخل المسمى الوظيفي"
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
                    placeholder="أدخل رقم هاتفك"
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
                    placeholder="أدخل بريدك الإلكتروني"
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
                placeholder="أدخل عنوانك"
              />
            </div>
          </div>

          <textarea
            placeholder="اكتب نبذة تعريفية موجزة عنك"
            value={personalInfo.profileDesc}
            id="profileDesc"
            onChange={handlePersonalInfoChange}
          ></textarea>

          <div className="form-group languages history skills">
            <nav>
              <h4>أضف لغة</h4>
              <svg
                style={{ cursor: "pointer" }}
                onClick={addLanguage}
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

            <AnimatePresence>
              {languages.length > 0 &&
                languages.map((language, index) => (
                  <motion.div
                    className="jobDetails"
                    key={index}
                    initial={{ opacity: 0, scaleY: 0, translateY: -50 }}
                    animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
                    exit={{
                      opacity: 0,
                      translateY: 50,
                      transition: { duration: 0.5, ease: "easeInOut" },
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
                        <Globe size={20} />
                        <input
                          type="text"
                          id={`languageName${index}`}
                          placeholder="مثال: العربية، الإنجليزية"
                          value={language.name}
                          onChange={(e) => handleLanguageChange(index, "name", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <Rating
                        onClick={(rating) => handleProficiencyChange(index, rating)}
                        ratingValue={language.proficiency}
                        size={20}
                        label
                        showTooltip={true}
                        allowFraction={true}
                        transition
                        fillColor="orange"
                        emptyColor="gray"
                        SVGstorkeWidth={2}
                        SVGstrokeColor="#000"
                      />
                    </div>

                    <button onClick={() => deleteLanguage(index)} style={{ cursor: "pointer" }}>
                      <Trash2 />
                    </button>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="btns">
            <button className="next-button" onClick={prevStep}>
              رجوع
            </button>
            <button className="prev-button" onClick={nextStep}>
              التالي
            </button>
          </div>
        </div>
      );
    }

    // الخبرات العملية
    if (current === "الخبرات العملية" || current === "work history") {
      return (
        <div className="form" dir="rtl">
          <h2>الخبرات العملية</h2>
          <p className="history-desc">يرجى تزويدنا بسجل خبراتك العملية.</p>

          <div className="history">
            <nav>
              <h2>الخبرة</h2>
              <svg
                style={{ cursor: "pointer" }}
                onClick={addNewExperience}
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
                {experiences.length > 0 &&
                  experiences.map((_, index) => (
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                          <label htmlFor={`employerName${index}`}>اسم جهة العمل</label>
                          <div className="input-icon">
                            <input
                              type="text"
                              id={`employerName${index}`}
                              placeholder="مثال: Google، Microsoft"
                              value={experiences[index].employerName}
                              onChange={(e) =>
                                handleExperienceChange(index, "employerName", e.target.value)
                              }
                            />
                            <User size={20} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor={`jobTitle${index}`}>المسمى/الدور الوظيفي</label>
                          <div className="input-icon">
                            <Briefcase size={20} />
                            <input
                              type="text"
                              id={`jobTitle${index}`}
                              placeholder="أدخل مسماك الوظيفي"
                              value={experiences[index].jobTitle}
                              onChange={(e) =>
                                handleExperienceChange(index, "jobTitle", e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <textarea
                        name={`contribution${index}`}
                        id={`contribution${index}`}
                        placeholder="صف مساهماتك وأبرز إنجازاتك"
                        value={experiences[index].contribution}
                        onChange={(e) =>
                          handleExperienceChange(index, "contribution", e.target.value)
                        }
                      ></textarea>

                      <div className="dual">
                        <div className="form-group">
                          <label htmlFor={`joiningDate${index}`}>تاريخ البدء</label>
                          <div className="input-icon">
                            <CalendarDays />
                            <input
                              type="text"
                              id={`joiningDate${index}`}
                              placeholder="مثال: 7 أبريل 2020"
                              value={experiences[index].joiningDate}
                              onChange={(e) =>
                                handleExperienceChange(index, "joiningDate", e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor={`endingDate${index}`}>تاريخ الانتهاء</label>
                          <div className="input-icon">
                            <CalendarDays />
                            <input
                              type="text"
                              id={`endingDate${index}`}
                              placeholder="مثال: 7 أبريل 2021"
                              value={experiences[index].endingDate}
                              onChange={(e) =>
                                handleExperienceChange(index, "endingDate", e.target.value)
                              }
                            />
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
                        حذف الخبرة
                      </motion.button>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="history-btns btns">
            <button className="next-button" onClick={prevStep}>
              رجوع
            </button>
            <button className="prev-button" onClick={nextStep}>
              التالي
            </button>
          </div>
        </div>
      );
    }

    // التعليم
    if (current === "التعليم" || current === "education") {
      return (
        <div className="form" dir="rtl">
          <h2>تعليمك</h2>
          <p className="history-desc">يرجى تزويدنا بمعلوماتك الأكاديمية.</p>

          <div className="history">
            <nav>
              <h2>التعليم</h2>
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                          <label htmlFor={`instituteName${index}`}>اسم المؤسسة</label>
                          <div className="input-icon">
                            <User size={20} />
                            <input
                              type="text"
                              id={`instituteName${index}`}
                              placeholder="مثال: Stanford University"
                              value={edu.institutionName}
                              onChange={(e) =>
                                handleEducationChange(index, "institutionName", e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor={`degreePursued${index}`}>الدرجة العلمية</label>
                          <div className="input-icon">
                            <Briefcase size={20} />
                            <input
                              type="text"
                              id={`degreePursued${index}`}
                              placeholder="مثال: بكالوريوس، ماجستير، دكتوراه"
                              value={edu.degree}
                              onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <textarea
                        name={`finalize${index}`}
                        id={`finalize${index}`}
                        placeholder="أدخل إنجازاتك/مشاريعك"
                        value={edu.contribution}
                        onChange={(e) =>
                          handleEducationChange(index, "contribution", e.target.value)
                        }
                      ></textarea>

                      <div className="dual">
                        <div className="form-group">
                          <label htmlFor={`joiningDateEdu${index}`}>تاريخ البدء</label>
                          <div className="input-icon">
                            <CalendarDays />
                            <input
                              type="text"
                              id={`joiningDateEdu${index}`}
                              placeholder="مثال: 7 أبريل 2020"
                              value={edu.joiningDate}
                              onChange={(e) =>
                                handleEducationChange(index, "joiningDate", e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor={`endingDateEdu${index}`}>تاريخ الانتهاء (المتوقع)</label>
                          <div className="input-icon">
                            <CalendarDays />
                            <input
                              type="text"
                              id={`endingDateEdu${index}`}
                              placeholder="مثال: 17 فبراير 2024"
                              value={edu.endingDate}
                              onChange={(e) =>
                                handleEducationChange(index, "endingDate", e.target.value)
                              }
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
                        حذف المؤهل
                      </motion.button>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="history-btns btns">
            <button className="next-button" onClick={prevStep}>
              رجوع
            </button>
            <button className="prev-button" onClick={nextStep}>
              التالي
            </button>
          </div>
        </div>
      );
    }

    // مهاراتك
    if (current === "مهاراتك" || current === "your skills") {
      return (
        <div className="form" dir="rtl">
          <h2>مهاراتك</h2>
          <p className="history-desc">يرجى إضافة مهاراتك وخبراتك.</p>

          <div className="history skills">
            <nav>
              <h2>المهارات والخبرات</h2>
              <svg
                style={{ cursor: "pointer" }}
                onClick={addSkill}
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

            <AnimatePresence>
              {skills.length > 0 &&
                skills.map((skill, index) => (
                  <motion.div
                    className="jobDetails"
                    key={index}
                    initial={{ opacity: 0, scaleY: 0, translateY: -50 }}
                    animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
                    exit={{
                      opacity: 0,
                      translateY: 50,
                      transition: { duration: 0.5, ease: "easeInOut" },
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
                          placeholder="أدخل مهارة"
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
                          fillColor="orange"
                          emptyColor="gray"
                          SVGstorkeWidth={2}
                          SVGstrokeColor="#000"
                          className="foo"
                        />
                      </div>
                      <button>
                        <Trash2 onClick={() => deleteSkill(index)} style={{ cursor: "pointer" }} />
                      </button>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="history-btns btns">
            <button className="next-button" onClick={prevStep}>
              رجوع
            </button>
            <button className="prev-button" onClick={nextStep}>
              التالي
            </button>
          </div>
        </div>
      );
    }

    // الشهادات
    if (current === "الشهادات" || current === "certifications") {
      return (
        <div className="form" dir="rtl">
          <h2>شهاداتك</h2>
          <p className="history-desc">يرجى إضافة الشهادات التي حصلت عليها.</p>

          <div className="history skills">
            <nav>
              <h2>الشهادات</h2>
              <svg
                style={{ cursor: "pointer" }}
                onClick={addCertificates}
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

            <AnimatePresence>
              {certificates.length > 0 &&
                certificates.map((cert, index) => (
                  <motion.div
                    className="jobDetails"
                    key={index}
                    initial={{ opacity: 0, scaleY: 0, translateY: -50 }}
                    animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
                    exit={{
                      opacity: 0,
                      translateY: 50,
                      transition: { duration: 0.5, ease: "easeInOut" },
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
                          id={`certName${index}`}
                          value={cert.name}
                          onChange={(e) => handleCertificatesChange(index, "name", e.target.value)}
                          placeholder="اسم الشهادة"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-icon">
                        <CalendarDays size={20} />
                        <input
                          type="text"
                          id={`certDate${index}`}
                          value={cert.date}
                          onChange={(e) => handleCertificatesChange(index, "date", e.target.value)}
                          placeholder="تاريخ الإصدار"
                        />
                      </div>
                    </div>

                    <button>
                      <Trash2
                        onClick={() => deleteCertificates(index)}
                        style={{ cursor: "pointer" }}
                      />
                    </button>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="history-btns btns">
            <button className="next-button" onClick={prevStep}>
              رجوع
            </button>
            <button className="prev-button" onClick={nextStep}>
              التالي
            </button>
          </div>
        </div>
      );
    }

    // الإتمام (المعاينة والتنزيل)
    if (current === "الإتمام" || current === "finalize") {
      function getTemplate(id) {
        if (id === "madrid") {
          return (
            <Madrid
              languages={languages}
              certificates={certificates}
              image={image}
              personalInfo={personalInfo}
              education={education}
              skills={skills}
              experiences={experiences}
            />
          );
        } else if (id === "berlin") {
          return (
            <Berlin
              languages={languages}
              certificates={certificates}
              image={image}
              personalInfo={personalInfo}
              education={education}
              skills={skills}
              experiences={experiences}
            />
          );
        } else if (id === "crisp") {
          return (
            <Crisp
              languages={languages}
              certificates={certificates}
              image={image}
              personalInfo={personalInfo}
              education={education}
              skills={skills}
              experiences={experiences}
            />
          );
        } else if (id === "santiago") {
          return (
            <Santiago
              languages={languages}
              certificates={certificates}
              image={image}
              personalInfo={personalInfo}
              education={education}
              skills={skills}
              experiences={experiences}
            />
          );
        } else if (id === "london") {
          return (
            <London
              languages={languages}
              certificates={certificates}
              image={image}
              personalInfo={personalInfo}
              education={education}
              skills={skills}
              experiences={experiences}
            />
          );
        } else if (id === "singapore") {
          return (
            <Singapore
              languages={languages}
              certificates={certificates}
              image={image}
              personalInfo={personalInfo}
              education={education}
              skills={skills}
              experiences={experiences}
            />
          );
        } else if (id === "rome") {
          return (
            <Rome
              languages={languages}
              certificates={certificates}
              image={image}
              personalInfo={personalInfo}
              education={education}
              skills={skills}
              experiences={experiences}
            />
          );
        } else if (id === "diamond") {
          return (
            <Diamond
              languages={languages}
              certificates={certificates}
              image={image}
              personalInfo={personalInfo}
              education={education}
              skills={skills}
              experiences={experiences}
            />
          );
        } else if (id === "barcelona") {
          return (
            <Barcelona
              languages={languages}
              certificates={certificates}
              image={image}
              personalInfo={personalInfo}
              education={education}
              skills={skills}
              experiences={experiences}
            />
          );
        }
        return null;
      }

      return (
        <div className="form resume-final-look" dir="rtl">
          <h2>حمّل سيرتك الذاتية</h2>
          <p className="history-desc">قم بتحميل سيرتك الذاتية المخصصة.</p>

          <div className="popup">
            <div ref={resumeTemplate} className="resumeTemplate">
              {getTemplate(id)}
            </div>
          </div>

          <div className="btns">
            <button className="next-button" onClick={prevStep}>
              رجوع
            </button>
            <button className="prev-button" onClick={downloadResume}>
              تنزيل السيرة الذاتية
            </button>
          </div>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="resume-form" dir="rtl">
      <div className="mainBox">
        <div className="sideBar">
          {/* English CV Notice */}
          <div className="english-cv-notice">
            <div className="notice-icon">
              <Globe size={16} />
            </div>
            <div className="notice-text">
              <p>للحصول على سيرة ذاتية باللغة الإنجليزية، أدخل المعلومات بالإنجليزية</p>
              <small>Enter information in English for English CV</small>
            </div>
          </div>
          
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

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        style={{ width: "500px" }}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
