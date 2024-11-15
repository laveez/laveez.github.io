import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { calculateDuration } from './utils';

const WorkExperience = ({ work }) => {
  if (!work || work.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Work Experience
      </Typography>
      {work.map((job, index) => (
        <Box key={index} className="job" sx={{ mb: 2 }}>
          <Typography variant="h6" component="h4">
            {job.position} at <Link href={job.url}>{job.name}</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {job.startDate} - {job.endDate || 'Present'} ({calculateDuration(job.startDate, job.endDate)})
          </Typography>
          <Typography variant="body1" paragraph>
            {job.summary}
          </Typography>
          {/*          <Box component="ul" sx={{ pl: 2 }}>
            {job.highlights.map((highlight, i) => (
              <Box component="li" key={i} sx={{ display: 'list-item' }}>
                {highlight}
              </Box>
            ))}
          </Box>*/}
        </Box>
      ))}
    </Box>
  );
};

export default WorkExperience;
