import React, { useEffect, useState } from 'react';
import resume from './resume.json';
import './App.css';

const CVSection = ({ title, items, className }) => {
  if (!items) {
    return null;
  }
  return (
    <section>
      <h1>{title}</h1>
      {items.map((item,index) => (
        <div key={index} className={`${title.toLowerCase()}-item`}>
          <h3>{item.startDate} - {item.endDate}</h3>
          <h2>{item.name || item.organization || item.institution}</h2>
          <h3>{item.position || item.studyType}{item.area && (item.position || item.studyType) && ','} {item.area} </h3>
          {item.summary && <p>{item.summary}</p>}
        </div>
      ))}
    </section>
  )
}

const CV = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1480) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileCV />
      ) : (
        <DesktopCV />
      )}
    </>
  );
}

const MobileCV = () => {

  return (
    <div className="mobile-section">
      <section className="mobile-basics">
        <img src={resume.basics.image} alt={resume.basics.name} className="avatar"/>
        <h1>{resume.basics.name}</h1>
        <h2>{resume.basics.label}</h2>
        <a href={resume.basics.url}>{resume.basics.url}</a>
        <p>{resume.basics.summary}</p>
      </section>
      <CVSection title="Education" items={resume.education} />
      <CVSection title="Experience" items={resume.work} />
      <CVSection title="Volunteer" items={resume.volunteer} />
      <section>
        <h2>Certificates</h2>
        <ul>
          {resume.certificates.map((cert, index) => (
            <li key={index}>{cert.name}, {cert.issuer}, {cert.date}</li>
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
  );
};

const DesktopCV = () => {
  if (!resume) {
    return <p>Loading...</p>;
  }

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
        <CVSection title="Education" items={resume.education} />
        <CVSection title="Experience" items={resume.work} />
        <CVSection title="Volunteer" items={resume.volunteer} />
        <section>
          <h2>Certificates</h2>
          <ul>
            {resume.certificates.map((cert, index) => (
              <li key={index}>{cert.name}, {cert.issuer}, {cert.date}</li>
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
    </div>);
}

export default CV;