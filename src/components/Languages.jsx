import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Languages = ({ languages }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Languages
      </Typography>
      <Grid container spacing={2}>
        {languages.map((language, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  {language.language}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {language.fluency}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Languages;
