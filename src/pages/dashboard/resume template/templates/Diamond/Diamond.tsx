// @ts-ignore
import React, { forwardRef } from 'react';
import "./Diamond.scss"

const Diamond = forwardRef(({ personalInfo, education, languages, certificates, image, skills, experiences }: any, ref: any) => {
  return (
    <div ref={ref} className='diamond-resume'>
      <div className="left">
        <img src={image} alt="" />
        <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
        <div className="line"></div>
        <h2>{personalInfo.profession}</h2>

        <div className="details">
          <h3>Details</h3>
          <p>{personalInfo.address}</p>
          <p>{personalInfo.phone}</p>
          <p>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}>G-MAIL</a>
          </p>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <h5>{skill.name}</h5>
              <div className="bar-container">
                <div className="bar" style={{ width: `${(skill.rating / 5) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills">
          <h3>Languages</h3>
          {languages.map((skill, index) => (
            <div className="skill" key={index}>
              <h5>{skill.name}</h5>
              <div className="bar-container">
                <div className="bar" style={{ width: `${(skill.proficiency / 5) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills">
          <h3>Certificates</h3>
          {certificates.map((skill, index) => (
            <div className="skill" key={index}>
              <h5>{skill.name}, {skill.date}</h5>
              
            </div>
          ))}
        </div>
      </div>

      <div className="right">
        <h1>Profile</h1>
        <p>{personalInfo.profileDesc}</p>

        <h1 className='exp-title'>Employment History</h1>
        {experiences.map((experience, index) => (
          <div className="exp" key={index}>
            <div className="experience">
              <h2>{experience.jobTitle} at {experience.employerName}</h2>
              <h3>{experience.joiningDate} - {experience.endingDate}</h3>
              <p className='desc'>{experience.contribution}</p>
            </div>
          </div>
        ))}

        <h1 className='exp-title'>Education</h1>
        {education.map((edu, index) => (
          <div className="exp" key={index}>
            <div className="experience edu">
              <h2>{edu.degree}</h2>
              <h3>{edu.joiningDate} - {edu.endingDate}</h3>
              <p className='desc'>{edu.contribution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Diamond;
