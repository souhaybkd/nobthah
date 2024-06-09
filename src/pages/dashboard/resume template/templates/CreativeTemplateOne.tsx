// @ts-ignore
import React, { forwardRef } from 'react';
import "./CreativeTemplateOne.scss";

const CreativeTemplateOne = forwardRef(({personalInfo, education, image, skills, experiences}: {personalInfo: any, education: any, image: any, skills: any, experiences: any}, ref: any) => {
  return (
    <div ref={ref} className="resume-template">
      <div className="left-column">
        <div className="profile">
          <img src={image} alt="Profile" />
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>{personalInfo.phone}</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg><a href={`https://mail.google.com/mail/u/0/?fs=1&to=${personalInfo.email}&tf=cm`}>G-MAIL</a></p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg> {personalInfo.city}, {personalInfo.country}</p>
        </div>
        <div className="personal">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div className="education-item" key={index}>
              <h4>{edu.institutionName}</h4>
              <div className="title">
                <h3>{edu.degree}</h3>
                <span>{edu.joiningDate} - {edu.endingDate}</span>
              </div>
              <p>{edu.contribution}</p>
            </div>
          ))}
        </div>
        <div className="interests">
          <h2>Langauges</h2>
          <div className="tags">
            <p>French </p>
            <p>German</p>
            <p>English</p>
          </div>
        </div>
        <div className="connect">
          <h2>Connect</h2>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg> <a href={personalInfo.twitter}>TWITTER PROFILE</a></p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg> <a href={personalInfo.portfolio}>PORTFOLIO</a></p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-business"><path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg><a href={personalInfo.otherProfile}>PROJECTS</a></p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> <a href={personalInfo.linkedin}>LINKEDIN PROFILE</a></p>
        </div>
      </div>
      <div className="right-column">
        <div className="header">
        <h1>{personalInfo.firstName}</h1>
        <h3>{personalInfo.profession}</h3>
        </div>
        <div className="profile-summary">
          <h2>Profile</h2>
          <p>Lorem ipsum dolor sit ametut nihil asperiores adipisci repudiandae doloremque, vero numquam sapiente saepe. Officiis culpa, commodi assumenda facere est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        </div>
        <h2>Skills</h2>

        <div className="skills">
        {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <p>{skill.name}</p>
              <div className="bar-container">
                <div className="bar-complete" style={{ width: `${(skill.rating/5) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="work-experience">
          <h2>Work Experience & Projects</h2>
          {experiences.map((exp, index) => (
            <div className='container' key={index}>
              <h4>{exp.employerName}</h4>
              <div className="title">
                <h3>{exp.jobTitle}</h3>
                <span>{exp.joiningDate} - {exp.endingDate}</span>
              </div>
              <ul>
                <li>{exp.contribution}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default CreativeTemplateOne;
