import PlaceIcon from '@mui/icons-material/Place';
import { Avatar, Box, Typography } from '@mui/material';
import { DISPLAY_SX } from '../../theme.js';
import ProfileLinks from './ProfileLinks.jsx';

/**
 * Slim running header for the repeated pages of the PDF. The full Basics block
 * costs about a fifth of a page each time it repeats; this keeps the identity
 * and contact points without spending that space.
 */
const PrintHeader = ({ basics }) => {
  if (!basics) return null;

  return (
    <Box
      className="print-running-header"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {basics.image &&
          <Avatar src={basics.image} alt={`${basics.name}'s profile`} sx={{ width: 38, height: 38 }} />
        }
        <Box>
          <Typography component="p" sx={{ ...DISPLAY_SX, fontSize: '1.1rem' }}>
            {basics.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            {basics.label}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '0.72rem' }}>
          <PlaceIcon sx={{ fontSize: 14 }} />
          {basics.location.city}, {basics.location.countryCode}
        </Typography>
        <ProfileLinks profiles={basics.profiles} />
      </Box>
    </Box>
  );
};

export default PrintHeader;
