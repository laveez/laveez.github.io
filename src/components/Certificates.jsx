import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import FormattedDate from './common/FormattedDate.jsx';

const Certificates = ({ certificates }) => {
  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
          Certificates
      </Typography>

      {certificates.map((certificate, index) => (
        <Box key={index} className="certificate" sx={{ mb: 2 }}>
          <Card variant="outlined" sx={{ display: 'flex', width: '100%' }}>
            <CardMedia
              component="img"
              sx={{ width: 120, height: 120, p: 2 }}
              image={certificate.logoUrl}
              alt="test"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {certificate.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Issuer: {certificate.issuer}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Date: <FormattedDate date={certificate.startDate} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {certificate.category}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Box>
      ))}

    </Box>
  );
};

export default Certificates;
