import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Link, Stack, Typography, useTheme } from '@mui/material';
import GitLabIcon from './GitLabIcon.jsx';

const Footer = ({ profiles }) => {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ textAlign: 'center', p: 3, mt: 5, borderTop: `1px solid ${theme.palette.divider}` }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 Niko Muukkonen / Laveez
      </Typography>
      <Box sx={{ pt: 2, display: 'inline-block' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          {profiles.map(profile => (
            <Link
              key={profile.network}
              href={profile.url}
              sx={{ color: theme.palette.text.primary }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.network === 'GitHub' ? <GitHubIcon fontSize="large" /> :
                profile.network === 'LinkedIn' ? <LinkedInIcon fontSize="large" /> :
                  profile.network === 'GitLab' ?
                    <GitLabIcon style={{ fontSize: 35 }} color={theme.palette.text.primary} /> : profile.network}
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
