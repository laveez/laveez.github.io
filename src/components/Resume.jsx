import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import Grid from '@mui/material/Grid2';
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
import Tools from './Tools.jsx';
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
    <Grid container spacing={2}>
      <Grid size={4}>
        <Basics basics={basics} />
      </Grid>
      <Grid size={8}>
        <Box sx={{ p: 2, borderRadius: 2 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
            sx={{ mb: 2 }}
          >
            <Tab label="Work Experience" />
            <Tab label="Education" />
            <Tab label="Volunteering" />
            <Tab label="Skills" />
            <Tab label="Projects" />
            <Tools />
          </Tabs>
          <Box sx={{ p: 2, borderRadius: 2, boxShadow: 5 }}>
            {activeTab === 0 && <WorkExperience work={work} />}
            {activeTab === 1 && (
              <>
                <Education education={education} />
                <Publications publications={publications} />
              </>
            )}
            {activeTab === 2 && <Volunteer volunteer={volunteer} />}
            {activeTab === 3 && (
              <>
                <Certificates certificates={certificates} />
                <Languages languages={languages} />
                <Skills skills={skills} />
                <Interests interests={interests} />
              </>
            )}
            {activeTab === 4 && (
              <>
                <Projects projects={projects} />
                <References references={references} />
                <Awards awards={awards} />
              </>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Resume;
