import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import TextIcon from './common/TextIcon.jsx';

const Skills = ({ skills, sizeOverride = null, overrideMarginBottom = null }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid size={sizeOverride ? sizeOverride : { xs: 12, lg: 6 }} key={index}>
            <Card
              variant="outlined"
              sx={{
                mb: overrideMarginBottom || 2,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextIcon name={skill.icon} />
                  <Typography variant="h6" component="h3">
                    {skill.name}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {skill.keywords.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
