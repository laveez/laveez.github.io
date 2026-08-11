import { Box, Grid, Typography } from '@mui/material';
import { PRINT_TYPE } from './common/enums.js';
import ExperienceSection from './common/ExperienceSection.jsx';
import PrintHeader from './common/PrintHeader.jsx';
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
    <Box className="print-container">
      <Box className="print-page">
        <Box className="basics-print-style">
          <Basics
            basics={basics}
            keySKillDirection={'row'}
            keySkillSpacing={1}
          />
        </Box>
        <Box className="print-page-content">
          <Grid container rowSpacing={0} columnSpacing={5}>
            <Grid size={6} className="print-style">
              <ExperienceSection title="Work Experience" experiences={work} icon="WORK" />
            </Grid>
            <Grid size={6} className="print-style">
              <ExperienceSection title="Volunteering" experiences={volunteer} icon="VOLUNTEER" />
            </Grid>
          </Grid>
          <Grid container rowSpacing={0} columnSpacing={5}>
            <Grid size={6} className="print-style">
              <ExperienceSection title="Education" experiences={education} icon="SCHOOL" />
            </Grid>
            <Grid size={6} className="print-style">
              <Publications publications={publications} />
            </Grid>
          </Grid>
          <Grid container rowSpacing={0} columnSpacing={5}>
            <Grid size={4} className="print-style">
              <Certificates certificates={certificates} sizeOverride={12} />
            </Grid>
            <Grid size={4} className="print-style">
              <Languages languages={languages} sizeOverride={12} />
            </Grid>
            <Grid size={4} className="print-style">
              <Interests interests={interests} sizeOverride={12} />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className="print-page">
        <Box className="running-header-print-style">
          <PrintHeader basics={basics} />
        </Box>
        <Box className="print-style print-page-content">
          <Skills skills={skills} sizeOverride={6} overrideMarginBottom={0} />
          <Projects projects={projects} dualColumns={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default PrintView;
