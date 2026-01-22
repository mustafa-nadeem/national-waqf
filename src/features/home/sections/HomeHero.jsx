import Container from '../../../components/layout/Container';
import Button from '../../../components/ui/Button';
import './HomeHero.css';

export default function HomeHero() {
  return (
    <section className="home-hero">
      <Container size="full">
        <div className="home-hero__layout">
          <div className="home-hero__panel">
            <div className="home-hero__panel-inner">
              <p className="home-hero__eyebrow">Sustainable Islamic Giving</p>
              <h1 className="home-hero__heading">
                Give clean water in honor of <span>someone important</span> to you
              </h1>
              <p className="home-hero__copy">
                Honor your loved ones with a gift that transforms lives. Customize
                your card and share the impact; 100% of your gift supports projects
                that bring lasting benefit to people in need.
              </p>
              <div className="home-hero__donate-card" aria-label="Quick donation options">
                <div className="home-hero__donate-row">
                  <button type="button" className="home-hero__pill">
                    <span className="home-hero__pill-label">Appeal</span>
                    <span className="home-hero__pill-value">Clean Water Waqf</span>
                  </button>
                  <button type="button" className="home-hero__pill">
                    <span className="home-hero__pill-label">Frequency</span>
                    <span className="home-hero__pill-value">Single Gift</span>
                  </button>
                  <button type="button" className="home-hero__pill">
                    <span className="home-hero__pill-label">Amount</span>
                    <span className="home-hero__pill-value">£50.00</span>
                  </button>
                  <Button
                    to="/donate"
                    variant="donate"
                    size="medium"
                    className="home-hero__donate-cta"
                  >
                    Quick Donate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
