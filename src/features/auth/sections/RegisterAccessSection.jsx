import RegisterForm from './RegisterForm';
import './RegisterAccessSection.css';

export default function RegisterAccessSection() {
  return (
    <div className="register-access-section">
      <h2 className="register-access-section__title">
        Register for your dashboard access
      </h2>
      <p className="register-access-section__description">
        Create an account to track your donations, view impact reports, and manage your giving preferences.
      </p>
      <RegisterForm />
    </div>
  );
}
