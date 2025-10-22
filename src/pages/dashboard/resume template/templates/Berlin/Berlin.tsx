// @ts-nocheck
import React, { forwardRef } from 'react';
import "./Berlin.scss";

const Berlin = forwardRef(({ personalInfo, education, languages, certificates, skills, experiences }, ref) => {
    return (
        <div ref={ref} className="berlin-template">
            <div className="header">
                <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
                <h2>{personalInfo.profession}</h2>
            </div>

            <div className="container">
                <div className="left">
                    <h2>DETAILS</h2>
                    <div className="line"></div>

                    <div className="listing">
                        <h3>ADDRESS</h3>
                        <p>{personalInfo.address}</p>
                    </div>

                    <div className="listing">
                        <h3>PHONE</h3>
                        <p>{personalInfo.phone}</p>
                    </div>

                    <div className="listing">
                        <h3>EMAIL</h3>
                        <p>{personalInfo.email}</p>
                    </div>

                    {skills && skills.length > 0 && skills.some(skill => skill.name) && (
                        <>
                            <h2 className='skills'>SKILLS</h2>
                            <div className="line"></div>
                            {skills.map((skill, index) => (
                                <div className="skill" key={index}>
                                    <h4>{skill.name}</h4>
                                    <div className="bar-container">
                                        <div className="bar" style={{ width: `${(skill.rating / 5) * 100}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {languages && languages.length > 0 && languages.some(lang => lang.name) && (
                        <>
                            <h2 className='skills'>Languages</h2>
                            <div className="line"></div>
                            {languages.map((skill, index) => (
                                <div className="skill" key={index}>
                                    <h4>{skill.name}</h4>
                                    <div className="bar-container">
                                        <div className="bar" style={{ width: `${(skill.proficiency / 5) * 100}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {certificates && certificates.length > 0 && certificates.some(cert => cert.name || cert.date) && (
                        <>
                            <h2 className='skills'>Certificates</h2>
                            <div className="line"></div>
                            {certificates.map((skill, index) => (
                                <div className="skill certficate" key={index}>
                                    <h4>{skill.name}, {skill.date}</h4>
                                </div>
                            ))}
                        </>
                    )}
                </div>

                <div className="right">
                    <div className="profile">
                        <h2>PROFILE</h2>
                        <div className="line"></div>
                        <p className='desc'>{personalInfo.profileDesc}</p>
                    </div>

                    {experiences && experiences.length > 0 && experiences.some(exp => exp.jobTitle || exp.employerName || exp.contribution) && (
                        <div className="employmentHistory profile">
                            <h2>EMPLOYMENT HISTORY</h2>
                            <div className="line"></div>
                            {experiences.map((exp, index) => (
                                <div className="history" key={index}>
                                    <h4>{exp.jobTitle} at {exp.employerName}</h4>
                                    <p>{exp.joiningDate} - {exp.endingDate}</p>
                                    <article>{exp.contribution}</article>
                                </div>
                            ))}
                        </div>
                    )}

                    {education && education.length > 0 && education.some(edu => edu.degree || edu.institutionName || edu.contribution) && (
                        <div className="employmentHistory profile education">
                            <h2>EDUCATION</h2>
                            <div className="line"></div>
                            {education.map((edu, index) => (
                                <div className="history" key={index}>
                                    <h4>{edu.degree}, {edu.institutionName}</h4>
                                    <p>{edu.joiningDate} - {edu.endingDate}</p>
                                    <article>{edu.contribution}</article>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});

export default Berlin;
