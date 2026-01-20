import { useState } from 'react';
import Button from '../../../components/ui/Button';
import './EmailCaptureForm.css';

export default function EmailCaptureForm({ onSubmit, buttonText = 'Subscribe', placeholder = 'Enter your email' }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
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
    setIsSubmitted(true);
    
    if (onSubmit) {
      onSubmit(email);
    }
  };

  if (isSubmitted) {
    return (
      <div className="email-capture-form email-capture-form--success">
        <span className="email-capture-form__success-icon">✓</span>
        <p className="email-capture-form__success-text">
          Thank you! We'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form className="email-capture-form" onSubmit={handleSubmit}>
      <div className="email-capture-form__input-group">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          placeholder={placeholder}
          className={`email-capture-form__input ${error ? 'email-capture-form__input--error' : ''}`}
          aria-label="Email address"
        />
        <Button type="submit">{buttonText}</Button>
      </div>
      {error && <span className="email-capture-form__error">{error}</span>}
    </form>
  );
}
