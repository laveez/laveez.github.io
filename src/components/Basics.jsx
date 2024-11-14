import React from 'react';
import { Avatar, Box, Link, Typography } from '@mui/material';

const Basics = ({ basics }) => {
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
      <Typography variant="body1" paragraph>
        {basics.summary}
      </Typography>
      <Typography variant="body2" paragraph>
        {basics.location.city}, {basics.location.region}, {basics.location.countryCode}
      </Typography>
      <Box>
        <Link href={`mailto:${basics.email}`} sx={{ mr: 1 }}>
          {basics.email}
        </Link>
        <Link href={basics.url}>{basics.url}</Link>
      </Box>
      <Box>
        {basics.profiles.map(profile => (
          <Link key={profile.network} href={profile.url} sx={{ mr: 1 }}>
            {profile.network}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Basics;
