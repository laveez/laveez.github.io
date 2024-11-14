import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const Languages = ({ languages }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Languages
      </Typography>
      <List>
        {languages.map((language, index) => (
          <ListItem key={index} sx={{ mb: 1 }}>
            <ListItemText
              primary={<Typography variant="h6">{language.language}</Typography>}
              secondary={language.fluency}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Languages;
