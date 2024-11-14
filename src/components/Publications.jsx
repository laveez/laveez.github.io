import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Publications = ({ publications }) => {
  if (!publications || publications.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Publications
      </Typography>
      {publications.map((publication, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h5" component="h3">
            {publication.name} - {publication.publisher}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {publication.releaseDate}
          </Typography>
          <Typography variant="body1" paragraph>
            {publication.summary}
          </Typography>
          <Typography variant="body2" paragraph>
            <Link href={publication.url} target="_blank" rel="noopener noreferrer">
              {publication.url}
            </Link>
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Publications;
