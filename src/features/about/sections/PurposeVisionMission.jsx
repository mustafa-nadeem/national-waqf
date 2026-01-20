import Container from '../../../components/layout/Container';
import './PurposeVisionMission.css';

const ITEMS = [
  {
    id: 'purpose',
    label: 'Our Purpose',
    heading: 'Why We Exist',
    body: 'To revive and modernize the Islamic tradition of Waqf, making sustainable charitable giving accessible to every Muslim in the United Kingdom. We bridge the gap between traditional Islamic philanthropy and contemporary needs.',
  },
  {
    id: 'vision',
    label: 'Our Vision',
    heading: 'What We Aspire To',
    body: 'A thriving network of Waqf endowments across the UK that permanently fund mosques, schools, healthcare facilities, and community services—creating self-sustaining institutions that serve generations.',
  },
  {
    id: 'mission',
    label: 'Our Mission',
    heading: 'How We Achieve It',
    body: 'To collect, invest, and distribute Waqf funds with complete transparency and Sharia compliance. We partner with communities to identify impactful projects and ensure every donation creates lasting, measurable change.',
  },
];

export default function PurposeVisionMission() {
  return (
    <section className="purpose-vision-mission">
      <Container>
        <div className="purpose-vision-mission__grid">
          {ITEMS.map((item) => (
            <article key={item.id} className="purpose-vision-mission__item">
              <span className="purpose-vision-mission__label">{item.label}</span>
              <h3 className="purpose-vision-mission__heading">{item.heading}</h3>
              <p className="purpose-vision-mission__body">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
