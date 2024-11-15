import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { calculateDuration } from './utils';

const Volunteer = ({ volunteer }) => {
  if (!volunteer || volunteer.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Volunteer
      </Typography>
      {volunteer.map((vol, index) => (
        <Box key={index} className="volunteer" sx={{ mb: 2 }}>
          <Typography variant="h6" component="h4">
            {vol.position} at <Link href={vol.url}>{vol.organization}</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {vol.startDate} - {vol.endDate || 'Present'} ({calculateDuration(vol.startDate, vol.endDate)})
          </Typography>
          <Typography variant="body1" paragraph>
            {vol.summary}
          </Typography>
          {/*          <List>
            {vol.highlights.map((highlight, i) => (
              <ListItem key={i} sx={{ display: 'list-item', pl: 0 }}>
                {highlight}
              </ListItem>
            ))}
          </List>*/}
        </Box>
      ))}
    </Box>
  );
};

export default Volunteer;
