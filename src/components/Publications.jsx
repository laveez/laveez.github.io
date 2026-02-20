import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { AnimatedItem, AnimatedSection, StaggerContainer } from './animations/index.js';
import FormattedDate from './common/FormattedDate.jsx';
import ResponsiveCard from './common/ResponsiveCard.jsx';

const Publications = ({ publications }) => {
  if (!publications || publications.length === 0) return null;

  return (
    <AnimatedSection sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Publications
      </Typography>
      <StaggerContainer>
        {publications.map((publication, index) => (
          <AnimatedItem key={publication.name || index}>
            <Box className="publication" sx={{ mb: 2 }}>
              <ResponsiveCard>
                <CardMedia
                  component="img"
                  sx={{ width: 120, height: 120, p: 2, borderRadius: 6 }}
                  image={publication.logoUrl}
                  alt={`${publication.name} logo`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {publication.name}
                    </Typography>
                    <Link
                      href={publication.url}
                      variant="body1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {publication.publisher}
                    </Link>
                    <Typography variant="body2" color="textSecondary">
                      <FormattedDate date={publication.releaseDate}/>
                    </Typography>
                    <Typography variant="body1">
                      {publication.summary}
                    </Typography>
                    <Link
                      href={publication.urn}
                      variant="body1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {publication.urn}
                    </Link>
                  </CardContent>
                </Box>
              </ResponsiveCard>
            </Box>
          </AnimatedItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default Publications;
