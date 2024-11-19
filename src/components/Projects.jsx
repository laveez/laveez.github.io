import React from 'react';
import { Box, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import Duration from './common/Duration.jsx';
import FormattedDateRange from './common/FormattedDateRange.jsx';

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      {projects.map((project, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h5" component="h3">
            {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <FormattedDateRange startDate={project.startDate} endDate={project.endDate}/>
            {' '}
            <Duration startDate={project.startDate} endDate={project.endDate}/>
          </Typography>
          <Typography variant="body1" paragraph>
            {project.description}
          </Typography>

          {project.highlights.length > 0 && (
            <List>
              {project.highlights.map((highlight, i) => (
                <ListItem key={i} sx={{ pl: 0 }}>
                  <ListItemText primary={highlight} />
                </ListItem>
              ))}
            </List>
          )}

          {project.keywords.length > 0 && (
            <Typography variant="body2" paragraph>
              <strong>Keywords:</strong> {project.keywords.join(', ')}
            </Typography>
          )}

          {project.url && (
            <Typography variant="body2" paragraph>
              <strong>URL:</strong> <Link href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</Link>
            </Typography>
          )}

          {project.roles.length > 0 && (
            <Typography variant="body2" paragraph>
              <strong>Roles:</strong> {project.roles.join(', ')}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
