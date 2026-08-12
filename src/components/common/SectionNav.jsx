import { motion } from 'framer-motion';
import { Box, ButtonBase, Typography } from '@mui/material';
import { RADIUS } from '../../theme.js';
import TextIcon from './TextIcon.jsx';

const NavPill = ({ section, active, onClick }) => (
  <ButtonBase
    onClick={onClick}
    aria-current={active ? 'page' : undefined}
    sx={{
      'position': 'relative',
      'display': 'flex',
      'alignItems': 'center',
      'gap': { lg: 0.75, xl: 1 },
      'px': { lg: 1.25, xl: 2 },
      'py': 1.25,
      'borderRadius': `${RADIUS.pill}px`,
      'color': active ? 'primary.contrastText' : 'text.secondary',
      'minWidth': 0,
      '&:hover': { color: active ? 'primary.contrastText' : 'text.primary' },
    }}
  >
    {active && (
      <Box
        component={motion.span}
        layoutId="nav-pill"
        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
        sx={{
          position: 'absolute',
          inset: 0,
          borderRadius: `${RADIUS.pill}px`,
          backgroundColor: 'primary.main',
        }}
      />
    )}
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
      <Box sx={{ 'display': 'flex', 'fontSize': 18, '& svg': { fontSize: 18 } }}>
        <TextIcon name={section.icon} />
      </Box>
      <Typography
        noWrap
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: { lg: '0.62rem', xl: '0.72rem' },
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        {section.label}
      </Typography>
    </Box>
  </ButtonBase>
);

const SectionNav = ({ sections, activeTab, onChange, children }) => (
  <Box
    component="nav"
    aria-label="Resume sections"
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 0.5,
      p: 0.75,
      mb: 3,
      borderRadius: `${RADIUS.pill}px`,
      backgroundColor: 'background.paper',
      border: theme => `1px solid ${theme.palette.line}`,
    }}
  >
    {sections.map((section, index) => (
      <NavPill
        key={section.label}
        section={section}
        active={index === activeTab}
        onClick={() => onChange(index)}
      />
    ))}
    {children}
  </Box>
);

export default SectionNav;
