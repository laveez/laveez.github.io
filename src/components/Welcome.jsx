import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DownloadIcon from '@mui/icons-material/Download';
import LightModeIcon from '@mui/icons-material/LightMode';
import PlaceIcon from '@mui/icons-material/Place';
import { Avatar, Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { DISPLAY_SX, RADIUS } from '../theme.js';
import { avatarReveal, staggerContainer, textReveal } from './animations/variants.js';
import { RESUME_PDF } from './common/enums.js';
import ProfileLinks from './common/ProfileLinks.jsx';

const MotionAvatar = motion.create(Avatar);
const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const actionSx = { borderRadius: `${RADIUS.pill}px`, px: 3.5, py: 1.25, fontSize: '1rem' };

const Welcome = ({ basics, welcome, darkTheme, setDarkTheme }) => {
  const theme = useTheme();

  if (!basics) return null;

  return (
    <Box sx={{ position: 'relative' }}>
      <IconButton
        onClick={() => setDarkTheme(!darkTheme)}
        aria-label={darkTheme ? 'Light mode' : 'Dark mode'}
        sx={{ position: 'absolute', top: { xs: 12, lg: 24 }, right: { xs: 12, lg: 24 }, color: 'text.secondary' }}
      >
        {darkTheme ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
      </IconButton>

      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100svh',
          maxWidth: 1080,
          mx: 'auto',
          px: { xs: 2.5, sm: 4 },
          py: { xs: 8, lg: 6 },
        }}
      >
        <MotionBox
          component="section"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          {basics.image && (
            <MotionAvatar
              src={basics.image}
              alt={`${basics.name}'s profile`}
              variants={avatarReveal}
              sx={{
                width: { xs: 128, lg: 176 },
                height: { xs: 128, lg: 176 },
                mb: { xs: 3, lg: 4 },
                border: `3px solid ${theme.palette.primary.main}`,
                boxShadow: `0 0 0 8px ${theme.palette.primary.main}12`,
              }}
            />
          )}
          <MotionTypography
            component="h1"
            variants={textReveal}
            sx={{ ...DISPLAY_SX, fontSize: 'clamp(2.1rem, 7vw, 4.75rem)', mb: { xs: 1.5, lg: 2 } }}
          >
            {basics.name}
          </MotionTypography>
          <MotionTypography
            variants={textReveal}
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: { xs: '0.75rem', lg: '0.85rem' },
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'accentText',
              mb: { xs: 2.5, lg: 3 },
            }}
          >
            {basics.label}
          </MotionTypography>
          {welcome?.intro && (
            <MotionTypography
              variants={textReveal}
              sx={{ maxWidth: 640, color: 'text.secondary', fontSize: { xs: '1rem', lg: '1.1rem' }, lineHeight: 1.7 }}
            >
              {welcome.intro}
            </MotionTypography>
          )}
          <MotionBox
            variants={textReveal}
            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5, mt: { xs: 3.5, lg: 4.5 } }}
          >
            <Button
              component={RouterLink}
              to="/cv"
              variant="contained"
              disableElevation
              endIcon={<ArrowForwardIcon />}
              sx={actionSx}
            >
              View CV
            </Button>
            <Button
              href={RESUME_PDF}
              download
              variant="outlined"
              startIcon={<DownloadIcon />}
              sx={{
                ...actionSx,
                'color': 'text.primary',
                'borderColor': 'lineStrong',
                '&:hover': { color: 'accentText', borderColor: 'accentText', backgroundColor: 'transparent' },
              }}
            >
              Download PDF
            </Button>
          </MotionBox>
          {basics.location && (
            <MotionBox
              variants={textReveal}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.75,
                mt: { xs: 3.5, lg: 4.5 },
                color: 'text.secondary',
              }}
            >
              <PlaceIcon sx={{ fontSize: 18, color: 'accentText' }} />
              <Typography variant="body2">
                {basics.location.city}, {basics.location.region}, {basics.location.countryCode}
              </Typography>
            </MotionBox>
          )}
          <MotionBox variants={textReveal} sx={{ mt: 2.5 }}>
            <ProfileLinks profiles={basics.profiles} />
          </MotionBox>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Welcome;
