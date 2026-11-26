import { useLocation } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Avatar, Box, ThemeProvider, Typography } from '@mui/material';
import createAppTheme, { DISPLAY_SX, RADIUS } from '../theme.js';
import { CARD_SIZE } from './common/enums.js';

// Never linked from the site: card.js screenshots this route into the link-preview
// and README images, so every size here is in fixed pixels
const ProfileCard = ({ basics, welcome }) => {
  const { search } = useLocation();
  const theme = createAppTheme(new URLSearchParams(search).get('theme') !== 'light');

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          ...CARD_SIZE,
          display: 'flex',
          alignItems: 'center',
          gap: '72px',
          px: '88px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          backgroundColor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Avatar
          src={basics.image}
          alt=""
          sx={{
            width: 268,
            height: 268,
            flexShrink: 0,
            border: `5px solid ${theme.palette.primary.main}`,
            boxShadow: `0 0 0 14px ${theme.palette.primary.main}12`,
          }}
        />
        <Box sx={{ minWidth: 0 }}>
          <Typography component="h1" sx={{ ...DISPLAY_SX, fontSize: 82 }}>
            {basics.name.split(' ').map(part =>
              <Box component="span" key={part} sx={{ display: 'block' }}>{part}</Box>)}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 21,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'accentText',
              mt: '22px',
            }}
          >
            {basics.label}
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: 29, lineHeight: 1.35, mt: '20px' }}>
            {welcome.tagline}
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              mt: '34px',
              px: '30px',
              py: '12px',
              borderRadius: `${RADIUS.pill}px`,
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              fontSize: 25,
              fontWeight: 600,
            }}
          >
            {new URL(basics.url).host}
            <ArrowForwardIcon sx={{ fontSize: 28 }} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ProfileCard;
