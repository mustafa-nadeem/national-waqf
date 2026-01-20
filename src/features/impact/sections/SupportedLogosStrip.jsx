import Container from '../../../components/layout/Container';
import './SupportedLogosStrip.css';

const LOGOS = [
  { id: 'org-1', name: 'Muslim Aid UK' },
  { id: 'org-2', name: 'Islamic Relief' },
  { id: 'org-3', name: 'Penny Appeal' },
  { id: 'org-4', name: 'Human Appeal' },
  { id: 'org-5', name: 'Muslim Hands' },
  { id: 'org-6', name: 'SKT Welfare' },
  { id: 'org-7', name: 'MADE in Europe' },
  { id: 'org-8', name: 'Orphans in Need' },
];

export default function SupportedLogosStrip() {
  return (
    <section className="supported-logos-strip">
      <Container>
        <p className="supported-logos-strip__title">
          The social projects we have supported
        </p>
        <div className="supported-logos-strip__scroll">
          <div className="supported-logos-strip__track">
            {LOGOS.map((logo) => (
              <div key={logo.id} className="supported-logos-strip__logo">
                <span className="supported-logos-strip__logo-text">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
