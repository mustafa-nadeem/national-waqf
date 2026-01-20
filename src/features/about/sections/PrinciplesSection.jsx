import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import Accordion from '../../../components/feedback/Accordion';
import './PrinciplesSection.css';

const PRINCIPLES = [
  {
    id: 'unity',
    title: 'Unity of the Ummah',
    content: 'We believe in bringing together Muslims from all backgrounds to work towards common goals. Our projects are designed to serve the entire community, transcending cultural, ethnic, and sectarian boundaries. By uniting our resources through Waqf, we amplify our collective impact.',
  },
  {
    id: 'transparency',
    title: 'Transparency & Trust',
    content: 'Every donation is tracked and reported. We publish detailed annual reports, maintain open financial records, and welcome scrutiny. Our governance structure includes independent audits and oversight committees to ensure complete accountability.',
  },
  {
    id: 'excellence',
    title: 'Professional Excellence',
    content: 'We apply the highest professional standards to everything we do—from investment management to project delivery. Our team combines Islamic scholarship with modern expertise in finance, law, and administration.',
  },
  {
    id: 'integrity',
    title: 'Independence with Integrity',
    content: 'National Waqf operates independently of political and sectarian influences. Our decisions are guided solely by Islamic principles and the best interests of the communities we serve. We maintain strict ethical standards in all partnerships and operations.',
  },
];

export default function PrinciplesSection() {
  return (
    <section className="principles-section">
      <Container>
        <SectionHeader
          subtitle="What Guides Us"
          title="Our Guiding Principles"
          description="The values that shape our approach to charitable giving and community service."
        />
        <div className="principles-section__content">
          <Accordion items={PRINCIPLES} defaultOpen="unity" />
        </div>
      </Container>
    </section>
  );
}
