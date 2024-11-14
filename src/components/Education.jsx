import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Education = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Education
      </Typography>
      {education.map((school, index) => (
        <Box key={index} className="education" sx={{ mb: 2 }}>
          <Typography variant="h6" component="h3">
            {school.studyType}{school.area && school.studyType ? ' in ' : ''}{school.area}
          </Typography>
          <Link href={school.url} variant="body1">
            {school.institution}
          </Link>
          <Typography variant="body2" color="textSecondary">
            {school.startDate} - {school.endDate}
          </Typography>
          <Typography variant="body1">
            {school.summary}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Education;
