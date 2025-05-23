import { Grid, Typography } from '@mui/material';
import { PRINT_TYPE } from './common/enums.js';
import ExperienceSection from './common/ExperienceSection.jsx';
import Basics from './Basics.jsx';
import Certificates from './Certificates.jsx';
import Interests from './Interests.jsx';
import Languages from './Languages.jsx';
import Projects from './Projects.jsx';
import Publications from './Publications.jsx';
import Skills from './Skills.jsx';

const PrintView = ({ resumeData, type = PRINT_TYPE.RESUME }) => {
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

  if (type === PRINT_TYPE.COVER_LETTER) {
    return (
      <Grid container rowSpacing={0} columnSpacing={5} className="print-container">
        <Grid size={12} className="basics-print-style">
          <Basics
            basics={basics}
            keySKillDirection={'row'}
            keySkillSpacing={1}
          />
        </Grid>
        <Grid size={12} className="basics-print-style" sx={{ mt: 10 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 5 }} gutterBottom>
            Heading
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 'x-large', mb: 3 }} gutterBottom>
            Paragraph
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container rowSpacing={0} columnSpacing={5} className="print-container">
      <Grid size={12} className="basics-print-style">
        <Basics
          basics={basics}
          keySKillDirection={'row'}
          keySkillSpacing={1}
        />
      </Grid>
      <Grid size={6} className="print-style">
        <ExperienceSection title="Work Experience" experiences={work} />
        <Publications publications={publications} />
      </Grid>
      <Grid size={6} className="print-style">
        <ExperienceSection title="Education" experiences={education} />
        <ExperienceSection title="Volunteering" experiences={volunteer} />
      </Grid>
      <Grid size={12} className="basics-print-style print-style-last">
        <Basics
          basics={basics}
          keySKillDirection={'row'}
          keySkillSpacing={1}
        />
      </Grid>
      <Grid size={12} className="print-style">
        <Certificates certificates={certificates} sizeOverride={4} />
        <Languages languages={languages} sizeOverride={4} />
        <Skills skills={skills} sizeOverride={6} overrideMarginBottom={0} />
        <Interests interests={interests} sizeOverride={6} />
        <Projects projects={projects} dualColumns={true} />
      </Grid>
    </Grid>
  );
};

export default PrintView;
