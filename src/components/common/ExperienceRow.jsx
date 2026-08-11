import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Link, Typography } from '@mui/material';
import { RADIUS } from '../../theme.js';
import { AnimatedItem } from '../animations/index.js';
import Duration from './Duration.jsx';
import { DATE_FORMAT } from './enums.js';
import FormattedDateRange from './FormattedDateRange.jsx';

const entityName = experience =>
  experience.name || experience.organization || experience.institution;

const DateLine = ({ experience }) => {
  if (experience.dateStringOverride) return experience.dateStringOverride;

  if (experience.institution) {
    return (
      <FormattedDateRange
        startDate={experience.startDate}
        endDate={experience.endDate}
        format={DATE_FORMAT.YEAR}
      />
    );
  }

  return (
    <>
      <FormattedDateRange startDate={experience.startDate} endDate={experience.endDate} />
      {' '}
      <Duration startDate={experience.startDate} endDate={experience.endDate} />
    </>
  );
};

const ExperienceRow = ({ experience, isLast, titleComponent = 'h4' }) => {
  const name = entityName(experience);

  return (
    <AnimatedItem>
      <Box
        className="experience"
        sx={{
          'display': 'flex',
          'alignItems': 'flex-start',
          'gap': { xs: 1.75, lg: 2.5 },
          'py': { xs: 2.5, lg: 3 },
          'borderBottom': theme => isLast ? 'none' : `1px solid ${theme.palette.line}`,
          '&:hover .row-arrow': { color: 'accentText' },
          '&:hover .row-logo': { borderColor: theme => theme.palette.lineStrong },
        }}
      >
        <Box
          className="row-logo"
          component="img"
          src={experience.logoUrl}
          alt={`${name} logo`}
          sx={{
            width: { xs: 46, lg: 58 },
            height: { xs: 46, lg: 58 },
            p: 1,
            flexShrink: 0,
            objectFit: 'contain',
            borderRadius: `${RADIUS.tile}px`,
            backgroundColor: 'surfaceRaised',
            border: theme => `1px solid ${theme.palette.line}`,
            transition: 'border-color 0.18s ease-out',
          }}
        />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="h6" component={titleComponent} sx={{ fontSize: { xs: '1rem', lg: '1.15rem' } }}>
            {experience.position || experience.studyType}
            {experience.area && experience.studyType ? ' in ' : ''}
            {experience.area}
          </Typography>
          <Link href={experience.url} target="_blank" rel="noopener noreferrer" variant="body2">
            {name}
          </Link>
          <Typography variant="body2" sx={{ color: 'inkFaint', mt: 0.25 }}>
            <DateLine experience={experience} />
          </Typography>
          {experience.summary && (
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.25, lineHeight: 1.65 }}>
              {experience.summary}
            </Typography>
          )}
        </Box>
        {experience.url && (
          <Link
            className="no-display-on-print"
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${name}`}
            sx={{ display: 'flex', flexShrink: 0, mt: 0.5 }}
          >
            <ArrowOutwardIcon
              className="row-arrow"
              sx={{ fontSize: 18, color: 'inkFaint', transition: 'color 0.18s ease-out' }}
            />
          </Link>
        )}
      </Box>
    </AnimatedItem>
  );
};

export default ExperienceRow;
