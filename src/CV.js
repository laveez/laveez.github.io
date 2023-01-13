import React from 'react';
import resume from './resume.json';
import './App.css';

const CV = () => {
  return (
    <div className="container">
      <div className="left-column">
        <section>
          <img src={resume.basics.image} alt={resume.basics.name} className="avatar"/>
          <h1>{resume.basics.name}</h1>
          <h2>{resume.basics.label}</h2>
          <a href={resume.basics.url}>{resume.basics.url}</a>
          <p>{resume.basics.summary}</p>
        </section>
      </div>
      <div className="right-column">
        <section>
          <h2>Education</h2>
          {resume.education.map((edu) => (
            <div className="education-item">
              <h3>{edu.studyType} in {edu.area}, {edu.institution}, {edu.startDate} - {edu.endDate}</h3>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>Experience</h2>
          {resume.work.map((work) => (
            <div className="experience-item">
              <h3>{work.position}, {work.name}, {work.startDate} - {work.endDate}</h3>
              <p>{work.summary}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>Volunteer</h2>
          {resume.volunteer.map((volunteer) => (
            <div className="volunteer-item">
              <h3>{volunteer.position}, {volunteer.organization}, {volunteer.startDate} - {volunteer.endDate}</h3>
              <p>{volunteer.summary}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>Certificates</h2>
          <ul>
            {resume.certificates.map((cert) => (
              <li>{cert.name}, {cert.issuer}, {cert.date}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <div className="skills-grid">
            {resume.skills.map((skill, index) => (
              <div key={index} className="skill">
                {skill.name}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CV;