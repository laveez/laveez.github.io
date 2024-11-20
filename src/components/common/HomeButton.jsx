import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';

const HomeButton = ({ sx, color = 'inherit', variant = 'contained' }) => {
  const navigate = useNavigate();

  return <Button
    variant={variant}
    color={color}
    onClick={() => navigate('/')}
    sx={sx}
  >
    <HomeIcon />
  </Button>;
};

export default HomeButton;
