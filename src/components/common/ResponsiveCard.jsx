import React from 'react';
import { Card, useMediaQuery } from '@mui/material';

const ResponsiveCard = ({ variant = 'outlined', ...props }) => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)');

  return (
    <Card
      variant={variant}
      sx={isLargeScreen ?
        { display: 'flex', width: '100%' } :
        { display: 'inline-block', textAlign: 'center', justifyItems: 'center', width: '100%' }}
      {...props}
    >
      {props.children}
    </Card>
  );
};

export default ResponsiveCard;
