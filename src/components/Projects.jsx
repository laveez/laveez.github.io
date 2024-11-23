import React from 'react';
import { Box, Card, CardContent, Link, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import Duration from './common/Duration.jsx';
import FormattedDateRange from './common/FormattedDateRange.jsx';
import TextIcon from './common/TextIcon.jsx';

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      {projects.map((project, index) => (
        <Box key={index} className="project" sx={{ mb: 2 }}>
          <Card variant="outlined" sx={{ display: 'flex', width: '100%', borderRadius: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextIcon name={project.icon} />
                  <Typography variant="h6" component="h3">
                    {project.name}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="textSecondary">
                  <FormattedDateRange startDate={project.startDate} endDate={project.endDate} />
                  {' '}
                  <Duration startDate={project.startDate} endDate={project.endDate} />
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

                {project.roles.length > 0 && (
                  <Typography variant="body2" paragraph>
                    <strong>Roles:</strong> {project.roles.join(', ')}
                  </Typography>
                )}

                {project.keywords.length > 0 && (
                  <Typography variant="body2" paragraph>
                    <strong>Keywords:</strong> {project.keywords.join(', ')}
                  </Typography>
                )}

                {project.urls && project.urls.length > 0 && (
                  <Typography variant="body2" paragraph>
                    {project.urls.map((url, i) => (
                      <Link
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ display: 'block' }}
                      >
                        {url}
                      </Link>
                    ))}
                  </Typography>
                )}
              </CardContent>
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
