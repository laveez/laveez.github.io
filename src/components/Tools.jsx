import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintIcon from '@mui/icons-material/Print';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import PrintView from './PrintView.jsx';

const Tools = ({ resumeData, darkTheme, setDarkTheme }) => {
  const [ anchorEl, setAnchorEl ] = useState(null);
  const open = Boolean(anchorEl);
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

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
    reactToPrintFn();
    handleMenuClose();
  };

  return (
    <Stack direction="row" alignItems="center">
      <Button
        variant="text"
        size="large"
        color="neutral"
        onClick={handleMenuClick}
        sx={{ maxWidth: 20 }}
      >
        <MoreVertIcon fontSize="medium"/>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleDownload}>
          <ListItemIcon>
            <DownloadIcon fontSize="large"/>
          </ListItemIcon>
          <ListItemText>Download</ListItemText>
        </MenuItem>
        <MenuItem onClick={handlePrint}>
          <ListItemIcon>
            <PrintIcon fontSize="large"/>
          </ListItemIcon>
          <ListItemText>Print</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setDarkTheme(!darkTheme);
            handleMenuClose();
          }}
        >
          <ListItemIcon>
            {darkTheme ? <ToggleOnIcon fontSize="large"/> : <ToggleOffIcon fontSize="large"/>}
          </ListItemIcon>
          <ListItemText>
            {darkTheme ? 'Light mode' : 'Dark mode'}
          </ListItemText>
        </MenuItem>
      </Menu>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleMenuClose}
      />
      <div style={{ display: 'none' }}>
        <PrintView innerRef={contentRef} resumeData={resumeData}/>
      </div>
    </Stack>
  );
};

export default Tools;
