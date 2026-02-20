import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Stack, Typography, useTheme } from '@mui/material';
import { MotionLink, StaggerContainer } from '../animations/index.js';
import GitLabIcon from './GitLabIcon.jsx';

const ProfileLinks = ({ profiles, showHome = false }) => {
  const theme = useTheme();

  return (
    <StaggerContainer fast>
      <Stack direction="row" spacing={2} alignItems="center">
        {showHome && (
          <MotionLink href="/" target="_self" sx={{ color: theme.palette.text.primary }}>
            <HomeIcon fontSize="large"/>
          </MotionLink>
        )}
        {profiles.map(profile => (
          <MotionLink
            key={profile.network}
            href={profile.url}
            className="print-style link-print-style"
            sx={{ color: theme.palette.text.primary }}
          >
            {profile.network === 'GitHub' ? <GitHubIcon fontSize="large" /> :
              profile.network === 'LinkedIn' ? <LinkedInIcon fontSize="large" /> :
                profile.network === 'GitLab' ? <GitLabIcon sx={{ fontSize: 35, color: theme.palette.text.primary }}/> :
                  profile.network}
            <Typography
              variant="body1"
              className="display-block-on-print"
              sx={{ display: 'none' }}
            >
              {profile.username}
            </Typography>
          </MotionLink>
        ))}
      </Stack>
    </StaggerContainer>
  );
};

export default ProfileLinks;
