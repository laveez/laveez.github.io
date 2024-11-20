import React, { useEffect, useState } from 'react';
import { Box, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import tasksData from '../../../data/100-tehtavaa.json';

const SataTehtavaa = () => {
  const [ checkedTasks, setCheckedTasks ] = useState({});
  const [ checkedCount, setCheckedCount ] = useState(0);

  useEffect(() => {
    const count = Object.values(checkedTasks).filter(Boolean).length;
    setCheckedCount(count);
  }, [ checkedTasks ]);

  const handleCheckboxClick = index => {
    setCheckedTasks(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h3" component="h2" gutterBottom>
        100 Tehtävää
      </Typography>
      <Box component="section" sx={{ p: 2 }}>
        <Grid container spacing={1}>
          {tasksData.tehtavat.map((task, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={task}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!checkedTasks[index]}
                    onChange={() => handleCheckboxClick(index)}
                  />
                }
                label={task}
                sx={{ 'display': 'flex', '@media print': { color: 'black' } }}
              />
            </Grid>
          ))}
        </Grid>
        <Box display="flex" alignItems="center" marginTop="20px">
          <Typography>Summa</Typography>
          <TextField
            value={checkedCount}
            style={{ marginLeft: '10px' }}
            id="sum"
            name="sum"
            readOnly
            disabled
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SataTehtavaa;
