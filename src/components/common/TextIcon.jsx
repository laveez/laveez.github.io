import BugReportIcon from '@mui/icons-material/BugReport';
import CloudIcon from '@mui/icons-material/Cloud';
import ComputerIcon from '@mui/icons-material/Computer';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import FactoryIcon from '@mui/icons-material/Factory';
import FlightIcon from '@mui/icons-material/Flight';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import InterestsIcon from '@mui/icons-material/Interests';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SpeakerIcon from '@mui/icons-material/Speaker';
import SubwayIcon from '@mui/icons-material/Subway';
import TerminalIcon from '@mui/icons-material/Terminal';
import TimelineIcon from '@mui/icons-material/Timeline';
import TranslateIcon from '@mui/icons-material/Translate';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WebIcon from '@mui/icons-material/Web';
import WineBarIcon from '@mui/icons-material/WineBar';
import WorkIcon from '@mui/icons-material/Work';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

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
  'FOLDER': <FolderOpenIcon />,
  'GPS_FIXED': <GpsFixedIcon />,
  'INTERESTS': <InterestsIcon />,
  'LANGUAGES': <TranslateIcon />,
  'PARKING': <LocalParkingIcon />,
  'PERSON': <PersonIcon />,
  'PUBLICATIONS': <MenuBookIcon />,
  'SCHOOL': <SchoolIcon />,
  'SKILLS': <PsychologyIcon />,
  'SMART_TOY': <SmartToyIcon />,
  'SPEAKER': <SpeakerIcon />,
  'SUBWAY': <SubwayIcon />,
  'TERMINAL': <TerminalIcon />,
  'TIMELINE': <TimelineIcon />,
  'TV': <ConnectedTvIcon />,
  'VOLUNTEER': <VolunteerActivismIcon />,
  'WEB': <WebIcon />,
  'WINE_BAR': <WineBarIcon />,
  'WORK': <WorkIcon />,
  'CERTIFICATES': <WorkspacePremiumIcon />,
};

const TextIcon = ({ name = 'COMPUTER' }) => {
  return TEXT_TO_ICON_MAP[name];
};

export default TextIcon;
