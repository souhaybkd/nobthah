// @ts-ignore
import React, { forwardRef } from 'react';
import "./Barcelona.scss"
import { BookMarked, Languages, Puzzle, User } from 'lucide-react';

const Barcelona = forwardRef(({ personalInfo, education, image, skills, experiences }: any, ref: any) => {
  return (
    <div ref={ref} className='barcelona-resume'>
      <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
      <h2>{personalInfo.profession}</h2>
      <div className="grid">
        <div className="el">
          <b>Phone: </b> <span>{personalInfo.phone}</span>
        </div>
        <div className="el">
          <b>Email: </b> <span>{personalInfo.email}</span>
        </div>
        <div className="el">
          <b>Address: </b> <span>{personalInfo.address}</span>
        </div>
        <div className="el">
          <b>LinkedIn: </b> <span>{personalInfo.linkedin}</span>
        </div>
      </div>

      <div className="desc">
        {personalInfo.profileDesc}
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
            <p>{edu.institutionName}</p>
          </div>
        </div>
      ))}

      <h3>Skills & Languages</h3>
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
    </div>
  );
});

export default Barcelona;
