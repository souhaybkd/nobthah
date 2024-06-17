// @ts-ignore
import React, { forwardRef } from 'react';
import "./Barcelona.scss"
import { BookMarked, Languages, Puzzle, User } from 'lucide-react';

const Barcelona = forwardRef(({ personalInfo, languages, certificates, education, image, skills, experiences }: any, ref: any) => {
  return (
    <div ref={ref} className='barcelona-resume'>
      <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
      <h2>{personalInfo.profession}</h2>
      <div className="grid">
        <div className="el">
          <p><b>Phone: </b> <span>{personalInfo.phone}</span></p>
        </div>
        <div className="el">
          <p><b>Email: </b> <span>{personalInfo.email}</span></p>
        </div>
        <div className="el">
          <p><b>Address: </b> <span>{personalInfo.address}</span></p>
        </div>
        
      </div>

      <div className="desc">
        <p>{personalInfo.profileDesc}</p>
      </div>

      <h3>Experience</h3>
      {experiences.map((experience, index) => (
        <div className="exp" key={index}>
          <div className="left">
            <h4>{experience.joiningDate} - {experience.endingDate}</h4>
          </div>
          <div className="right">
            <h2>{experience.jobTitle} at {experience.employerName}</h2>
            <p>{experience.contribution}</p>
          </div>
        </div>
      ))}

      <h3>Education</h3>
      {education.map((edu, index) => (
        <div className="exp" key={index}>
          <div className="left">
            <h4>{edu.joiningDate} - {edu.endingDate}</h4>
          </div>
          <div className="right">
            <h2>{edu.degree}</h2>
            <p>{edu.contribution}</p>
          </div>
        </div>
      ))}

      <h3>Certificates</h3>
      <div className="new-grid">


        {certificates.map((skill, index) => (
          <div className="skill certificate" key={index}>
            <h4>{skill.name}, {skill.date}</h4>
          </div>
        ))}

      </div>

      <h3>Core Skills</h3>
      <div className="new-grid">


        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <h4>{skill.name}</h4>
            <div className="rating-box">
              {[...Array(5)].map((_, i) => {
                return (<div key={i} className={`box ${i < skill.rating ? 'filled' : ''}`}></div>)
              })}
            </div>
          </div>
        ))}

      </div>


      <h3>Languages</h3>
      <div className="new-grid">


        {languages.map((skill, index) => (
          <div className="skill" key={index}>
            <h4>{skill.name}</h4>
            <div className="rating-box">
              {[...Array(5)].map((_, i) => {
                return (<div key={i} className={`box ${i < skill.proficiency ? 'filled' : ''}`}></div>)
              })}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
});

export default Barcelona;
