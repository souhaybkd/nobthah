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

            {experiences && experiences.length > 0 && experiences.some(exp => exp.jobTitle || exp.employerName || exp.contribution) && (
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
            )}

            {education && education.length > 0 && education.some(edu => edu.degree || edu.institutionName || edu.contribution) && (
                <>
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
                </>
            )}

            {skills && skills.length > 0 && skills.some(skill => skill.name) && (
                <>
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
                </>
            )}

            {languages && languages.length > 0 && languages.some(lang => lang.name) && (
                <>
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
                </>
            )}

            {certificates && certificates.length > 0 && certificates.some(cert => cert.name || cert.date) && (
                <>
                    <div className="line"></div>
                    <div className="profile">
                        <h2>Certifications</h2>
                        <div className="grid">
                            {certificates.map((skill, index) => (
                                <div className="skill" key={index}>
                                    <h4>{skill.name}, {skill.date}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
});

export default London;
