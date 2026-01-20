import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import PillarCard from './PillarCard';
import './PillarCardGrid.css';

const PILLARS = [
  {
    id: 'education',
    title: 'Education',
    description: 'Funding Islamic schools, scholarships, and educational programs that nurture future leaders.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Supporting medical facilities and health initiatives serving underserved communities.',
  },
  {
    id: 'mosques',
    title: 'Mosques',
    description: 'Building and maintaining places of worship that serve as community anchors.',
  },
  {
    id: 'welfare',
    title: 'Social Welfare',
    description: 'Providing essential support to those in need through food banks, shelters, and aid programs.',
  },
  {
    id: 'youth',
    title: 'Youth Development',
    description: 'Empowering young Muslims through mentorship, sports, and personal development programs.',
  },
];

export default function PillarCardGrid() {
  return (
    <section className="pillar-card-grid">
      <Container>
        <SectionHeader
          subtitle="Our Focus Areas"
          title="Purpose in Action"
          description="We channel Waqf funds into five key areas that create lasting impact in communities."
        />
        <div className="pillar-card-grid__grid">
          {PILLARS.map((pillar) => (
            <PillarCard
              key={pillar.id}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
