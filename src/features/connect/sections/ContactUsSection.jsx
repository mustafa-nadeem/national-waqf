import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import ContactForm from './ContactForm';
import './ContactUsSection.css';

export default function ContactUsSection() {
  return (
    <section className="contact-us-section">
      <Container>
        <div className="contact-us-section__layout">
          <div className="contact-us-section__info">
            <SectionHeader
              subtitle="Get in Touch"
              title="Contact Us"
              description="Have a question about Waqf, our projects, or how to get involved? We'd love to hear from you. Fill out the form and our team will respond within 2-3 business days."
              align="left"
            />
            <div className="contact-us-section__details">
              <div className="contact-us-section__detail">
                <span className="contact-us-section__detail-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>National Waqf Foundation<br />London, United Kingdom</p>
                </div>
              </div>
              <div className="contact-us-section__detail">
                <span className="contact-us-section__detail-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>info@nationalwaqf.org</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-us-section__form">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
