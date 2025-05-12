import { useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Backdrop, Box, Grid, IconButton, Menu, MenuItem, Paper, Tab, Tabs, useMediaQuery } from '@mui/material';
import ExperienceSection from './common/ExperienceSection.jsx';
import Basics from './Basics.jsx';
import Certificates from './Certificates.jsx';
import Interests from './Interests.jsx';
import Languages from './Languages.jsx';
import Projects from './Projects.jsx';
import Publications from './Publications.jsx';
import Skills from './Skills.jsx';
import Tools from './Tools.jsx';

const Resume = ({ resumeData, darkTheme, setDarkTheme }) => {
  const [ activeTab, setActiveTab ] = useState(0);
  const [ menuAnchor, setMenuAnchor ] = useState(null);
  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const contentRef = useRef(null);

  const {
    basics,
    work,
    volunteer,
    education,
    publications,
    skills,
    languages,
    interests,
    projects,
    certificates,
  } = resumeData;

  const sections = [
    {
      label: 'Work Experience',
      component: <ExperienceSection title="Work Experience" experiences={work} />,
    },
    {
      label: 'Education & Certificates',
      component: <>
        <ExperienceSection title="Education" experiences={education} />
        <Publications publications={publications} />
        <Certificates certificates={certificates} />
      </>,
    },
    {
      label: 'Volunteering',
      component: <ExperienceSection title="Volunteering" experiences={volunteer} />,
    },
    {
      label: 'Skills & Interests',
      component: <>
        <Languages languages={languages} /><Skills skills={skills} />
        <Interests interests={interests} />
      </>,
    },
    {
      label: 'Projects',
      component: <Projects projects={projects} />,
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMenuClick = event => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = index => {
    if (index >= 0) {
      setActiveTab(index);
      const menuBarHeight = document.querySelector('.sticky-menu-bar')?.offsetHeight || 0;
      const scrollPosition = contentRef.current?.offsetTop - menuBarHeight;
      setTimeout(() => {
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }, 10);
    }
    setMenuAnchor(null);
  };

  return (
    <Grid container spacing={0}>
      <Grid size={{ xs: 12, lg: 4 }}>
        <Box
          sx={{
            p: 2,
            pr: isLargeScreen ? 1 : 2,
            pt: 0,
            pb: isLargeScreen ? 2 : 0,
            borderRadius: 2,
            position: isLargeScreen ? 'sticky' : 'static',
            top: isLargeScreen ? 16 : 'auto',
            mt: isLargeScreen ? 0 : 10,
          }}
        >
          <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 5 }}>
            <Basics basics={basics} />
          </Paper>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, lg: 8 }}>
        <Box
          ref={contentRef}
          sx={{
            p: 2,
            pl: isLargeScreen ? 1 : 2,
            pt: isLargeScreen ? 0 : 2,
            borderRadius: 2,
          }}
        >
          {isLargeScreen ? (
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {sections.map((section, index) =>
                <Tab key={section.label} label={<Box sx={{ p: 2 }}>{section.label}</Box>} />)}
              <Tools resumeData={resumeData} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            </Tabs>
          ) : (
            <>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 1100,
                  p: 1.5,
                  backgroundColor: theme => theme.palette.background.paper,
                  boxShadow: 5,
                }}
                className="sticky-menu-bar"
              >
                <IconButton onClick={handleMenuClick}>
                  <MenuIcon />
                </IconButton>
                <Tools resumeData={resumeData} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
              </Box>
              <Box>
                <Menu
                  anchorEl={menuAnchor}
                  open={Boolean(menuAnchor)}
                  onClose={() => handleMenuClose(-1)}
                >
                  {sections.map((section, index) => (
                    <MenuItem key={section.label} onClick={() => handleMenuClose(index)}>
                      {section.label}
                    </MenuItem>
                  ))}
                </Menu>
                <Backdrop
                  sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
                  open={Boolean(menuAnchor)}
                  onClick={() => handleMenuClose(-1)}
                />
              </Box>
            </>
          )}
          <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 5 }}>
            {sections[activeTab].component}
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Resume;
