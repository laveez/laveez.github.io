import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const Languages = ({ languages, sizeOverride = null }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Languages
      </Typography>
      <Grid container spacing={2}>
        {languages.map((language, index) => (
          <Grid size={sizeOverride ? sizeOverride : { xs: 12, lg: 4 }} key={index}>
            <Card
              variant="outlined"
              sx={{
                'display': 'flex',
                'flexDirection': 'column',
                'height': '100%',
                'borderRadius': 2,
                'transition': 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 8,
                },
              }}
            >
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
