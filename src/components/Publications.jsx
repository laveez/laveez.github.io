import { Box, Link, Typography } from '@mui/material';
import { RADIUS } from '../theme.js';
import { AnimatedItem, AnimatedSection, StaggerContainer } from './animations/index.js';
import FormattedDate from './common/FormattedDate.jsx';
import SectionHeading from './common/SectionHeading.jsx';

const Publications = ({ publications }) => {
  if (!publications || publications.length === 0) return null;

  return (
    <AnimatedSection sx={{ mb: 4 }}>
      <SectionHeading title="Publications" icon="PUBLICATIONS" />
      <StaggerContainer>
        {publications.map((publication, index) => (
          <AnimatedItem key={publication.name || index}>
            <Box
              className="publication"
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: { xs: 1.75, lg: 2.5 },
                py: { xs: 2.5, lg: 3 },
              }}
            >
              <Box
                component="img"
                src={publication.logoUrl}
                alt={`${publication.name} logo`}
                sx={{
                  width: { xs: 46, lg: 58 },
                  height: { xs: 46, lg: 58 },
                  p: 1,
                  flexShrink: 0,
                  objectFit: 'contain',
                  borderRadius: `${RADIUS.tile}px`,
                  backgroundColor: 'surfaceRaised',
                  border: theme => `1px solid ${theme.palette.line}`,
                }}
              />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h6" component="h4" sx={{ fontSize: { xs: '1rem', lg: '1.15rem' } }}>
                  {publication.name}
                </Typography>
                <Link
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body2"
                >
                  {publication.publisher}
                </Link>
                <Typography variant="body2" sx={{ color: 'inkFaint', mt: 0.25 }}>
                  <FormattedDate date={publication.releaseDate} />
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.25 }}>
                  {publication.summary}
                </Typography>
                <Link
                  href={publication.urn}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body2"
                  sx={{ display: 'inline-block', mt: 0.75, fontSize: '0.8rem' }}
                >
                  {publication.urn}
                </Link>
              </Box>
            </Box>
          </AnimatedItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default Publications;
