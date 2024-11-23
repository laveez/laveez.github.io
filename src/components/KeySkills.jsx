import { Box, Stack, Typography } from '@mui/material';
import TextIcon from './common/TextIcon.jsx';

const KeySkills = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <Box sx={{ pt: 2 }} className="no-display-on-print">
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
    </Box>
  );
};

export default KeySkills;
