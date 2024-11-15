import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import { Avatar, Box, Link, Typography, useTheme } from '@mui/material';
import GitLabIcon from '../assets/GitLabIcon.jsx';

const Basics = ({ basics }) => {
  const theme = useTheme();
  if (!basics) return null;

  return (
    <Box component="section" sx={{ textAlign: 'center', p: 2 }}>
      {basics.image && (
        <Avatar
          src={basics.image}
          alt={`${basics.name}'s profile`}
          sx={{ width: 200, height: 200, mx: 'auto' }}
        />
      )}
      <Typography variant="h4" component="h1" gutterBottom>
        {basics.name}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        {basics.label}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {basics.summary}
      </Typography>
      <Box>
        <Link href={`mailto:${basics.email}`} sx={{ mr: 1 }}>
          {basics.email}
        </Link>
        <Link href={basics.url}>{basics.url}</Link>
      </Box>
      <Typography variant="body2" fontSize="large">
        <PlaceIcon fontSize="small" /> {basics.location.city}, {basics.location.region}, {basics.location.countryCode}
      </Typography>
      <Box>
        {basics.profiles.map(profile => (
          <Link key={profile.network} href={profile.url} sx={{ mr: 1, color: theme.palette.text.primary }}>
            {profile.network === 'GitHub' ? <GitHubIcon fontSize="large" /> :
              profile.network === 'LinkedIn' ? <LinkedInIcon fontSize="large" /> :
                profile.network === 'GitLab' ? <GitLabIcon style={{ fontSize: 35 }} color={theme.palette.text.primary} /> : profile.network}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Basics;
