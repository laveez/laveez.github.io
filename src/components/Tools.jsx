import * as React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintIcon from '@mui/icons-material/Print';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import PrintView from './PrintView.jsx';

const Tools = ({ resumeData }) => {
  const { mode, setMode } = useColorScheme();
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const open = Boolean(anchorEl);

  if (!mode) {
    return null;
  }

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = () => {
    handleMenuClose();
  };

  const handlePrint = async () => {
    await handleMenuClose();
    const printContent = document.getElementById('print-view').innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  return (
    <Stack direction="row" alignItems="center">
      <Button
        variant="text"
        size="large"
        color="neutral"
        onClick={handleMenuClick}
        sx={{ maxWidth: 20 }}
      ><MoreVertIcon fontSize="medium" /></Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleDownload}>
          <ListItemIcon>
            <DownloadIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>Download</ListItemText>
        </MenuItem>
        <MenuItem onClick={handlePrint}>
          <ListItemIcon>
            <PrintIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText>Print</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setMode(mode === 'dark' ? 'light' : 'dark');
            handleMenuClose();
          }}
        >
          <ListItemIcon>
            {mode === 'dark' ? <ToggleOnIcon fontSize="large" /> : <ToggleOffIcon fontSize="large" />}
          </ListItemIcon>
          <ListItemText>Dark mode</ListItemText>
        </MenuItem>
      </Menu>
      <div id="print-view" style={{ display: 'none' }}>
        <PrintView resumeData={resumeData} />
      </div>
    </Stack>
  );
};

export default Tools;
