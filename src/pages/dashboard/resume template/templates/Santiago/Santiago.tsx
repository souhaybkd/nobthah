// @ts-ignore
import React, { forwardRef } from 'react';
import "./Santiago.scss";
import getSkillLevel from '../../utils';

const Santiago = forwardRef(({ personalInfo, education, image, skills, experiences }, ref) => {
    return (
        <div className="santiago-resume" ref={ref}>
            <div className="hide"></div>
            <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
            <h2>{personalInfo.profession}</h2>
            <p className='address'>{personalInfo.city}, {personalInfo.country}</p>
            <div className="phone-email">
                <p>{personalInfo.phone}</p>
                <p>{personalInfo.email}</p>
            </div>
            <div className="line"></div>
            <h3>PROFILE</h3>
            <p className='profile-desc'>
                {personalInfo.profileDesc}
            </p>
            <div className="line"></div>

            <h3>EMPLOYMENT HISTORY</h3>
            <ul>
                {experiences.map((experience, index) => (
                    <li key={index}>
                        <div className="flex">
                            <div>
                                <h2>{experience.jobTitle} at {experience.employerName}</h2>
                            </div>
                            <h2 className='time'>{experience.joiningDate} - {experience.endingDate}</h2>
                        </div>
                        <p>{experience.contribution}</p>
                    </li>
                ))}
            </ul>

            <h3>EDUCATION</h3>
            <ul>
                {education.map((edu, index) => (
                    <li key={index}>
                        <div className="flex">
                            <div>
                                <h2>{edu.degree}</h2>
                            </div>
                            <h2 className='time'>{edu.joiningDate} - {edu.endingDate}</h2>
                        </div>
                        <p>{edu.institutionName}</p>
                        <p>{edu.contribution}</p>
                    </li>
                ))}
            </ul>

            <h3>SKILLS</h3>
            <div className="grid">
                {skills.map((skill, index) => (
                    <div className="flex skill-line" key={index}>
                        <span>{skill.name}</span>
                        <span>{getSkillLevel(skill.rating)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Santiago;
