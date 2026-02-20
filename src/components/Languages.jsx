import { CardContent, Grid, Typography } from '@mui/material';
import { AnimatedSection, MotionCard, StaggerContainer } from './animations/index.js';

const Languages = ({ languages, sizeOverride = null }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <AnimatedSection sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Languages
      </Typography>
      <StaggerContainer>
        <Grid container spacing={2}>
          {languages.map((language, index) => (
            <Grid size={sizeOverride ? sizeOverride : { xs: 12, lg: 4 }} key={language.language || index}>
              <MotionCard
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {language.language}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {language.fluency}
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

export default Languages;
