import Container from '../../../components/layout/Container';
import Button from '../../../components/ui/Button';
import DonateMiniForm from './DonateMiniForm';
import './HomeHero.css';

export default function HomeHero() {
  return (
    <section className="home-hero">
      <Container>
        <div className="home-hero__layout">
          {/* Left Column - Content */}
          <div className="home-hero__content">
            <span className="home-hero__subtitle">Sustainable Islamic Giving</span>
            <h1 className="home-hero__title">
              Building a <em>better future</em> through Waqf
            </h1>
            <p className="home-hero__description">
              Join thousands of donors creating sustainable change for communities 
              across the UK. Waqf is an enduring form of charity that continues 
              to benefit generations, preserving your legacy while empowering 
              those in need.
            </p>
            <div className="home-hero__actions">
              <Button to="/donate" variant="donate" size="large">
                Donate Now
              </Button>
              <Button to="/learn-more" variant="secondary" size="large">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="home-hero__form-card">
            <DonateMiniForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
