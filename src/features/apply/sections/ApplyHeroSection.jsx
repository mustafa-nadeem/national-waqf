import Container from '../../../components/layout/Container';
import './ApplyHeroSection.css';

export default function ApplyHeroSection() {
  return (
    <section className="apply-hero-section">
      <Container>
        <div className="apply-hero-section__content">
          <span className="apply-hero-section__subtitle">Funding Opportunities</span>
          <h1 className="apply-hero-section__title">Apply for Grants</h1>
          <p className="apply-hero-section__description">
            National Waqf provides grants to registered charities, mosques, schools, and 
            community organisations serving Muslim communities across the UK. Submit your 
            details below to begin your application.
          </p>
        </div>
      </Container>
    </section>
  );
}
