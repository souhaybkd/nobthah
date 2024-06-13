// @ts-ignore
import React, { forwardRef } from 'react';
import "./Singapore.scss";
import getSkillLevel from '../../utils';

const Singapore = forwardRef(({ personalInfo, education, image, skills, experiences }, ref) => {
    return (
        <div className="singapore-resume" ref={ref}>
            <h1>Travis Willis</h1>
            <h2>IT Manager</h2>

            <div className="grid">
                <div className="item">
                    <h4>Address</h4>
                    <p>Yetappa Reddy Colony, Kattmanchi, Chittoor, AP, India</p>
                </div>

                <div className="item">
                    <h4>Phone</h4>
                    <p>+91 7676856815</p>
                </div>

                <div className="item">
                    <h4>G-Mail</h4>
                    <p>qa.sixsigma@gmail.com</p>
                </div>
            </div>

            <div className="profile">
                <h2>01 PROFILE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae repellendus delectus amet. Ea, reiciendis porro nostrum quod deserunt in dolorum expedita nobis, molestiae illum nihil blanditiis quam quasi voluptate numquam ratione distinctio! Exercitationem obcaecati quia minima nam eaque ducimus.</p>
            </div>

            <div className="exp">
                <h2>02 EMPLOYMENT HISTORY</h2>
                {/* {experiences.map((experience, index) => (
                    <div className="exp-item" key={index}>
                        <div className="exp-dates">
                            <p>{experience.joiningDate} - {experience.endingDate}</p>
                        </div>
                        <div className="exp-details">
                            <h3>{experience.jobTitle} at {experience.employerName}</h3>
                            <p>{experience.contribution}</p>
                        </div>
                    </div>
                ))} */}

                <div className="exp-item">
                    <div className="exp-dates">
                        <p>08/05/2505 - 08/05/2505</p>
                    </div>
                    <div className="exp-details">
                        <h3>Full Stcak Web Developer at iNeuron</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime tenetur veniam, hic quasi accusamus incidunt laboriosam ipsum eum iste possimus eligendi minima dignissimos nesciunt illo eveniet, labore blanditiis impedit voluptatum sit sunt quis quod molestiae ea sequi. Tenetur, eveniet unde.</p>
                    </div>
                </div>
                <div className="exp-item">
                    <div className="exp-dates">
                        <p>08/05/2505 - 08/05/2505</p>
                    </div>
                    <div className="exp-details">
                        <h3>Full Stcak Web Developer at iNeuron</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime tenetur veniam, hic quasi accusamus incidunt laboriosam ipsum eum iste possimus eligendi minima dignissimos nesciunt illo eveniet, labore blanditiis impedit voluptatum sit sunt quis quod molestiae ea sequi. Tenetur, eveniet unde.</p>
                    </div>
                </div>
            </div>

            {/* EDUCATION */}
            <div className="exp edu">
                <h2>03 EDUCATION</h2>
                <div className="exp-item">
                    <div className="exp-dates">
                        <p>08/05/2505 - 08/05/2505</p>
                    </div>
                    <div className="exp-details">
                        <h3>Full Stcak Web Developer at iNeuron</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime tenetur veniam, hic quasi accusamus incidunt laboriosam ipsum eum iste possimus eligendi minima dignissimos nesciunt illo eveniet, labore blanditiis impedit voluptatum sit sunt quis quod molestiae ea sequi. Tenetur, eveniet unde.</p>
                    </div>
                </div>
                <div className="exp-item">
                    <div className="exp-dates">
                        <p>08/05/2505 - 08/05/2505</p>
                    </div>
                    <div className="exp-details">
                        <h3>Full Stcak Web Developer at iNeuron</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime tenetur veniam, hic quasi accusamus incidunt laboriosam ipsum eum iste possimus eligendi minima dignissimos nesciunt illo eveniet, labore blanditiis impedit voluptatum sit sunt quis quod molestiae ea sequi. Tenetur, eveniet unde.</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Singapore;
