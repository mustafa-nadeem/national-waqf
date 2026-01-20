import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import InfoCard from './InfoCard';
import './WhatIsWaqfSection.css';

const INFO_CARDS = [
  {
    id: 'how-it-works',
    title: 'How Waqf Works',
    description:
      'Waqf is a permanent charitable endowment. Your donation is invested, and only the returns are used for charitable purposes—keeping your principal intact forever.',
  },
  {
    id: 'benefits',
    title: 'The Benefits of Waqf',
    description:
      'Unlike one-time donations, Waqf generates continuous rewards (Sadaqah Jariyah). Your contribution keeps giving, benefiting communities for generations to come.',
  },
  {
    id: 'infrastructure',
    title: 'Building Sustainable Infrastructure',
    description:
      'Waqf funds support lasting projects—mosques, schools, hospitals, and community centers—that serve communities indefinitely rather than addressing temporary needs.',
  },
];

export default function WhatIsWaqfSection() {
  return (
    <section className="what-is-waqf">
      <Container>
        <SectionHeader
          subtitle="Understanding Waqf"
          title="What is Waqf?"
          description="An ancient form of Islamic endowment that creates perpetual impact through sustainable charitable giving."
        />
        <div className="what-is-waqf__grid">
          {INFO_CARDS.map((card) => (
            <InfoCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
