import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import FactoryIcon from '@mui/icons-material/Factory';
import SpeakerIcon from '@mui/icons-material/Speaker';
import TerminalIcon from '@mui/icons-material/Terminal';
import WineBarIcon from '@mui/icons-material/WineBar';

const TEXT_TO_ICON_MAP = {
  'COMPUTER': <ComputerIcon />,
  'FACTORY': <FactoryIcon />,
  'SPEAKER': <SpeakerIcon />,
  'TERMINAL': <TerminalIcon />,
  'WINE_BAR': <WineBarIcon />,
  'DIVERSITY': <Diversity1Icon />,
};

const TextIcon = ({ name = 'COMPUTER' }) => {
  return TEXT_TO_ICON_MAP[name];
};

export default TextIcon;
