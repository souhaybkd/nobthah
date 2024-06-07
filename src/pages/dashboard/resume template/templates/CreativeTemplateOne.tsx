import React, { forwardRef } from 'react';
import "./CreativeTemplateOne.scss"

const CreativeTemplateOne = ({ personalInfo, skills }, ref) => {
  return (
    <div ref={ref} className='RESUME-TEMPLATE-1'>
      <h2>Finalize</h2>
      <p>Please provide your finalize.</p>
      <h1>{personalInfo.firstName}</h1>
      <h1>{personalInfo.profession}</h1>
      <h1>{personalInfo.city + ", " + personalInfo.country}</h1>
      <h1>{personalInfo.linkedin}</h1>
      <h1>{personalInfo.twitter}</h1>
      <h1>{personalInfo.otherProfile}</h1>
      <h1>{personalInfo.portfolio}</h1>
      <h1>{personalInfo.phone}</h1>
      <h1>{personalInfo.email}</h1>
      {skills.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default forwardRef(CreativeTemplateOne);
