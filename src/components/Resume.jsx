import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import Awards from './Awards.jsx';
import Basics from './Basics.jsx';
import Certificates from './Certificates.jsx';
import Education from './Education.jsx';
import Interests from './Interests.jsx';
import Languages from './Languages.jsx';
import Projects from './Projects.jsx';
import Publications from './Publications.jsx';
import References from './References.jsx';
import Skills from './Skills.jsx';
import Volunteer from './Volunteer.jsx';
import WorkExperience from './WorkExperience.jsx';

const Resume = ({ resumeData }) => {
  const [ activeTab, setActiveTab ] = useState(0);
  const {
    basics,
    work,
    volunteer,
    education,
    awards,
    publications,
    skills,
    languages,
    interests,
    references,
    projects,
    certificates,
  } = resumeData;

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', color: '#333', p: 2, borderRadius: 2 }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 2 }}
      >
        <Tab label="Basics" />
        <Tab label="Work Experience" />
        <Tab label="Education & Publications" />
        <Tab label="Volunteering" />
        <Tab label="Certificates, Languages, Skills & Interests" />
        <Tab label="Projects" />
      </Tabs>
      <Box sx={{ p: 2, bgcolor: '#fff', borderRadius: 2, boxShadow: 1 }}>
        {activeTab === 0 && <Basics basics={basics} />}
        {activeTab === 1 && <WorkExperience work={work} />}
        {activeTab === 2 && (
          <>
            <Education education={education} />
            <Publications publications={publications} />
          </>
        )}
        {activeTab === 3 && <Volunteer volunteer={volunteer} />}
        {activeTab === 4 && (
          <>
            <Certificates certificates={certificates} />
            <Languages languages={languages} />
            <Skills skills={skills} />
            <Interests interests={interests} />
          </>
        )}
        {activeTab === 5 && (
          <>
            <Projects projects={projects} />
            <References references={references} />
            <Awards awards={awards} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Resume;
