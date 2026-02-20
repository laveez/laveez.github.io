import { useState } from 'react';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintIcon from '@mui/icons-material/Print';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from '@mui/material';
import { hoverButton } from './animations/variants.js';
import PrintView from './PrintView.jsx';

const MotionButton = motion.create(Button);

const Tools = ({ resumeData, darkTheme, setDarkTheme }) => {
  const [ anchorEl, setAnchorEl ] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = () => {
    handleMenuClose();
    const link = document.createElement('a');
    link.href = '/niko-muukkonen-laveez-resume.pdf';
    link.download = 'niko-muukkonen-laveez-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.open('/niko-muukkonen-laveez-resume.pdf', '_blank').print();
    handleMenuClose();
  };

  const menuItems = [
    { icon: <DownloadIcon fontSize="large" />, text: 'Download', onClick: handleDownload },
    { icon: <PrintIcon fontSize="large" />, text: 'Print', onClick: handlePrint },
    {
      icon: darkTheme ? <ToggleOnIcon fontSize="large" /> : <ToggleOffIcon fontSize="large" />,
      text: darkTheme ? 'Light mode' : 'Dark mode',
      onClick: () => {
        setDarkTheme(!darkTheme);
        handleMenuClose();
      },
    },
  ];

  return (
    <Stack direction="row" alignItems="center">
      <MotionButton
        variant="text"
        size="large"
        color="neutral"
        onClick={handleMenuClick}
        variants={hoverButton}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        sx={{ maxWidth: 20, minWidth: 40 }}
      >
        <MoreVertIcon fontSize="medium" />
      </MotionButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        transitionDuration={0}
      >
        {menuItems.map(item => (
          <MenuItem
            key={item.text}
            onClick={item.onClick}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
      <div style={{ display: 'none' }}>
        <PrintView resumeData={resumeData} />
      </div>
    </Stack>
  );
};

export default Tools;
