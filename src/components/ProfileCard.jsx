import { useLocation } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Avatar, Box, ThemeProvider, Typography } from '@mui/material';
import createAppTheme, { DISPLAY_SX, RADIUS } from '../theme.js';
import { BANNER_SIZE, CARD_SIZE } from './common/cardSize.js';

const frameSx = {
  boxSizing: 'border-box',
  overflow: 'hidden',
  backgroundColor: 'background.default',
  color: 'text.primary',
};

const Label = ({ children, sx }) => (
  <Typography
    sx={{
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 21,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'accentText',
      ...sx,
    }}
  >
    {children}
  </Typography>
);

const Tagline = ({ children, sx }) => (
  <Typography sx={{ color: 'text.secondary', fontSize: 29, lineHeight: 1.35, ...sx }}>
    {children}
  </Typography>
);

const SitePill = ({ url, sx }) => (
  <Box
    sx={{
      display: 'inline-flex',
      flexShrink: 0,
      alignItems: 'center',
      gap: '10px',
      px: '30px',
      py: '12px',
      borderRadius: `${RADIUS.pill}px`,
      backgroundColor: 'primary.main',
      color: 'primary.contrastText',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 25,
      fontWeight: 600,
      ...sx,
    }}
  >
    {new URL(url).host}
    <ArrowForwardIcon sx={{ fontSize: 28 }} />
  </Box>
);

// For link previews, where nothing else shows who this is
const Card = ({ basics }) => (
  <Box
    data-profile-card="card"
    sx={{ ...CARD_SIZE, ...frameSx, display: 'flex', alignItems: 'center', gap: '72px', px: '88px' }}
  >
    <Avatar
      src={basics.image}
      alt=""
      sx={{
        width: 268,
        height: 268,
        flexShrink: 0,
        border: theme => `5px solid ${theme.palette.primary.main}`,
        boxShadow: theme => `0 0 0 14px ${theme.palette.primary.main}12`,
      }}
    />
    <Box sx={{ minWidth: 0 }}>
      <Typography component="h1" sx={{ ...DISPLAY_SX, fontSize: 82 }}>
        {basics.name.split(' ').map(part =>
          <Box component="span" key={part} sx={{ display: 'block' }}>{part}</Box>)}
      </Typography>
      <Label sx={{ mt: '22px' }}>{basics.label}</Label>
      <Tagline sx={{ mt: '20px' }}>{basics.tagline}</Tagline>
      <SitePill url={basics.url} sx={{ mt: '34px' }} />
    </Box>
  </Box>
);

// For a README: no photo, since the profile page around it already shows one
const Banner = ({ basics }) => (
  <Box
    data-profile-card="banner"
    sx={{ ...BANNER_SIZE, ...frameSx, display: 'flex', flexDirection: 'column', justifyContent: 'center', px: '72px' }}
  >
    <Typography component="h1" sx={{ ...DISPLAY_SX, fontSize: 78 }}>
      {basics.name}
    </Typography>
    <Label sx={{ mt: '20px' }}>{basics.label}</Label>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', mt: '22px' }}>
      <Tagline>{basics.tagline}</Tagline>
      <SitePill url={basics.url} />
    </Box>
  </Box>
);

// Never linked from the site: card.js screenshots this route into the link-preview
// and README images, so every size here is in fixed pixels
const ProfileCard = ({ basics }) => {
  const params = new URLSearchParams(useLocation().search);
  const Shape = params.get('shape') === 'banner' ? Banner : Card;

  return (
    <ThemeProvider theme={createAppTheme(params.get('theme') !== 'light')}>
      <Shape basics={basics} />
    </ThemeProvider>
  );
};

export default ProfileCard;
