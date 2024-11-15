import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useColorScheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const Tools = () => {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const handleChange = event => {
    setMode(event.target.checked ? 'dark' : 'light');
  };

  return (
    <Box>
      <FormControl>
        <FormLabel id="theme-toggle-label">Dark mode</FormLabel>
        <Switch
          checked={mode === 'dark'}
          onChange={handleChange}
          name="theme-toggle"
          inputProps={{ 'aria-label': 'theme toggle' }}
        />
      </FormControl>
    </Box>
  );
};

export default Tools;
