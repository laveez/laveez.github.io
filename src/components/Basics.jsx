import { motion } from 'framer-motion';
import PlaceIcon from '@mui/icons-material/Place';
import { Avatar, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { avatarReveal, staggerContainer, textReveal } from './animations/variants.js';
import ProfileLinks from './common/ProfileLinks.jsx';
import KeySkills from './KeySkills.jsx';

const MotionAvatar = motion.create(Avatar);
const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const Basics = ({ basics, keySKillDirection, keySkillSpacing }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery('(min-width:1200px)');

  if (!basics) return null;

  const avatarSize = isLargeScreen ? 160 : 120;

  return (
    <MotionBox
      component="section"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      sx={{ textAlign: 'center', p: 5 }}
    >
      <Box sx={{ pb: 3 }}>
        {basics.image && (
          <MotionAvatar
            src={basics.image}
            alt={`${basics.name}'s profile`}
            variants={avatarReveal}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 40px ${theme.palette.primary.main}80`,
            }}
            sx={{
              width: avatarSize,
              height: avatarSize,
              mx: 'auto',
              border: `4px solid ${theme.palette.primary.main}`,
              boxShadow: `0 0 20px ${theme.palette.primary.main}40`,
              cursor: 'pointer',
            }}
          />
        )}
      </Box>
      <MotionTypography
        variant="h4"
        component="h1"
        gutterBottom
        variants={textReveal}
      >
        {basics.name}
      </MotionTypography>
      <MotionTypography
        variant="h6"
        component="h2"
        gutterBottom
        variants={textReveal}
      >
        {basics.label}
      </MotionTypography>
      <MotionTypography
        variant="body1"
        gutterBottom
        variants={textReveal}
      >
        {basics.summary}
      </MotionTypography>
      <KeySkills
        skills={basics.keySkills}
        direction={keySKillDirection}
        spacing={keySkillSpacing}
      />
      <MotionBox sx={{ pt: 5 }} variants={textReveal}>
        <Typography fontSize="large">
          <PlaceIcon fontSize="small" /> {basics.location.city}, {basics.location.region}, {basics.location.countryCode}
        </Typography>
      </MotionBox>
      <MotionBox sx={{ pt: 5, display: 'inline-block' }} variants={textReveal}>
        <ProfileLinks profiles={basics.profiles} />
      </MotionBox>
    </MotionBox>
  );
};

export default Basics;
