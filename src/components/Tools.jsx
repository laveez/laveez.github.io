import { useState } from 'react';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintIcon from '@mui/icons-material/Print';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from '@mui/material';
import { hoverButton } from './animations/variants.js';
import PrintView from './PrintView.jsx';

const MotionIconButton = motion.create(IconButton);

// Written to dist/ by `npm run pdf`; vite.config.js serves it in dev too
const RESUME_PDF = '/niko-muukkonen-laveez-resume.pdf';

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
    link.href = RESUME_PDF;
    link.download = RESUME_PDF.slice(1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    handleMenuClose();
    const win = window.open(RESUME_PDF, '_blank');
    if (!win) return; // popup blocked
    win.addEventListener('load', () => win.print(), { once: true });
  };

  const menuItems = [
    { icon: <DownloadIcon />, text: 'Download', onClick: handleDownload },
    { icon: <PrintIcon />, text: 'Print', onClick: handlePrint },
    {
      icon: darkTheme ? <ToggleOnIcon /> : <ToggleOffIcon />,
      text: darkTheme ? 'Light mode' : 'Dark mode',
      onClick: () => {
        setDarkTheme(!darkTheme);
        handleMenuClose();
      },
    },
  ];

  return (
    <Stack direction="row" sx={{ alignItems: 'center' }}>
      <MotionIconButton
        onClick={handleMenuClick}
        aria-label="Resume tools"
        variants={hoverButton}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        sx={{ color: 'text.secondary' }}
      >
        <MoreVertIcon fontSize="small" />
      </MotionIconButton>
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
