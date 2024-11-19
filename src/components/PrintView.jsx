import React from 'react';
import Grid from '@mui/material/Grid2';
import ExperienceSection from './common/ExperienceSection.jsx';
import Basics from './Basics.jsx';
import Certificates from './Certificates.jsx';
import Projects from './Projects.jsx';
import Publications from './Publications.jsx';

const PrintView = ({ resumeData }) => {
  const {
    basics,
    work,
    volunteer,
    education,
    publications,
    skills,
    languages,
    interests,
    projects,
    certificates,
  } = resumeData;

  /*  const { setMode } = useColorScheme();
  setMode('light');*/

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Basics basics={basics} />
      </Grid>
      <Grid size={6}>
        <ExperienceSection title="Work Experience" experiences={work} />
        <Projects projects={projects} />
      </Grid>
      <Grid size={6}>
        <ExperienceSection title="Education" experiences={education} />
        <Publications publications={publications} />
        <Certificates certificates={certificates} />
        <ExperienceSection title="Volunteer" experiences={volunteer} />

        {/*
        <Languages languages={languages} />
        <Skills skills={skills} />
        <Interests interests={interests} />
        */}
      </Grid>
    </Grid>
  );
};

export default PrintView;
