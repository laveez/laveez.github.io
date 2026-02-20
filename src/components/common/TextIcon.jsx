import BugReportIcon from '@mui/icons-material/BugReport';
import CloudIcon from '@mui/icons-material/Cloud';
import ComputerIcon from '@mui/icons-material/Computer';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import FactoryIcon from '@mui/icons-material/Factory';
import FlightIcon from '@mui/icons-material/Flight';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SpeakerIcon from '@mui/icons-material/Speaker';
import SubwayIcon from '@mui/icons-material/Subway';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import WineBarIcon from '@mui/icons-material/WineBar';

const TEXT_TO_ICON_MAP = {
  'BUG_REPORT': <BugReportIcon />,
  'CLOUD': <CloudIcon />,
  'CONTENT_CUT': <ContentCutIcon />,
  'DIVERSITY': <Diversity1Icon />,
  'CAMERA': <LinkedCameraIcon />,
  'COMPUTER': <ComputerIcon />,
  'CONTACT_PAGE': <ContactPageIcon />,
  'FACTORY': <FactoryIcon />,
  'FLIGHT': <FlightIcon />,
  'GPS_FIXED': <GpsFixedIcon />,
  'PARKING': <LocalParkingIcon />,
  'SMART_TOY': <SmartToyIcon />,
  'SPEAKER': <SpeakerIcon />,
  'SUBWAY': <SubwayIcon />,
  'TERMINAL': <TerminalIcon />,
  'TV': <ConnectedTvIcon />,
  'WEB': <WebIcon />,
  'WINE_BAR': <WineBarIcon />,
};

const TextIcon = ({ name = 'COMPUTER' }) => {
  return TEXT_TO_ICON_MAP[name];
};

export default TextIcon;
