// @ts-ignore
import React, { forwardRef } from 'react';
import "./London.scss"
import { BookMarked, Languages, Puzzle, User } from 'lucide-react';
import getSkillLevel from '../../utils';

const London = forwardRef(({ personalInfo, education, image, skills, experiences, certificates, languages }: any, ref: any) => {
    return (
        <div ref={ref} className='london-resume'>
            <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
            <h2>
                <span>{personalInfo.address}</span>
                <span>{personalInfo.phone}</span>
                <span>{personalInfo.email}</span>
            </h2>
            <div className="line"></div>
            <div className="profile">
                <h2>PROFILE</h2>
                <p>{personalInfo.profileDesc}</p>
            </div>
            <div className="line"></div>

            <div className="profile exp-container">
                <h2>EMPLOYMENT HISTORY</h2>
                {experiences.map((experience, index) => (
                    <div className="exp" key={index}>
                        <div className="left">
                            <p>{experience.joiningDate} - {experience.endingDate}</p>
                        </div>

                        <div className="right">
                            <h2>{experience.jobTitle} at {experience.employerName}</h2>
                            <p>{experience.contribution}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="line"></div>
            <div className="profile exp-container">
                <h2>EDUCATION</h2>
                {education.map((edu, index) => (
                    <div className="exp" key={index}>
                        <div className="left">
                            <p>{edu.joiningDate} - {edu.endingDate}</p>
                        </div>

                        <div className="right">
                            <h2>{edu.degree}</h2>
                            <p>{edu.institutionName}</p>
                            <p>{edu.contribution}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="line"></div>
            <div className="profile">
                <h2>SKILLS</h2>
                <div className="grid">
                    {skills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <h4>{skill.name}</h4>
                            <p>{getSkillLevel(skill.rating)}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="line"></div>
            <div className="profile">
                <h2>Languages</h2>
                <div className="grid">
                    {languages.map((skill, index) => (
                        <div className="skill" key={index}>
                            <h4>{skill.name}</h4>
                            <p>{getSkillLevel(skill.proficiency)}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="line"></div>
            <div className="profile">
                <h2>Certifications</h2>
                <div className="grid">
                    {certificates.map((skill, index) => (
                        <div className="skill" key={index}>
                            <h4>{skill.name}, {skill.date}</h4>
=                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default London;
