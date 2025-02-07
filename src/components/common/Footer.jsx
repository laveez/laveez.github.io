import { Box, Typography, useTheme } from '@mui/material';
import ProfileLinks from './ProfileLinks.jsx';

const Footer = ({ profiles }) => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      className="no-display-on-print"
      sx={{ textAlign: 'center', p: 3, mt: 1, borderTop: `1px solid ${theme.palette.divider}` }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Niko Muukkonen / Laveez
      </Typography>
      <Box sx={{ pt: 2, display: 'inline-block' }}>
        <ProfileLinks profiles={profiles} showHome={true} />
      </Box>
    </Box>
  );
};

export default Footer;
