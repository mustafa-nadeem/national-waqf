import ContactUsSection from '../features/connect/sections/ContactUsSection';
import MailboxSignupSection from '../features/connect/sections/MailboxSignupSection';
import NewsletterSignupSection from '../features/connect/sections/NewsletterSignupSection';
import './ConnectPage.css';

export default function ConnectPage() {
  return (
    <div className="connect-page">
      <ContactUsSection />
      <MailboxSignupSection />
      <NewsletterSignupSection />
    </div>
  );
}
