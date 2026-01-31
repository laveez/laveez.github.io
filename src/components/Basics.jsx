import PlaceIcon from '@mui/icons-material/Place';
import { Avatar, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ProfileLinks from './common/ProfileLinks.jsx';
import KeySkills from './KeySkills.jsx';

const Basics = ({ basics, keySKillDirection, keySkillSpacing }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery('(min-width:1200px)');

  if (!basics) return null;

  const avatarSize = isLargeScreen ? 160 : 120;

  return (
    <Box component="section" sx={{ textAlign: 'center', p: 5 }}>
      <Box sx={{ pb: 3 }}>
        {basics.image && (
          <Avatar
            src={basics.image}
            alt={`${basics.name}'s profile`}
            sx={{
              'width': avatarSize,
              'height': avatarSize,
              'mx': 'auto',
              'border': `4px solid ${theme.palette.primary.main}`,
              'boxShadow': `0 0 20px ${theme.palette.primary.main}40`,
              'transition': 'box-shadow 0.3s ease, transform 0.3s ease',
              '&:hover': {
                boxShadow: `0 0 30px ${theme.palette.primary.main}60`,
                transform: 'scale(1.02)',
              },
            }}
          />
        )}
      </Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {basics.name}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        {basics.label}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {basics.summary}
      </Typography>
      <KeySkills
        skills={basics.keySkills}
        direction={keySKillDirection}
        spacing={keySkillSpacing}
      />
      <Box sx={{ pt: 5 }}>
        <Typography fontSize="large">
          <PlaceIcon fontSize="small" /> {basics.location.city}, {basics.location.region}, {basics.location.countryCode}
        </Typography>
      </Box>
      <Box sx={{ pt: 5, display: 'inline-block' }}>
        <ProfileLinks profiles={basics.profiles} />
      </Box>
    </Box>
  );
};

export default Basics;
