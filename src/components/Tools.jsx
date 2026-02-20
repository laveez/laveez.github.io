import { useState } from 'react';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintIcon from '@mui/icons-material/Print';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { hoverButton, menuItem, staggerContainerFast } from './animations/variants.js';
import PrintView from './PrintView.jsx';

const MotionButton = motion.create(Button);
const MotionMenuItem = motion.create(MenuItem);

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
        slotProps={{
          paper: {
            component: motion.div,
            variants: staggerContainerFast,
            initial: 'hidden',
            animate: 'visible',
          },
        }}
      >
        {menuItems.map((item, index) => (
          <MotionMenuItem
            key={item.text}
            onClick={item.onClick}
            variants={menuItem}
            whileHover={{ x: 4, backgroundColor: 'rgba(0,0,0,0.04)' }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MotionMenuItem>
        ))}
      </Menu>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleMenuClose}
      />
      <div style={{ display: 'none' }}>
        <PrintView resumeData={resumeData} />
      </div>
    </Stack>
  );
};

export default Tools;
