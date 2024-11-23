import PlaceIcon from '@mui/icons-material/Place';
import { Avatar, Box, Typography } from '@mui/material';
import ProfileLinks from './common/ProfileLinks.jsx';
import KeySkills from './KeySkills.jsx';

const Basics = ({ basics }) => {
  if (!basics) return null;

  return (
    <Box component="section" sx={{ textAlign: 'center', p: 5 }}>
      <Box sx={{ pb: 3 }}>
        {basics.image && (
          <Avatar
            src={basics.image}
            alt={`${basics.name}'s profile`}
            sx={{ width: 112, height: 112, mx: 'auto' }}
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
      <KeySkills skills={basics.keySkills} />
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
