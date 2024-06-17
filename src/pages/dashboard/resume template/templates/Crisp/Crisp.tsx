// @ts-ignore
import React, { forwardRef } from 'react';
import "./Crisp.scss"
import { BookMarked, Languages, Puzzle, ShieldCheck, User } from 'lucide-react';

const Crisp = forwardRef(({ personalInfo, education, languages, certificates, image, skills, experiences }: any, ref: any) => {
    return (
        <div ref={ref} className='crisp-resume'>
            <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
            <h2>{personalInfo.profession}</h2>
            <p>{personalInfo.profileDesc}</p>
            <div className="main">
                <div className="left">
                    <div className="personalInfo">
                        <h3><User size={20} /> Personal Info</h3>
                        <h4>Address</h4>
                        <p>{personalInfo.address}</p>
                        <h4>Phone</h4>
                        <p>{personalInfo.phone}</p>
                        <h4>E-Mail</h4>
                        <p>{personalInfo.email}</p>
                    </div>

                    {/* SKILLS */}
                    <div className="personalInfo">
                        <h3><Puzzle size={20} /> Skills</h3>
                        {skills.map((skill, index) => (
                            <div className="skill" key={index}>
                                <h4>{skill.name}</h4>
                                <div className="bar-container">
                                    <div className="bar" style={{ width: `${(skill.rating / 5) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* LANGUAGES */}
                    <div className="personalInfo">
                        <h3><Languages size={20} /> Languages</h3>
                        {languages.map((language, index) => (
                            <div className="skill" key={index}>
                                <h4>{language.name}</h4>
                                <div className="bar-container">
                                <div className="bar" style={{ width: `${(language.proficiency / 5) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right left">
                    <div className="personalInfo">
                        <h3><Puzzle size={20} /> Experience</h3>
                        {experiences.map((experience, index) => (
                            <div className="experience" key={index}>
                                <div className="lefty">
                                    <h4>{experience.joiningDate} -</h4>
                                    <h4>{experience.endingDate}</h4>
                                </div>
                                <div className="righty">
                                    <h1>{experience.jobTitle}</h1>
                                    <h4>{experience.employerName}</h4>
                                    <p>{experience.contribution}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="personalInfo">
                        <h3><BookMarked size={20} /> Education</h3>
                        {education.map((edu, index) => (
                            <div className="experience" key={index}>
                                <div className="lefty">
                                    <h4>{edu.joiningDate} -</h4>
                                    <h4>{edu.endingDate}</h4>
                                </div>
                                <div className="righty">
                                    <h1>{edu.degree}</h1>
                                    <h4>{edu.institutionName}</h4>
                                    <p>{edu.contribution}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="personalInfo">
                        <h3><ShieldCheck size={20} />Certifications</h3>
                        <div className="grid">
                        {certificates.map((edu, index) => (
                            <div className="certificate" key={index}>
                                <h4>{edu.name} - {edu.date}</h4>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Crisp;
