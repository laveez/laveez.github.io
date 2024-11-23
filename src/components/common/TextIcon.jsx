import CloudIcon from '@mui/icons-material/Cloud';
import ComputerIcon from '@mui/icons-material/Computer';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import FactoryIcon from '@mui/icons-material/Factory';
import SpeakerIcon from '@mui/icons-material/Speaker';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import WineBarIcon from '@mui/icons-material/WineBar';

const TEXT_TO_ICON_MAP = {
  'CLOUD': <CloudIcon />,
  'COMPUTER': <ComputerIcon />,
  'DIVERSITY': <Diversity1Icon />,
  'FACTORY': <FactoryIcon />,
  'SPEAKER': <SpeakerIcon />,
  'TERMINAL': <TerminalIcon />,
  'WEB': <WebIcon />,
  'WINE_BAR': <WineBarIcon />,
};

const TextIcon = ({ name = 'COMPUTER' }) => {
  return TEXT_TO_ICON_MAP[name];
};

export default TextIcon;
