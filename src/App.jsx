import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import resumeData from '../data/resume.json';
import Resume from './components/Resume.jsx';
import './App.css';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <Resume resumeData={resumeData} />
    </ThemeProvider>
  );
};

export default App;
