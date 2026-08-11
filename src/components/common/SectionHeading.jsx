import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { DISPLAY_SX } from '../../theme.js';
import { textReveal } from '../animations/variants.js';
import TextIcon from './TextIcon.jsx';

const MotionBox = motion.create(Box);

const splitTitle = title => {
  const [ head, ...rest ] = title.split(' ');
  return [ head, rest.join(' ') ];
};

const DisplayHeading = ({ title }) => {
  const [ head, tail ] = splitTitle(title);

  return (
    <MotionBox
      component="header"
      variants={textReveal}
      initial="hidden"
      animate="visible"
      className="section-display-heading"
      sx={{ mb: { xs: 3, lg: 4 } }}
    >
      <Typography
        component="h2"
        sx={{ ...DISPLAY_SX, fontSize: 'clamp(2.25rem, 5.2vw, 4.5rem)', color: 'text.primary' }}
      >
        <Box component="span" sx={{ display: 'block' }}>{head}</Box>
        {tail && (
          <Box component="span" className="heading-ghost" sx={{ display: 'block', color: 'ghost' }}>
            {tail}
          </Box>
        )}
      </Typography>
    </MotionBox>
  );
};

const SectionHeading = ({ title, variant = 'section', icon }) => {
  if (variant === 'display') return <DisplayHeading title={title} />;

  return (
    <Box className="section-heading-row" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
      {icon ? (
        <Box sx={{ 'display': 'flex', 'color': 'accentText', '& svg': { fontSize: 24, display: 'block' } }}>
          <TextIcon name={icon} />
        </Box>
      ) : (
        <Box
          className="no-display-on-print"
          sx={{ width: 18, height: 2, borderRadius: 1, backgroundColor: 'primary.main' }}
        />
      )}
      <Typography
        component="h3"
        className="section-heading"
        sx={{
          ...DISPLAY_SX,
          // DISPLAY_SX ships line-height 0.92 for the huge display type; here it makes
          // the line box shorter than the glyphs, so flex centring misaligns the icon
          lineHeight: 1,
          fontSize: '0.8rem',
          letterSpacing: '0.14em',
          color: 'text.secondary',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
