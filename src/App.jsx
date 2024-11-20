import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { deepOrange, orange } from '@mui/material/colors';
import resumeData from '../data/resume.json';
import Footer from './components/common/Footer.jsx';
import SataTehtavaa from './components/other/SataTehtavaa.jsx';
import PrintView from './components/PrintView.jsx';
import Resume from './components/Resume.jsx';
import './App.css';

const App = () => {
  const [ darkTheme, setDarkTheme ] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light',
      primary: darkTheme ? orange : deepOrange,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path=""
            element={<Resume
              resumeData={resumeData}
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
            />}
          />
          <Route path="/print" element={<PrintView resumeData={resumeData} />} />
          <Route path="/100-tehtavaa" element={<SataTehtavaa />} />
        </Routes>
        <Footer profiles={resumeData.basics.profiles} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
