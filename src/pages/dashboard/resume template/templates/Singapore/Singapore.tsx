// @ts-ignore
import React, { forwardRef } from 'react';
import "./Singapore.scss";
import getSkillLevel from '../../utils';

const Singapore = forwardRef(({ personalInfo, certificates, languages, education, image, skills, experiences }: any, ref: any) => {
    return (
        <div className="singapore-resume" ref={ref}>
            <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
            <h2>{personalInfo.jobTitle}</h2>

            <div className="grid">
                <div className="item">
                    <h4>Address</h4>
                    <p>{personalInfo.address}</p>
                </div>

                <div className="item">
                    <h4>Phone</h4>
                    <p>{personalInfo.phone}</p>
                </div>

                <div className="item">
                    <h4>Email</h4>
                    <p>{personalInfo.email}</p>
                </div>

                {languages && languages.length > 0 && languages.some(lang => lang.name) && (
                    <div className="item">
                        <h4>Languages</h4>
                        <p>{
                            languages.map((item) => {
                                return item.name + ", "
                            })
                        }</p>
                    </div>
                )}
            </div>

            <div className="profile">
                <h2>PROFILE</h2>
                <p>{personalInfo.profileDesc}</p>
            </div>

            {experiences && experiences.length > 0 && experiences.some(exp => exp.jobTitle || exp.employerName || exp.contribution) && (
                <div className="exp">
                    <h2>EMPLOYMENT HISTORY</h2>
                    {experiences.map((experience, index) => (
                        <div className="exp-item" key={index}>
                            <div className="exp-dates">
                                <p>{experience.joiningDate} - {experience.endingDate}</p>
                            </div>
                            <div className="exp-details">
                                <h3>{experience.jobTitle} at {experience.employerName}</h3>
                                <p>{experience.contribution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {education && education.length > 0 && education.some(edu => edu.degree || edu.institutionName || edu.contribution) && (
                <div className="exp edu">
                    <h2>EDUCATION</h2>
                    {education.map((edu, index) => (
                        <div className="exp-item" key={index}>
                            <div className="exp-dates">
                                <p>{edu.joiningDate} - {edu.endingDate}</p>
                            </div>
                            <div className="exp-details">
                                <h3>{edu.degree}</h3>
                                <p>{edu.institutionName}</p>
                                <p>{edu.contribution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="dual exp">
                {skills && skills.length > 0 && skills.some(skill => skill.name) && (
                    <div className="card">
                        <h2>TECHNICAL & SOFT SKILLS</h2>
                        <div className="skills">
                            {
                                skills.map((item, index) => {
                                    return (
                                        <div className="skill" key={index}>
                                            <h4>{item.name}</h4>
                                            <div className="bar-container">
                                                <div className="bar" style={{width: (item.rating/5) * 100}}></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )}

                {certificates && certificates.length > 0 && certificates.some(cert => cert.name || cert.date) && (
                    <div className="card v2">
                        <h2>CERTIFICATIONS</h2>
                        <div className="skills">
                            {
                                certificates.map((item, index) => {
                                    return (
                                        <div className="skill" key={index}>
                                            <h4>{item.name}, {item.date}</h4>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

export default Singapore;
