import { CardContent, Grid, Stack, Typography } from '@mui/material';
import { AnimatedSection, MotionCard, StaggerContainer } from './animations/index.js';
import TextIcon from './common/TextIcon.jsx';

const Skills = ({ skills, sizeOverride = null, overrideMarginBottom = null }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <AnimatedSection sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Skills
      </Typography>
      <StaggerContainer component="div">
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid size={sizeOverride ? sizeOverride : { xs: 12, lg: 6 }} key={skill.name || index}>
              <MotionCard
                sx={{
                  mb: overrideMarginBottom || 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <TextIcon name={skill.icon} />
                    <Typography variant="h6" component="h3">
                      {skill.name}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {skill.keywords.join(', ')}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default Skills;
