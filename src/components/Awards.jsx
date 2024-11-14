import React from 'react';
import { Box, Typography } from '@mui/material';

const Awards = ({ awards }) => {
  if (!awards || awards.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Awards
      </Typography>
      {awards.map((award, index) => (
        <Box key={index} className="award" sx={{ mb: 2 }}>
          <Typography variant="h6" component="h4">
            {award.title} - {award.awarder}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {award.date}
          </Typography>
          <Typography variant="body1">
            {award.summary}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Awards;
