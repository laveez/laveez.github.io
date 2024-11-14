import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Skills
      </Typography>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index} sx={{ mb: 1 }}>
            <ListItemText
              primary={<Typography variant="h6">{skill.name}</Typography>}
              secondary={skill.keywords.join(', ')}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Skills;
