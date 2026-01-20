import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import Placeholder from '../../../components/ui/Placeholder';
import './AboutSplitSection.css';

const FUNDING_ITEMS = [
  {
    id: 'public',
    label: 'PUBLIC FUND',
    title: 'Community Donations',
    body: 'Our public fund accepts donations from individuals and families across the UK. Every pound contributed is invested in Sharia-compliant assets, with returns distributed to charitable causes. Your donation creates a perpetual source of good.',
    mediaLabel: 'Community Giving',
  },
  {
    id: 'private',
    label: 'PRIVATE FUND',
    title: 'Endowment Contributions',
    body: 'Large donations that form permanent endowments in the donor\'s name or family name. These substantial gifts create lasting legacies, funding major projects like mosques, schools, and healthcare facilities for generations.',
    mediaLabel: 'Endowment Growth',
  },
  {
    id: 'transparency',
    label: 'TRANSPARENCY',
    title: 'Complete Accountability',
    body: 'We publish detailed annual reports showing exactly how funds are invested and distributed. Our governance structure includes independent oversight, regular audits, and a dedicated Sharia board to ensure compliance with Islamic principles.',
    mediaLabel: 'Annual Reports',
  },
];

export default function AboutSplitSection() {
  return (
    <section className="about-split">
      <Container>
        <SectionHeader
          subtitle="Our Model"
          title="How Does National Waqf Work?"
          description="We operate two distinct funding streams to maximize impact while maintaining complete transparency."
        />
        <div className="about-split__items">
          {FUNDING_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`about-split__item ${index % 2 === 1 ? 'about-split__item--reversed' : ''}`}
            >
              <div className="about-split__media">
                <Placeholder label={item.mediaLabel} aspectRatio="4/3" />
              </div>
              <div className="about-split__content">
                <span className="about-split__label">{item.label}</span>
                <h3 className="about-split__title">{item.title}</h3>
                <p className="about-split__body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
