import React from 'react';
import { Card, useMediaQuery } from '@mui/material';

const ResponsiveCard = ({ variant = 'outlined', ...props }) => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)');

  return (
    <Card
      variant={variant}
      className="responsive-card"
      sx={isLargeScreen ?
        { display: 'flex', width: '100%' } :
        {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      {...props}
    >
      {props.children}
    </Card>
  );
};

export default ResponsiveCard;
