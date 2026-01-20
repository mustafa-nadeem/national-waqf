import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import UkProjectMap from './UkProjectMap';
import './ProjectsMapSection.css';

export default function ProjectsMapSection() {
  return (
    <section className="projects-map-section">
      <Container>
        <SectionHeader
          subtitle="Geographic Reach"
          title="Explore Our Projects"
          description="Click on any marker to learn more about the Waqf-funded projects making a difference across the United Kingdom."
        />
        <div className="projects-map-section__content">
          <UkProjectMap />
        </div>
      </Container>
    </section>
  );
}
