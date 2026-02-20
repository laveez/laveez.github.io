import { motion } from 'framer-motion';
import { Stack, Typography } from '@mui/material';
import { staggerContainerFast, staggerItem } from './animations/variants.js';
import TextIcon from './common/TextIcon.jsx';

const MotionStack = motion.create(Stack);

const KeySkills = ({ skills, direction = 'column', spacing = 0.25 }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <MotionStack
      direction={direction}
      spacing={spacing}
      variants={staggerContainerFast}
      initial="hidden"
      animate="visible"
      sx={{ pt: 2, justifyContent: 'center' }}
    >
      {skills.map(skill => (
        <motion.div key={skill.text} variants={staggerItem}>
          <Stack
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
        </motion.div>
      ))}
    </MotionStack>
  );
};

export default KeySkills;
