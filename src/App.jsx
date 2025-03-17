import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import resumeData from '../data/resume.json';
import { PRINT_TYPE } from './components/common/enums.js';
import Footer from './components/common/Footer.jsx';
import SataTehtavaa from './components/other/SataTehtavaa.jsx';
import PrintView from './components/PrintView.jsx';
import Resume from './components/Resume.jsx';
import './print.css';
import '@fontsource/montserrat';
import '@fontsource/open-sans';

const App = () => {
  const [ darkTheme, setDarkTheme ] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light',
      primary: darkTheme ? { main: '#E7FE4D' } : { main: '#9BB201' },
    },
    typography: {
      fontFamily: 'Montserrat, open-sans, sans-serif',
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
          <Route path="/print-cover" element={<PrintView resumeData={resumeData} type={PRINT_TYPE.COVER_LETTER}/>} />
          <Route path="/100-tehtavaa" element={<SataTehtavaa />} />
        </Routes>
        <Footer profiles={resumeData.basics.profiles} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
