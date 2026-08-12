import { Box, Card, CardContent, Grid, Link, Typography } from '@mui/material';
import { RADIUS } from '../theme.js';
import { AnimatedItem, AnimatedSection, StaggerContainer } from './animations/index.js';
import FormattedDate from './common/FormattedDate.jsx';
import SectionHeading from './common/SectionHeading.jsx';

const Certificates = ({ certificates, sizeOverride }) => {
  if (!certificates || certificates.length === 0) return null;

  return (
    <AnimatedSection sx={{ mb: 4 }}>
      <SectionHeading title="Certificates" icon="CERTIFICATES" />
      <StaggerContainer>
        <Grid container spacing={2}>
          {certificates.map((certificate, index) => (
            <Grid size={sizeOverride ? sizeOverride : { xs: 12, lg: 6 }} key={certificate.name || index}>
              <AnimatedItem style={{ height: '100%' }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent
                    sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, p: { xs: 2.25, lg: 2.5 } }}
                  >
                    <Box
                      component="img"
                      src={certificate.logoUrl}
                      alt={`${certificate.name} certificate`}
                      sx={{
                        width: 52,
                        height: 52,
                        p: 0.9,
                        flexShrink: 0,
                        objectFit: 'contain',
                        borderRadius: `${RADIUS.tile}px`,
                        backgroundColor: 'surfaceRaised',
                        border: theme => `1px solid ${theme.palette.line}`,
                      }}
                    />
                    <Box sx={{ minWidth: 0 }}>
                      <Typography variant="h6" component="h4" sx={{ fontSize: '1rem' }}>
                        {certificate.name}
                      </Typography>
                      <Link
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body2"
                      >
                        {certificate.issuer}
                      </Link>
                      <Typography variant="body2" sx={{ color: 'inkFaint', mt: 0.25 }}>
                        <FormattedDate date={certificate.issueDate} /> · {certificate.category}
                      </Typography>
                    </Box>
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

export default Certificates;
