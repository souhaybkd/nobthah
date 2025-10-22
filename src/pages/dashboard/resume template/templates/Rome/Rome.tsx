// @ts-ignore
import React, { forwardRef } from 'react';
import "./Rome.scss";

const Rome = forwardRef(({ personalInfo, education, certificates, languages, image, skills, experiences }: any, ref: any) => {
    return (
        <div className="rome-resume" ref={ref}>
            <div className="profile">
                <div className="left">
                    <div className="top">
                        <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
                    </div>
                    <div className="down">
                        <h2>{personalInfo.profession}</h2>
                        <div className="split">
                            <div>
                                <h2>{personalInfo.address}</h2>
                            </div>
                            <div>
                                <h2>{personalInfo.phone}</h2>
                                <h2>{personalInfo.email}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={image} alt="Profile" />
                </div>
            </div>
            <div className="dual">
                <div className="info profile-0">
                    <div className="title">
                        <h3>PROFILE</h3>
                    </div>
                    <p>{personalInfo.profileDesc}</p>
                </div>

                {certificates && certificates.length > 0 && certificates.some(cert => cert.name || cert.date) && (
                    <div className="certificates">
                        {certificates.map((skill, index) => (
                            <h2 className='certificate' key={index}>{skill.name}, {skill.date}</h2>
                        ))}
                    </div>
                )}
            </div>
            <div className="dual">
                {skills && skills.length > 0 && skills.some(skill => skill.name) && (
                    <div className="info">
                        <div className="title">
                            <h3>SKILLS</h3>
                        </div>
                        {skills.map((skill, index) => (
                            <div className="rating" key={index}>
                                <p>{skill.name}</p>
                                <div className="circles">
                                    {[...Array(5)].map((_, i) => {
                                        return (<div key={i} className={`circle ${i < skill.rating ? 'filled' : ''}`}></div>)
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {languages && languages.length > 0 && languages.some(lang => lang.name) && (
                    <div className="info">
                        <div className="title">
                            <h3>Languages</h3>
                        </div>
                        {languages.map((language, index) => (
                            <div className="rating" key={index}>
                                <p>{language.name}</p>
                                <div className="circles">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className={`circle ${i < language.proficiency ? 'filled' : ''}`}></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {education && education.length > 0 && education.some(edu => edu.degree || edu.institutionName || edu.contribution) && (
                <div className="info">
                    <div className="title">
                        <h3>EDUCATION</h3>
                    </div>
                    <ul>
                        {education.map((experience, index) => (
                            <li key={index} className="experience-item">
                                <div className="flex">
                                    <div>
                                        <h3>{experience.degree} at {experience.institutionName}</h3>
                                    </div>
                                    <h2 className='time'>{experience.joiningDate} - {experience.endingDate}</h2>
                                </div>
                                <p>{experience.contribution}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {experiences && experiences.length > 0 && experiences.some(exp => exp.jobTitle || exp.employerName || exp.contribution) && (
                <div className="info">
                    <div className="title">
                        <h3>EMPLOYMENT HISTORY</h3>
                    </div>
                    <ul>
                        {experiences.map((experience, index) => (
                            <li key={index} className="experience-item">
                                <div className="flex">
                                    <div>
                                        <h3>{experience.jobTitle} at {experience.employerName}</h3>
                                    </div>
                                    <h2 className='time'>{experience.joiningDate} - {experience.endingDate}</h2>
                                </div>
                                <p>{experience.contribution}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}


        </div>
    );
});

export default Rome;
