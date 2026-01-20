import { useState } from 'react';
import Button from '../../../components/ui/Button';
import './RegisterForm.css';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Mock API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Registration request:', email);
      setIsSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="register-form register-form--success">
        <span className="register-form__success-icon">✓</span>
        <p className="register-form__success-text">
          Registration link sent! Check your inbox to complete your registration.
        </p>
      </div>
    );
  }

  return (
    <form className="register-form" onSubmit={handleSubmit} noValidate>
      <div className="register-form__field">
        <label htmlFor="register-email" className="register-form__label">
          Email Address
        </label>
        <input
          type="email"
          id="register-email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          placeholder="your.email@example.com"
          className={`register-form__input ${error ? 'register-form__input--error' : ''}`}
          disabled={isSubmitting}
          autoComplete="email"
        />
        {error && <span className="register-form__error" role="alert">{error}</span>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="register-form__button">
        {isSubmitting ? 'Registering...' : 'Register'}
      </Button>
    </form>
  );
}
