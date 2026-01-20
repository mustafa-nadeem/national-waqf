import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import GivingTypeCard from './GivingTypeCard';
import './IslamicGivingOverview.css';

const GIVING_TYPES = [
  {
    id: 'zakaat',
    title: 'Zakaat',
    description: 'One of the Five Pillars of Islam, Zakaat is an obligatory form of charity requiring Muslims to donate 2.5% of their qualifying wealth annually. It purifies wealth and helps those in need.',
    highlight: false,
  },
  {
    id: 'sadaqah',
    title: 'Sadaqah',
    description: 'Voluntary charity given beyond obligation. Sadaqah can be given at any time, in any amount, and for any good cause. It brings blessings and spiritual rewards to the giver.',
    highlight: false,
  },
  {
    id: 'waqf',
    title: 'Waqf',
    description: 'A permanent endowment where the principal is preserved forever and only returns are used for charity. Waqf creates Sadaqah Jariyah—continuous rewards that last beyond your lifetime.',
    highlight: true,
  },
];

export default function IslamicGivingOverview() {
  return (
    <section className="islamic-giving-overview">
      <Container>
        <SectionHeader
          subtitle="Understanding Islamic Charity"
          title="The Role of Zakaat, Sadaqah, and Waqf"
          description="Islam encourages multiple forms of giving, each serving a unique purpose in supporting the community and earning spiritual rewards."
        />
        <div className="islamic-giving-overview__grid">
          {GIVING_TYPES.map((type) => (
            <GivingTypeCard
              key={type.id}
              title={type.title}
              description={type.description}
              highlight={type.highlight}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
