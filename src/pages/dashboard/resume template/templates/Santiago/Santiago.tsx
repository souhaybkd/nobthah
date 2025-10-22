// @ts-ignore
import React, { forwardRef } from 'react';
import "./Santiago.scss";
import getSkillLevel from '../../utils';

const Santiago = forwardRef(({ personalInfo, certificates, languages, education, image, skills, experiences }: any, ref: any) => {
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

            {experiences && experiences.length > 0 && experiences.some(exp => exp.jobTitle || exp.employerName || exp.contribution) && (
                <>
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
                </>
            )}

            {education && education.length > 0 && education.some(edu => edu.degree || edu.institutionName || edu.contribution) && (
                <>
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
                </>
            )}

            <div className="dual">
                {certificates && certificates.length > 0 && certificates.some(cert => cert.name || cert.date) && (
                    <div className="child">
                        <h3>Certifications</h3>
                        <div className="grid">
                            {certificates.map((skill, index) => (
                                <div className="flex skill-line" key={index}>
                                    <span>{skill.name}</span>
                                    <span>{(skill.date)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {languages && languages.length > 0 && languages.some(lang => lang.name) && (
                    <div className="child">
                        <h3>Languages</h3>
                        <div className="grid">
                            {languages.map((skill, index) => (
                                <div className="flex skill-line" key={index}>
                                    <span>{skill.name}</span>
                                    <span>{getSkillLevel(skill.proficiency)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {skills && skills.length > 0 && skills.some(skill => skill.name) && (
                <div className="certification">
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
            )}
        </div>
    );
});

export default Santiago;
