import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Backdrop, Box, IconButton, Menu, MenuItem, Paper, Tab, Tabs, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
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
      label: 'Education',
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
      label: 'Skills',
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
    if (index >= 0) setActiveTab(index);
    setMenuAnchor(null);
  };

  return (
    <Grid container spacing={0}>
      <Grid size={{ xs: 12, lg: 4 }}>
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            position: isLargeScreen ? 'sticky' : 'static',
            top: isLargeScreen ? 16 : 'auto',
          }}
        >
          <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 5 }}>
            <Basics basics={basics} />
          </Paper>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, lg: 8 }}>
        <Box sx={{ p: 2, borderRadius: 2 }}>
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton onClick={handleMenuClick}>
                  <MenuIcon />
                </IconButton>
                <Tools resumeData={resumeData} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
              </Box>
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
