import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import FormattedDate from './common/FormattedDate.jsx';

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
            {publication.name}
          </Typography>
          <Typography variant="body1">
            {publication.summary}
          </Typography>
          <Link href={'#'} variant="body1"> {/* TODO */}
            {publication.publisher}
          </Link>
          <Typography variant="body2" color="textSecondary">
            <FormattedDate date={publication.releaseDate} />
          </Typography>
          <Typography variant="body2">
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
