import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import FeatureSplit from './FeatureSplit';
import './WhyWaqfSection.css';

const FEATURES = [
  {
    id: 'perpetual',
    title: 'Perpetual Impact',
    description:
      'Unlike traditional charity, Waqf creates an endowment that lasts forever. Your contribution continues to generate benefits for communities year after year, decade after decade.',
    imageLabel: 'Perpetual Growth',
  },
  {
    id: 'sustainable',
    title: 'Sustainable Development',
    description:
      'Waqf funds strategic, long-term projects that address root causes rather than symptoms. We invest in education, healthcare, and infrastructure that transforms communities.',
    imageLabel: 'Community Development',
  },
  {
    id: 'transparent',
    title: 'Complete Transparency',
    description:
      'Track every pound of your donation. Our transparent reporting shows exactly how Waqf funds are invested and the tangible impact they create in communities across the UK.',
    imageLabel: 'Transparent Reporting',
  },
  {
    id: 'rewarding',
    title: 'Continuous Reward',
    description:
      'In Islamic tradition, Waqf is considered Sadaqah Jariyah—ongoing charity that earns continuous spiritual rewards. Your single act of giving becomes an everlasting source of benefit.',
    imageLabel: 'Spiritual Rewards',
  },
];

export default function WhyWaqfSection() {
  return (
    <section className="why-waqf">
      <Container>
        <SectionHeader
          title="Why Waqf?"
          description="Discover the unique benefits of this sustainable form of giving that has transformed communities for over 1,400 years."
        />
        <div className="why-waqf__features">
          {FEATURES.map((feature, index) => (
            <FeatureSplit
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageLabel={feature.imageLabel}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
