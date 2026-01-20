import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import AwqafTypeCard from './AwqafTypeCard';
import './AwqafTypesSection.css';

const AWQAF_TYPES = [
  {
    id: 'general',
    title: 'General Waqf',
    description: 'A flexible endowment where National Waqf directs funds to the most pressing community needs. Your donation supports education, healthcare, mosques, and welfare as required.',
  },
  {
    id: 'specific',
    title: 'Specific Waqf',
    description: 'Designate your endowment for a particular cause or project. Whether it\'s a specific mosque, school, or healthcare initiative, your Waqf supports your chosen beneficiary.',
  },
  {
    id: 'family',
    title: 'Family Waqf',
    description: 'Create a lasting legacy in your family\'s name. A Family Waqf can benefit your descendants while also supporting charitable causes, combining personal and communal benefit.',
  },
];

export default function AwqafTypesSection() {
  return (
    <section className="awqaf-types-section">
      <Container>
        <SectionHeader
          subtitle="Choose Your Path"
          title="Types of Awqaf"
          description="Different Waqf structures allow you to give in a way that aligns with your intentions and goals."
        />
        <div className="awqaf-types-section__grid">
          {AWQAF_TYPES.map((type) => (
            <AwqafTypeCard
              key={type.id}
              title={type.title}
              description={type.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
