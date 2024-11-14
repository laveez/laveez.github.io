import React from 'react';
import { Box, Typography } from '@mui/material';

const References = ({ references }) => {
  if (!references || references.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        References
      </Typography>
      {references.map((reference, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h6" component="h4">
            {reference.name}
          </Typography>
          <Typography variant="body1">
            {reference.reference}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default References;
