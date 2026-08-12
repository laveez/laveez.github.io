import { motion } from 'framer-motion';
import { Stack, Typography } from '@mui/material';
import { staggerContainerFast, staggerItem } from './animations/variants.js';
import TextIcon from './common/TextIcon.jsx';

const MotionStack = motion.create(Stack);

const KeySkills = ({ skills, direction = 'column', spacing = 1 }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <MotionStack
      direction={direction}
      spacing={spacing}
      variants={staggerContainerFast}
      initial="hidden"
      animate="visible"
      sx={{ mt: 3, justifyContent: 'center', flexWrap: direction === 'row' ? 'wrap' : 'nowrap' }}
    >
      {skills.map(skill => (
        <motion.div key={skill.text} variants={staggerItem}>
          <Stack
            direction="row"
            spacing={1.25}
            sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'left' }}
          >
            <Stack sx={{ 'color': 'accentText', '& svg': { fontSize: 18, display: 'block' } }}>
              <TextIcon name={skill.icon} />
            </Stack>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {skill.text}
            </Typography>
          </Stack>
        </motion.div>
      ))}
    </MotionStack>
  );
};

export default KeySkills;
