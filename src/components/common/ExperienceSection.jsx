import { AnimatedSection, StaggerContainer } from '../animations/index.js';
import ExperienceRow from './ExperienceRow.jsx';
import SectionHeading from './SectionHeading.jsx';

const ExperienceSection = ({ title, experiences, icon, hideHeading = false }) => {
  if (!experiences || experiences.length === 0) return null;

  return (
    <AnimatedSection sx={{ mb: 4 }}>
      {!hideHeading && <SectionHeading title={title} icon={icon} />}
      <StaggerContainer>
        {experiences.map((experience, index) => (
          <ExperienceRow
            key={`${experience.name || experience.organization || experience.institution}-${index}`}
            experience={experience}
            isLast={index === experiences.length - 1}
            // Without the section's own h3, the row title has to take that level
            titleComponent={hideHeading ? 'h3' : 'h4'}
          />
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default ExperienceSection;
