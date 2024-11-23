import { Stack, Typography } from '@mui/material';
import TextIcon from './common/TextIcon.jsx';

const KeySkills = ({ skills, direction = 'column', spacing = 0.25 }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <Stack
      direction={direction}
      spacing={spacing}
      sx={{ pt: 2, justifyContent: 'center' }}
      // className="no-display-on-print"
    >
      {skills.map(skill => (
        <Stack
          key={skill.text}
          direction="row"
          spacing={1}
          sx={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            textAlign: 'left',
            p: 0.5,
          }}
        >
          <TextIcon name={skill.icon} />
          <Typography variant="body1">
            {skill.text}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default KeySkills;
