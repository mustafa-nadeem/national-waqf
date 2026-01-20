import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import CauseAreaCard from './CauseAreaCard';
import './CauseAreasSection.css';

const CAUSE_AREAS = [
  {
    id: 'education',
    title: 'Education',
    description: 'Funding Islamic schools, scholarships, after-school programs, and educational resources that nurture the next generation of Muslim leaders.',
    imageLabel: 'Education',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Supporting community health clinics, mental health services, and wellness programs that serve underserved Muslim communities.',
    imageLabel: 'Healthcare',
  },
  {
    id: 'mosques',
    title: 'Mosques & Prayer Spaces',
    description: 'Building, expanding, and maintaining mosques and prayer facilities that serve as spiritual and community anchors.',
    imageLabel: 'Mosques',
  },
  {
    id: 'welfare',
    title: 'Social Welfare',
    description: 'Emergency assistance, food banks, refugee support, and crisis intervention for families in need.',
    imageLabel: 'Welfare',
  },
  {
    id: 'youth',
    title: 'Youth Development',
    description: 'Mentorship programs, sports facilities, leadership training, and safe spaces for young Muslims to grow.',
    imageLabel: 'Youth',
  },
  {
    id: 'dawah',
    title: 'Dawah & Outreach',
    description: 'Supporting Islamic education, interfaith dialogue, and community outreach programs.',
    imageLabel: 'Dawah',
  },
];

export default function CauseAreasSection() {
  return (
    <section className="cause-areas-section">
      <Container>
        <SectionHeader
          subtitle="Where We Focus"
          title="Our Cause Areas"
          description="We strategically direct Waqf funds to six key areas that create lasting impact in Muslim communities."
        />
        <div className="cause-areas-section__grid">
          {CAUSE_AREAS.map((area) => (
            <CauseAreaCard
              key={area.id}
              title={area.title}
              description={area.description}
              imageLabel={area.imageLabel}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
