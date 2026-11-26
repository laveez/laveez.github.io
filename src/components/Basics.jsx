import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import { Avatar, Box, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { DISPLAY_SX } from '../theme.js';
import { avatarReveal, staggerContainer, textReveal } from './animations/variants.js';
import ProfileLinks from './common/ProfileLinks.jsx';
import KeySkills from './KeySkills.jsx';

const MotionAvatar = motion.create(Avatar);
const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const Basics = ({ basics, keySKillDirection, keySkillSpacing, linkHome = false }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery('(min-width:1200px)');

  if (!basics) return null;

  const avatarSize = isLargeScreen ? 150 : 116;
  // The name below is the link people and screen readers use; the photo is a second, pointer-only way in
  const homeLink = linkHome ? { 'component': RouterLink, 'to': '/', 'tabIndex': -1, 'aria-hidden': true } : {};

  return (
    <MotionBox
      component="section"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      sx={{ textAlign: 'center', p: { xs: 3, lg: 4 } }}
    >
      {basics.image && (
        <MotionAvatar
          src={basics.image}
          alt={`${basics.name}'s profile`}
          variants={avatarReveal}
          {...homeLink}
          whileHover={{ scale: 1.04 }}
          sx={{
            width: avatarSize,
            height: avatarSize,
            mx: 'auto',
            mb: 3,
            border: `3px solid ${theme.palette.primary.main}`,
            boxShadow: `0 0 0 8px ${theme.palette.primary.main}12`,
            cursor: 'pointer',
          }}
        />
      )}
      <MotionTypography
        component="h1"
        variants={textReveal}
        sx={{ ...DISPLAY_SX, fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', mb: 1.5 }}
      >
        {linkHome ?
          <Link component={RouterLink} to="/" underline="none" sx={{ color: 'inherit' }}>{basics.name}</Link> :
          basics.name}
      </MotionTypography>
      <MotionTypography
        component="h2"
        variants={textReveal}
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'accentText',
          mb: 2.5,
        }}
      >
        {basics.label}
      </MotionTypography>
      <MotionTypography
        variant="body2"
        variants={textReveal}
        sx={{ color: 'text.secondary', lineHeight: 1.7, whiteSpace: 'pre-line' }}
      >
        {[ basics.summary, basics.tagline ].filter(Boolean).join(' ')}
      </MotionTypography>
      <KeySkills
        skills={basics.keySkills}
        direction={keySKillDirection}
        spacing={keySkillSpacing}
      />
      <MotionBox
        variants={textReveal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0.75,
          mt: 3,
          color: 'text.secondary',
        }}
      >
        <PlaceIcon sx={{ fontSize: 18, color: 'accentText' }} />
        <Typography variant="body2">
          {basics.location.city}, {basics.location.region}, {basics.location.countryCode}
        </Typography>
      </MotionBox>
      <MotionBox
        variants={textReveal}
        sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}
      >
        <ProfileLinks profiles={basics.profiles} />
      </MotionBox>
    </MotionBox>
  );
};

export default Basics;
