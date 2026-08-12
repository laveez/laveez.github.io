import { Card, CardContent, Grid, Typography } from '@mui/material';
import { AnimatedItem, AnimatedSection, StaggerContainer } from './animations/index.js';
import SectionHeading from './common/SectionHeading.jsx';

const Languages = ({ languages, sizeOverride = null }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <AnimatedSection sx={{ mb: 4 }}>
      <SectionHeading title="Languages" icon="LANGUAGES" />
      <StaggerContainer>
        <Grid container spacing={2}>
          {languages.map((language, index) => (
            <Grid size={sizeOverride ? sizeOverride : { xs: 12, lg: 4 }} key={language.language || index}>
              <AnimatedItem style={{ height: '100%' }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: { xs: 2.25, lg: 2.5 } }}>
                    <Typography variant="h6" component="h4" sx={{ fontSize: '1rem', mb: 0.5 }}>
                      {language.language}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {language.fluency}
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedItem>
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default Languages;
