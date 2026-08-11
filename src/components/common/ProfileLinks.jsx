import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Stack, Typography } from '@mui/material';
import { RADIUS } from '../../theme.js';
import { MotionLink, StaggerContainer } from '../animations/index.js';
import GitLabIcon from './GitLabIcon.jsx';

const NETWORK_ICONS = {
  GitHub: <GitHubIcon sx={{ fontSize: 20 }} />,
  LinkedIn: <LinkedInIcon sx={{ fontSize: 20 }} />,
  GitLab: <GitLabIcon sx={{ fontSize: 20 }} />,
};

const linkSx = {
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'width': 42,
  'height': 42,
  'borderRadius': `${RADIUS.pill}px`,
  'color': 'text.primary',
  'border': theme => `1px solid ${theme.palette.line}`,
  'transition': 'color 0.18s ease-out, border-color 0.18s ease-out',
  '&:hover': { color: 'accentText', borderColor: 'accentText' },
};

const ProfileLinks = ({ profiles, showHome = false }) => (
  <StaggerContainer fast>
    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
      {showHome && (
        <MotionLink href="/" target="_self" sx={linkSx}>
          <HomeIcon sx={{ fontSize: 20 }} />
        </MotionLink>
      )}
      {profiles.map(profile => (
        <MotionLink
          key={profile.network}
          href={profile.url}
          className="print-style link-print-style"
          sx={linkSx}
        >
          {NETWORK_ICONS[profile.network] ?? profile.network}
          <Typography
            variant="body2"
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

export default ProfileLinks;
