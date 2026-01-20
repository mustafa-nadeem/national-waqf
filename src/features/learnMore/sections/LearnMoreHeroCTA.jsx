import Container from '../../../components/layout/Container';
import Button from '../../../components/ui/Button';
import './LearnMoreHeroCTA.css';

export default function LearnMoreHeroCTA() {
  return (
    <section className="learn-more-hero">
      <Container>
        <div className="learn-more-hero__content">
          <h1 className="learn-more-hero__title">
            Donate here to earn eternal rewards
          </h1>
          <p className="learn-more-hero__description">
            Join our community of generous donors and create lasting impact. 
            Sign in to your account or create one to track your donations, 
            receive tax receipts, and see the difference you're making.
          </p>
          <div className="learn-more-hero__actions">
            <Button to="/signin" size="large">
              Log In
            </Button>
            <Button to="/signin" variant="secondary" size="large">
              Sign Up
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
