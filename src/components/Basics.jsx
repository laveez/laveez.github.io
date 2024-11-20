import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import { Avatar, Box, Link, Stack, Typography, useTheme } from '@mui/material';
import GitLabIcon from './common/GitLabIcon.jsx';

const Basics = ({ basics }) => {
  const theme = useTheme();
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
      <Box sx={{ pt: 2 }}>
        <Typography fontSize="large">
          <PlaceIcon fontSize="small" /> {basics.location.city}, {basics.location.region}, {basics.location.countryCode}
        </Typography>
      </Box>
      <Box sx={{ pt: 2, display: 'inline-block' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          {basics.profiles.map(profile => (
            <Link
              key={profile.network}
              href={profile.url}
              className="print-style link-print-style"
              sx={{ color: theme.palette.text.primary }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.network === 'GitHub' ? <GitHubIcon fontSize="large" /> :
                profile.network === 'LinkedIn' ? <LinkedInIcon fontSize="large" /> :
                  profile.network === 'GitLab' ?
                    <GitLabIcon style={{ fontSize: 35 }} color={theme.palette.text.primary} /> : profile.network}
              <Typography
                variant="body1"
                className="typography-print-style"
                sx={{ display: 'none' }}
              >
                {profile.username}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Basics;
