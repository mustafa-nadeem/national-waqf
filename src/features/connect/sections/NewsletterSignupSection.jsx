import Container from '../../../components/layout/Container';
import EmailSignupForm from './EmailSignupForm';
import './NewsletterSignupSection.css';

export default function NewsletterSignupSection() {
  const handleSubmit = (email) => {
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="newsletter-signup-section">
      <Container>
        <div className="newsletter-signup-section__content">
          <div className="newsletter-signup-section__text">
            <span className="newsletter-signup-section__subtitle">Monthly Insights</span>
            <h2 className="newsletter-signup-section__title">Newsletter Updates</h2>
            <p className="newsletter-signup-section__description">
              Get monthly updates on our funded projects, impact stories, and insights 
              into Islamic giving delivered straight to your inbox.
            </p>
          </div>
          <div className="newsletter-signup-section__form">
            <EmailSignupForm
              onSubmit={handleSubmit}
              buttonText="Subscribe"
              placeholder="Enter your email"
              variant="inline"
            />
            <p className="newsletter-signup-section__privacy">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
