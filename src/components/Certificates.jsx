import { Box, Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FormattedDate from './common/FormattedDate.jsx';

const Certificates = ({ certificates, sizeOverride }) => {
  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Certificates
      </Typography>

      <Grid container spacing={2}>
        {certificates.map((certificate, index) => (
          <Grid size={sizeOverride ? sizeOverride : { xs: 12, lg: 6 }} key={index}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                height: '100%',
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 120, width: 120, p: 2 }}
                image={certificate.logoUrl}
                alt="test"
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {certificate.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link
                    href={certificate.url}
                    variant="body1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {certificate.issuer}
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <FormattedDate date={certificate.issueDate} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {certificate.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certificates;
