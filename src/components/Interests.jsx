import React from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import TextIcon from './common/TextIcon.jsx';

const Interests = ({ interests, sizeOverride = null }) => {
  if (!interests || interests.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Interests
      </Typography>
      <Grid container spacing={2}>
        {interests.map((interest, index) => (
          <Grid size={sizeOverride ? sizeOverride : { xs: 12, lg: 6 }} key={index}>
            <Card variant="outlined" sx={{ mb: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextIcon name={interest.icon} />
                  <Typography variant="h6" component="h3">
                    {interest.name}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {interest.keywords.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Interests;
