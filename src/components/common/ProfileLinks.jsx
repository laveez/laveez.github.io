import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link, Stack, Typography, useTheme } from '@mui/material';
import GitLabIcon from './GitLabIcon.jsx';

const ProfileLinks = ({ profiles, showHome = false }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {showHome && <Link href="/" sx={{ color: theme.palette.text.primary }}>
        <HomeIcon fontSize="large"/>
      </Link>}
      {profiles.map(profile => (
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
              profile.network === 'GitLab' ? <GitLabIcon sx={{ fontSize: 35, color: theme.palette.text.primary }}/> :
                profile.network}
          <Typography
            variant="body1"
            className="profile-username-print-style"
            sx={{ display: 'none' }}
          >
            {profile.username}
          </Typography>
        </Link>
      ))}
    </Stack>
  );
};

export default ProfileLinks;
