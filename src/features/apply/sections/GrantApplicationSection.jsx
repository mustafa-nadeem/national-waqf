import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import GrantApplicationForm from './GrantApplicationForm';
import './GrantApplicationSection.css';

export default function GrantApplicationSection() {
  return (
    <section className="grant-application-section">
      <Container>
        <SectionHeader
          subtitle="Application Form"
          title="Submit Your Grant Application"
          description="Please complete all required fields below. Our team will review your application and respond within 10 business days."
        />
        <GrantApplicationForm />
      </Container>
    </section>
  );
}
