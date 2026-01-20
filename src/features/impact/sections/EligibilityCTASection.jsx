import Container from '../../../components/layout/Container';
import Button from '../../../components/ui/Button';
import Placeholder from '../../../components/ui/Placeholder';
import './EligibilityCTASection.css';

export default function EligibilityCTASection() {
  return (
    <section className="eligibility-cta">
      <Container>
        <div className="eligibility-cta__grid">
          <div className="eligibility-cta__content">
            <h2 className="eligibility-cta__title">
              Is your organisation eligible for a Waqf grant?
            </h2>
            <p className="eligibility-cta__description">
              We fund registered charities, mosques, schools, and community organisations 
              working to serve Muslim communities across the UK. Our grants range from 
              £5,000 to £500,000 depending on project scope and impact potential.
            </p>
            <Button to="/apply" size="large">
              Apply for a Grant
            </Button>
          </div>
          <div className="eligibility-cta__visual">
            <Placeholder label="Eligibility Illustration" aspectRatio="1/1" />
          </div>
        </div>
      </Container>
    </section>
  );
}
