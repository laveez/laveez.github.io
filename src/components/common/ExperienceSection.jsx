import React from 'react';
import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material';
import Duration from './Duration.jsx';
import { DATE_FORMAT } from './enums.js';
import FormattedDateRange from './FormattedDateRange.jsx';
import ResponsiveCard from './ResponsiveCard.jsx';

const ExperienceSection = ({ title, experiences }) => {
  if (!experiences || experiences.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      {experiences.map((experience, index) => (
        <Box key={index} className="experience" sx={{ mb: 2 }}>
          <ResponsiveCard>
            <CardMedia
              component="img"
              sx={{ width: 120, height: 120, p: 2 }}
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
                </Typography>
                <Typography variant="body1">
                  {experience.summary}
                </Typography>
              </CardContent>
            </Box>
          </ResponsiveCard>
        </Box>
      ))}
    </Box>
  );
};

export default ExperienceSection;
