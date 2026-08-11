import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Card, CardContent, Grid, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import { RADIUS } from '../theme.js';
import { AnimatedItem, AnimatedSection, StaggerContainer } from './animations/index.js';
import Duration from './common/Duration.jsx';
import FormattedDateRange from './common/FormattedDateRange.jsx';
import KeywordChips from './common/KeywordChips.jsx';
import SectionHeading from './common/SectionHeading.jsx';
import TextIcon from './common/TextIcon.jsx';

const GROUPS = [
  { key: 'work', title: 'Work Projects', icon: 'WORK' },
  { key: 'volunteer', title: 'Volunteer Projects', icon: 'VOLUNTEER' },
  { key: 'personal', title: 'Personal Projects', icon: 'PERSON' },
];

const shortenUrl = url => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

const ProjectCard = ({ project, stretch = false }) => {
  const full = stretch ? '100%' : undefined;

  return (
    <AnimatedItem style={{ height: full }}>
      <Box className="project" sx={{ height: full, mb: stretch ? 0 : 2 }}>
        <Card
          sx={{
            'display': 'flex',
            'width': '100%',
            'height': full,
            '&:hover': { borderColor: theme => theme.palette.lineStrong },
            '&:hover .project-arrow': { color: 'accentText' },
          }}
        >
          <CardContent sx={{ p: { xs: 2, lg: 2.25 }, width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.25 }}>
              <Box
                sx={{
                  'display': 'flex',
                  'flexShrink': 0,
                  'alignSelf': 'stretch',
                  'alignItems': 'center',
                  'p': 1,
                  'borderRadius': `${RADIUS.tile}px`,
                  'backgroundColor': 'surfaceRaised',
                  'border': theme => `1px solid ${theme.palette.line}`,
                  'color': 'accentText',
                  '& svg': { fontSize: 26, display: 'block' },
                }}
              >
                <TextIcon name={project.icon} />
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h6" component="h4" sx={{ fontSize: '1rem' }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'inkFaint', fontSize: '0.78rem' }}>
                  <FormattedDateRange startDate={project.startDate} endDate={project.endDate} />
                  {' '}
                  <Duration startDate={project.startDate} endDate={project.endDate} />
                  {project.roles.length > 0 && ` · ${project.roles.join(', ')}`}
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 1.25 }}>
              {project.description}
            </Typography>

            {project.highlights.length > 0 && (
              <List dense disablePadding sx={{ mb: 1.25 }}>
                {project.highlights.map((highlight, i) => (
                  <ListItem key={i} sx={{ pl: 0 }}>
                    <ListItemText primary={highlight} />
                  </ListItem>
                ))}
              </List>
            )}

            <KeywordChips keywords={project.keywords} dense />

            {project.urls && project.urls.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', columnGap: 1.5, rowGap: 0.25, mt: 1.25 }}>
                {project.urls.map(url => (
                  <Link
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.4, fontSize: '0.75rem' }}
                  >
                    <ArrowOutwardIcon className="project-arrow" sx={{ fontSize: 13 }} />
                    {shortenUrl(url)}
                  </Link>
                ))}
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </AnimatedItem>
  );
};

const ProjectGrid = ({ projects, dualColumns }) => {
  if (dualColumns) {
    const columns = [
      projects.filter((_, i) => i % 2 === 0),
      projects.filter((_, i) => i % 2 !== 0),
    ];
    return (
      <Grid container spacing={2}>
        {columns.map((column, i) => (
          <Grid size={6} key={i}>
            {column.map((project, index) =>
              <ProjectCard key={project.name || index} project={project} />)}
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      {projects.map((project, index) => (
        <Grid key={project.name || index} size={{ xs: 12, sm: 6 }}>
          <ProjectCard project={project} stretch />
        </Grid>
      ))}
    </Grid>
  );
};

const Projects = ({ projects, dualColumns = false, hideHeading = false }) => {
  if (!projects || projects.length === 0) return null;

  const groups = GROUPS
    .map(group => ({ ...group, items: projects.filter(p => p.category === group.key) }))
    .filter(group => group.items.length > 0);

  // Anything with an unrecognised category is still shown rather than silently dropped
  const ungrouped = projects.filter(p => !GROUPS.some(g => g.key === p.category));
  if (ungrouped.length > 0) groups.push({ key: 'other', title: 'Other Projects', icon: 'FOLDER', items: ungrouped });

  return (
    <AnimatedSection sx={{ mb: 4 }}>
      {!hideHeading && <SectionHeading title="Projects" icon="FOLDER" />}
      <StaggerContainer>
        {groups.map(group => (
          <Box key={group.key} className="project-group" sx={{ mb: 3 }}>
            <SectionHeading title={group.title} icon={group.icon} />
            <ProjectGrid projects={group.items} dualColumns={dualColumns} />
          </Box>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default Projects;
