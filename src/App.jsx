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

  const primaryColor = darkTheme ? '#E7FE4D' : '#9BB201';

  const theme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light',
      primary: { main: primaryColor },
    },
    typography: {
      fontFamily: 'Montserrat, open-sans, sans-serif',
    },
    components: {
      // Buttons - subtle hover, strong focus
      MuiButtonBase: {
        styleOverrides: {
          root: {
            'transition': 'box-shadow 0.15s ease-out',
            '&:hover': {
              boxShadow: `0 0 6px ${primaryColor}25`,
            },
            '&:focus-visible': {
              outline: 'none',
              boxShadow: `0 0 0 2px ${primaryColor}90, 0 0 16px ${primaryColor}70`,
            },
          },
        },
      },
      // Tabs - subtle inset hover, strong inset focus
      MuiTab: {
        styleOverrides: {
          root: {
            'transition': 'box-shadow 0.15s ease-out',
            '&:hover': {
              boxShadow: `inset 0 0 8px ${primaryColor}20`,
            },
            '&:focus-visible': {
              outline: 'none',
              boxShadow: `inset 0 0 0 2px ${primaryColor}80, inset 0 0 16px ${primaryColor}50`,
            },
          },
        },
      },
      // Menu items - subtle bg hover, stronger focus
      MuiMenuItem: {
        styleOverrides: {
          root: {
            'transition': 'box-shadow 0.15s ease-out, background-color 0.15s ease-out',
            '&:hover': {
              backgroundColor: `${primaryColor}10`,
            },
            '&:focus-visible': {
              outline: 'none',
              backgroundColor: `${primaryColor}20`,
              boxShadow: `inset 0 0 12px ${primaryColor}30`,
            },
          },
        },
      },
      // Cards - strong green focus
      MuiCard: {
        styleOverrides: {
          root: {
            '&:focus-visible': {
              outline: 'none',
              boxShadow: `0 0 0 2px ${primaryColor}90, 0 0 20px ${primaryColor}60`,
            },
          },
        },
      },
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
