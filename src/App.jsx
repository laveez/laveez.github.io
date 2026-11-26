import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import resumeData from '../data/resume.json';
import { PRINT_TYPE } from './components/common/enums.js';
import Footer from './components/common/Footer.jsx';
import SataTehtavaa from './components/other/SataTehtavaa.jsx';
import PrintView from './components/PrintView.jsx';
import Resume from './components/Resume.jsx';
import Welcome from './components/Welcome.jsx';
import createAppTheme from './theme.js';
import './print.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/open-sans';

// Client-side navigation keeps the scroll offset of the page it came from
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ pathname ]);

  return null;
};

const App = () => {
  const [ darkTheme, setDarkTheme ] = useState(true);

  const theme = useMemo(() => createAppTheme(darkTheme), [ darkTheme ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path=""
            element={<Welcome
              basics={resumeData.basics}
              welcome={resumeData.welcome}
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
            />}
          />
          <Route
            path="/cv"
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
