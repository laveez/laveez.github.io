import { Card, useMediaQuery } from '@mui/material';

const ResponsiveCard = ({ variant = 'outlined', ...props }) => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)');

  return (
    <Card
      variant={variant}
      className="responsive-card"
      sx={isLargeScreen ?
        {
          'display': 'flex',
          'width': '100%',
          'borderRadius': 2,
          'transition': 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 8,
          },
        } :
        {
          'display': 'flex',
          'width': '100%',
          'borderRadius': 2,
          'flexDirection': 'column',
          'alignItems': 'center',
          'justifyContent': 'center',
          'textAlign': 'center',
          'transition': 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 8,
          },
        }}
      {...props}
    >
      {props.children}
    </Card>
  );
};

export default ResponsiveCard;
