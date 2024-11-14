import React from 'react';
import { Card, CardContent, List, ListItem, Typography } from '@mui/material';

const Certificates = ({ certificates }) => {
  return (
    <div className="resume">
      <section className="certificate">
        <Typography variant="h2" gutterBottom>
          Certificates
        </Typography>
        <List>
          {certificates.map((certificate, index) => (
            <ListItem key={index}>
              <Card variant="outlined" sx={{ width: '100%' }}>
                <CardContent>
                  <Typography variant="h4" component="div">
                    {certificate.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Issuer: {certificate.issuer}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: {certificate.startDate}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </section>
    </div>
  );
};

export default Certificates;
