import React from 'react';
import Grid from '@mui/material/Grid2';
import ExperienceSection from './common/ExperienceSection.jsx';
import Basics from './Basics.jsx';
import Certificates from './Certificates.jsx';
import Interests from './Interests.jsx';
import Languages from './Languages.jsx';
import Projects from './Projects.jsx';
import Publications from './Publications.jsx';
import Skills from './Skills.jsx';

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

  return (
    <Grid container rowSpacing={0} columnSpacing={5} className="print-container">
      <Grid size={12} className="basics-print-style">
        <Basics basics={basics} />
      </Grid>
      <Grid size={6} className="print-style">
        <ExperienceSection title="Work Experience" experiences={work} />
        <Languages languages={languages} sizeOverride={4} />
        <Skills skills={skills} overrideMarginBottom={0} />
        <Interests interests={interests} sizeOverride={6} />
      </Grid>
      <Grid size={6} className="print-style">
        <ExperienceSection title="Education" experiences={education} />
        <Publications publications={publications} />
        <Certificates certificates={certificates} />
        <ExperienceSection title="Volunteering" experiences={volunteer} />
      </Grid>
      <Grid size={12} className="basics-print-style print-style-last">
        <Basics basics={basics} />
      </Grid>
      <Grid size={12} className="print-style">
        <Projects projects={projects} />
      </Grid>
    </Grid>
  );
};

export default PrintView;
