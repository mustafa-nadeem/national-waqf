import Container from '../../../components/layout/Container';
import EmailCaptureForm from './EmailCaptureForm';
import './WorkshopsBookingSection.css';

export default function WorkshopsBookingSection() {
  const handleSubmit = (email) => {
    // Mock handler - in production this would send to backend
    console.log('Workshop booking request:', email);
  };

  return (
    <section className="workshops-booking">
      <Container>
        <div className="workshops-booking__content">
          <div className="workshops-booking__text">
            <h2 className="workshops-booking__title">
              Book educational workshops with us
            </h2>
            <p className="workshops-booking__description">
              Learn more about Waqf, Islamic finance, and sustainable giving through 
              our educational workshops. We offer sessions for mosques, schools, and 
              community organizations. Enter your email to receive information about 
              upcoming workshops.
            </p>
          </div>
          <div className="workshops-booking__form">
            <EmailCaptureForm
              onSubmit={handleSubmit}
              buttonText="Request Info"
              placeholder="Your email address"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
