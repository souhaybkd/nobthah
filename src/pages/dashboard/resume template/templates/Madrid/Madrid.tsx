import React, { forwardRef } from 'react';
import "./Madrid.scss"

const Madrid = forwardRef(({ personalInfo, education, languages, certificates, image, skills, experiences }: any, ref: any) => {
    return (
        <div ref={ref} className="madrid-template">
            <div className="header">
                {
                    image && <div className="left">
                        <img src={image} alt="" />
                    </div>
                }


                <div className={image ? "right" : "right extra"} >
                    <h1>{personalInfo.firstName}</h1>
                    <h2>{personalInfo.profession}</h2>
                </div>
            </div>
            <div className="dual">
                <div className="details">
                    <h2>DETAILS</h2>
                    <p>
                        <strong>Phone Number:- </strong>
                        {personalInfo.phone}
                    </p>
                    <p>
                        <strong>E-Mail:- </strong>
                        {personalInfo.email}
                    </p>
                    <p>
                        <strong>Address:- </strong>
                        {personalInfo.address}
                    </p>
                </div>

                <div className="skills">
                    <h2>Languages</h2>
                    <div className="grid">
                        {languages.map((skill, index) => (
                            <div className="skill" key={index}>
                                <h3>{skill.name}</h3>
                                <div className="bar">
                                    <div className="barCompleted" style={{ width: `${(skill.proficiency / 5) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>


            <div className="profile">
                <h2>PROFILE</h2>
                <p>{personalInfo.profileDesc}</p>
            </div>

            <div className="dual">
                <div className="educations">
                    <h2>Education</h2>
                    {education.map((edu, index) => (
                        <div className="education" key={index}>
                            <h3>{edu.degree}, {edu.institutionName}</h3>
                            <h4>{edu.joiningDate} - {edu.endingDate}</h4>
                            <ul>
                                {edu.contribution}
                            </ul>
                        </div>
                    ))}



                </div>

                <div className="educations">
                    <h2>Certificates</h2>
                    {certificates.map((edu, index) => (
                        <div className="education certificate" key={index}>
                            <h3>{edu.name} {edu.date}</h3>

                        </div>
                    ))}



                </div>
            </div>

            <div className="emplymentHistory">
                <h2>EMPLOYMENT HISTORY</h2>
                {experiences.map((exp, index) => (
                    <div className="education">
                        <h3>{exp.jobTitle} At {exp.employerName}</h3>
                        <h4>{exp.joiningDate} - {exp.endingDate}</h4>
                        <ul>
                            {exp.contribution}

                        </ul>
                    </div>
                ))}

            </div>

            <div className="skills">
                <h2>SKILLS</h2>
                <div className="grid unique">
                    {skills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <h3>{skill.name}</h3>
                            <div className="bar">
                                <div className="barCompleted" style={{ width: `${(skill.rating / 5) * 100}%` }}></div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>


        </div>
    );
});

export default Madrid;
