import { CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import { AnimatedSection, MotionCard, StaggerContainer } from './animations/index.js';
import FormattedDate from './common/FormattedDate.jsx';

const Certificates = ({ certificates, sizeOverride }) => {
  if (!certificates || certificates.length === 0) return null;

  return (
    <AnimatedSection sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Certificates
      </Typography>
      <StaggerContainer>
        <Grid container spacing={2}>
          {certificates.map((certificate, index) => (
            <Grid size={sizeOverride ? sizeOverride : { xs: 12, lg: 6 }} key={certificate.name || index}>
              <MotionCard
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 120, width: 120, p: 2 }}
                  image={certificate.logoUrl}
                  alt={`${certificate.name} certificate`}
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {certificate.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Link
                      href={certificate.url}
                      variant="body1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {certificate.issuer}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <FormattedDate date={certificate.issueDate} />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {certificate.category}
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

export default Certificates;
