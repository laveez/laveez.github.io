import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Grid, IconButton, Menu, MenuItem, Paper, useMediaQuery } from '@mui/material';
import { hoverButton, PageTransition } from './animations/index.js';
import ExperienceSection from './common/ExperienceSection.jsx';
import SectionHeading from './common/SectionHeading.jsx';
import SectionNav from './common/SectionNav.jsx';
import Basics from './Basics.jsx';
import Certificates from './Certificates.jsx';
import Interests from './Interests.jsx';
import Languages from './Languages.jsx';
import Projects from './Projects.jsx';
import Publications from './Publications.jsx';
import Skills from './Skills.jsx';
import Tools from './Tools.jsx';

const MotionIconButton = motion.create(IconButton);

const MobileMenuBar = ({ sectionLabels, onSelectSection, resumeData, darkTheme, setDarkTheme }) => {
  const [ menuAnchor, setMenuAnchor ] = useState(null);

  const handleMenuClick = event => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = index => {
    if (index >= 0) onSelectSection(index);
    setMenuAnchor(null);
  };

  return (
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
          px: 1.5,
          py: 1,
          backgroundColor: 'background.default',
          borderBottom: theme => `1px solid ${theme.palette.line}`,
        }}
        className="sticky-menu-bar"
      >
        <MotionIconButton
          onClick={handleMenuClick}
          aria-label="Open section menu"
          variants={hoverButton}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          <MenuIcon />
        </MotionIconButton>
        <Tools resumeData={resumeData} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </Box>
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => handleMenuClose(-1)}
        transitionDuration={0}
      >
        {sectionLabels.map((label, index) => (
          <MenuItem
            key={label}
            onClick={() => handleMenuClose(index)}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const Resume = ({ resumeData, darkTheme, setDarkTheme }) => {
  const [ activeTab, setActiveTab ] = useState(0);
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
      icon: 'WORK',
      component: <ExperienceSection title="Work Experience" experiences={work} hideHeading />,
    },
    {
      label: 'Education & Certificates',
      icon: 'SCHOOL',
      component: <>
        <ExperienceSection title="Education" experiences={education} icon="SCHOOL" />
        <Publications publications={publications} />
        <Certificates certificates={certificates} />
      </>,
    },
    {
      label: 'Volunteering',
      icon: 'VOLUNTEER',
      component: <ExperienceSection title="Volunteering" experiences={volunteer} hideHeading />,
    },
    {
      label: 'Skills & Interests',
      icon: 'DIVERSITY',
      component: <>
        <Languages languages={languages} />
        <Skills skills={skills} />
        <Interests interests={interests} />
      </>,
    },
    {
      label: 'Projects',
      icon: 'FOLDER',
      component: <Projects projects={projects} hideHeading />,
    },
  ];

  const handleSelectSection = index => {
    setActiveTab(index);
    const menuBarHeight = document.querySelector('.sticky-menu-bar')?.offsetHeight || 0;
    const scrollPosition = contentRef.current?.offsetTop - menuBarHeight;
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }, 10);
  };

  return (
    <Grid container spacing={0} sx={{ maxWidth: 1600, mx: 'auto' }}>
      <Grid size={{ xs: 12, lg: 4 }}>
        <Box
          sx={{
            p: { xs: 2, lg: 3 },
            pr: { lg: 1.5 },
            pt: { xs: 9, lg: 3 },
            position: isLargeScreen ? 'sticky' : 'static',
            top: 0,
          }}
        >
          <Paper
            sx={{
              borderRadius: theme => `${theme.shape.borderRadius}px`,
              border: theme => `1px solid ${theme.palette.line}`,
            }}
          >
            <Basics basics={basics} />
          </Paper>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, lg: 8 }}>
        <Box
          ref={contentRef}
          sx={{
            p: { xs: 2, lg: 3 },
            pl: { lg: 1.5 },
            pt: { xs: 0, lg: 3 },
          }}
        >
          {isLargeScreen ? (
            <SectionNav sections={sections} activeTab={activeTab} onChange={setActiveTab}>
              <Tools resumeData={resumeData} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            </SectionNav>
          ) : (
            <MobileMenuBar
              sectionLabels={sections.map(s => s.label)}
              onSelectSection={handleSelectSection}
              resumeData={resumeData}
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
            />
          )}
          <PageTransition transitionKey={activeTab}>
            <SectionHeading variant="display" title={sections[activeTab].label} />
            {sections[activeTab].component}
          </PageTransition>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Resume;
