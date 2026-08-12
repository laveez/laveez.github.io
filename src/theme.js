import { createTheme } from '@mui/material';

// Neutral greys throughout - no warm/brown cast in the greyscale ramp.
// Both ink alphas carry body-sized text, so they are set at the weakest value that
// still clears 4.5:1 against the lightest (dark mode) / darkest (light mode) surface
// they sit on, then separated far enough to stay readable as two distinct levels.
const DARK = {
  primary: '#E7FE4D',
  // Same accent, darkened only where it carries text: #9BB201 on white is 2.4:1
  accentText: '#E7FE4D',
  page: '#141414',
  surface: '#1C1C1C',
  surfaceRaised: '#232323',
  ink: '#F4F4F4',
  inkMuted: 'rgba(244, 244, 244, 0.70)',
  inkFaint: 'rgba(244, 244, 244, 0.50)',
  line: 'rgba(244, 244, 244, 0.09)',
  lineStrong: 'rgba(244, 244, 244, 0.18)',
};

const LIGHT = {
  primary: '#9BB201',
  accentText: '#6B7A00',
  page: '#F6F6F6',
  surface: '#FFFFFF',
  surfaceRaised: '#F0F0F0',
  ink: '#141414',
  inkMuted: 'rgba(20, 20, 20, 0.80)',
  inkFaint: 'rgba(20, 20, 20, 0.60)',
  line: 'rgba(20, 20, 20, 0.12)',
  lineStrong: 'rgba(20, 20, 20, 0.24)',
};

export const RADIUS = { card: 16, tile: 12, pill: 999 };

export const DISPLAY_SX = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '-0.02em',
  lineHeight: 0.92,
};

const createAppTheme = darkTheme => {
  const t = darkTheme ? DARK : LIGHT;

  return createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light',
      primary: { main: t.primary, contrastText: '#141414' },
      background: { default: t.page, paper: t.surface },
      text: { primary: t.ink, secondary: t.inkMuted, disabled: t.inkFaint },
      divider: t.line,
      accentText: t.accentText,
      surfaceRaised: t.surfaceRaised,
      line: t.line,
      lineStrong: t.lineStrong,
      inkFaint: t.inkFaint,
    },
    shape: { borderRadius: RADIUS.card },
    typography: {
      fontFamily: 'Open Sans, Montserrat, sans-serif',
      h1: DISPLAY_SX,
      h2: DISPLAY_SX,
      h3: { ...DISPLAY_SX, lineHeight: 1 },
      h4: { ...DISPLAY_SX, lineHeight: 1 },
      h6: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, letterSpacing: '-0.01em' },
      button: { textTransform: 'none', fontWeight: 600, letterSpacing: 0 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          'body': { backgroundColor: t.page },
          // Dark text on both accent fills; white on the light-mode green is 2.4:1
          '::selection': { background: t.primary, color: '#141414' },
        },
      },
      MuiCard: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            'backgroundColor': t.surface,
            'backgroundImage': 'none',
            'border': `1px solid ${t.line}`,
            'borderRadius': RADIUS.card,
            'boxShadow': 'none',
            'transition': 'border-color 0.18s ease-out, background-color 0.18s ease-out',
            '&:focus-visible': {
              outline: 'none',
              borderColor: t.primary,
              boxShadow: `0 0 0 2px ${t.primary}55`,
            },
          },
        },
      },
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: { backgroundImage: 'none' },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: t.surfaceRaised,
            border: `1px solid ${t.line}`,
            borderRadius: RADIUS.pill,
            color: t.inkMuted,
            fontSize: '0.75rem',
            fontWeight: 500,
            height: 26,
          },
        },
      },
      MuiLink: {
        defaultProps: { underline: 'none' },
        styleOverrides: {
          root: {
            'color': t.accentText,
            'textDecorationColor': `${t.accentText}55`,
            'transition': 'text-decoration-color 0.15s ease-out',
            '&:hover': { textDecoration: 'underline', textDecorationColor: t.accentText },
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            'transition': 'background-color 0.15s ease-out, color 0.15s ease-out',
            '&:focus-visible': {
              outline: 'none',
              boxShadow: `0 0 0 2px ${t.primary}, 0 0 14px ${t.primary}55`,
            },
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: t.surface,
            border: `1px solid ${t.line}`,
            borderRadius: RADIUS.tile,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            'borderRadius': 8,
            'margin': '2px 6px',
            '&:hover': { backgroundColor: `${t.primary}14` },
          },
        },
      },
    },
  });
};

export default createAppTheme;
