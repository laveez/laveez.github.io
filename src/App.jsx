import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import resumeData from '../data/resume.json';
import SataTehtavaa from './components/other/SataTehtavaa.jsx';
import PrintView from './components/PrintView.jsx';
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
      <Router>
        <Routes>
          <Route path="/" element={<Resume resumeData={resumeData} />} />
          <Route path="/print" element={<PrintView resumeData={resumeData} />} />
          <Route path="/100-tehtavaa" element={<SataTehtavaa />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
