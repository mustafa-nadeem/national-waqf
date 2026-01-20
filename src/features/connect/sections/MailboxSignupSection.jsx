import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import EmailSignupForm from './EmailSignupForm';
import './MailboxSignupSection.css';

export default function MailboxSignupSection() {
  const handleSubmit = (email) => {
    console.log('Mailbox signup:', email);
  };

  return (
    <section className="mailbox-signup-section">
      <Container>
        <div className="mailbox-signup-section__content">
          <SectionHeader
            subtitle="Stay Informed"
            title="Mailbox Signup"
            description="Join our mailing list to receive important updates about National Waqf, new projects, and opportunities to make a lasting impact in your community."
          />
          <div className="mailbox-signup-section__form">
            <EmailSignupForm
              onSubmit={handleSubmit}
              buttonText="Sign Me Up"
              placeholder="Your email address"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
