import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const Interests = ({ interests }) => {
  if (!interests || interests.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Interests
      </Typography>
      <List>
        {interests.map((interest, index) => (
          <ListItem key={index} sx={{ mb: 1 }}>
            <ListItemText
              primary={<Typography variant="h6">{interest.name}</Typography>}
              secondary={interest.keywords.join(', ')}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Interests;
