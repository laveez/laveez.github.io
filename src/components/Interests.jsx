import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { RADIUS } from '../theme.js';
import { AnimatedItem, AnimatedSection, StaggerContainer } from './animations/index.js';
import KeywordChips from './common/KeywordChips.jsx';
import SectionHeading from './common/SectionHeading.jsx';
import TextIcon from './common/TextIcon.jsx';

const Interests = ({ interests, sizeOverride = null }) => {
  if (!interests || interests.length === 0) return null;

  return (
    <AnimatedSection sx={{ mb: 4 }}>
      <SectionHeading title="Interests" icon="INTERESTS" />
      <StaggerContainer>
        <Grid container spacing={2}>
          {interests.map((interest, index) => (
            <Grid size={sizeOverride ? sizeOverride : { xs: 12, lg: 6 }} key={interest.name || index}>
              <AnimatedItem style={{ height: '100%' }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: { xs: 2.25, lg: 2.5 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.75 }}>
                      <Box
                        sx={{
                          'display': 'flex',
                          'p': 0.9,
                          'borderRadius': `${RADIUS.tile}px`,
                          'backgroundColor': 'surfaceRaised',
                          'border': theme => `1px solid ${theme.palette.line}`,
                          'color': 'accentText',
                          '& svg': { fontSize: 18, display: 'block' },
                        }}
                      >
                        <TextIcon name={interest.icon} />
                      </Box>
                      <Typography variant="h6" component="h4" sx={{ fontSize: '1rem' }}>
                        {interest.name}
                      </Typography>
                    </Box>
                    <KeywordChips keywords={interest.keywords} dense />
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

export default Interests;
