import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { AnimatedItem, AnimatedSection, StaggerContainer } from '../animations/index.js';
import Duration from './Duration.jsx';
import { DATE_FORMAT } from './enums.js';
import FormattedDateRange from './FormattedDateRange.jsx';
import ResponsiveCard from './ResponsiveCard.jsx';

const ExperienceSection = ({ title, experiences }) => {
  if (!experiences || experiences.length === 0) return null;

  return (
    <AnimatedSection sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      <StaggerContainer>
        {experiences.map((experience, index) => (
          <AnimatedItem key={`${experience.name || experience.organization || experience.institution}-${index}`}>
            <Box className="experience" sx={{ mb: 2 }}>
              <ResponsiveCard>
                <CardMedia
                  component="img"
                  sx={{ width: 120, height: 120, p: 2, borderRadius: 6 }}
                  image={experience.logoUrl}
                  alt={`${experience.name || experience.organization || experience.institution} logo`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {experience.position || experience.studyType}
                      {experience.area && experience.studyType ? ' in ' : ''}
                      {experience.area}
                    </Typography>
                    <Link
                      href={experience.url}
                      variant="body1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience.name || experience.organization || experience.institution}
                    </Link>
                    {experience.dateStringOverride ?
                      <Typography variant="body2" color="textSecondary">
                        {experience.dateStringOverride}
                      </Typography> :
                      <Typography variant="body2" color="textSecondary">
                        {!experience.institution ? <>
                          <FormattedDateRange startDate={experience.startDate} endDate={experience.endDate}/>
                          {' '}
                          <Duration startDate={experience.startDate} endDate={experience.endDate}/>
                        </> : <FormattedDateRange
                          startDate={experience.startDate}
                          endDate={experience.endDate}
                          format={DATE_FORMAT.YEAR}
                        />}
                      </Typography>}
                    <Typography variant="body1">
                      {experience.summary}
                    </Typography>
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

export default ExperienceSection;
