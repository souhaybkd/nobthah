// @ts-ignore
import React, { forwardRef } from 'react';
import "./Rome.scss";

const Rome = forwardRef(({ personalInfo, education, image, skills, languages, experiences }: any, ref:any) => {
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
                                <h2>{personalInfo.city}, {personalInfo.country}</h2>
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
            <div className="info">
                <div className="title">
                    <div>
                        <h1>1</h1>
                    </div>
                    <h3>PROFILE</h3>
                </div>
                <p>{personalInfo.profileDesc}</p>
            </div>
            <div className="dual">
                <div className="info">
                    <div className="title">
                        <div>
                            <h1>2</h1>
                        </div>
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
                <div className="info">
                    <div className="title">
                        <div>
                            <h1>3</h1>
                        </div>
                        <h3>Languages</h3>
                    </div>
                    {/* {languages.map((language, index) => (
                        <div className="rating" key={index}>
                            <p>{language.name}</p>
                            <div className="circles">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`circle ${i < language.rating ? 'filled' : ''}`}></div>
                                ))}
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
            <div className="info">
                <div className="title">
                    <div>
                        <h1>4</h1>
                    </div>
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
        </div>
    );
});

export default Rome;
