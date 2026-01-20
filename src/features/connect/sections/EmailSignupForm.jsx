import { useState } from 'react';
import Button from '../../../components/ui/Button';
import './EmailSignupForm.css';

export default function EmailSignupForm({ 
  buttonText = 'Subscribe',
  placeholder = 'Enter your email address',
  onSubmit,
  variant = 'default' // 'default' | 'inline'
}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log('Email signup:', email);
      setIsSubmitted(true);
      
      if (onSubmit) {
        onSubmit(email);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`email-signup-form email-signup-form--success email-signup-form--${variant}`}>
        <span className="email-signup-form__success-icon">✓</span>
        <p className="email-signup-form__success-text">
          You're subscribed! Check your inbox for a confirmation email.
        </p>
      </div>
    );
  }

  return (
    <form 
      className={`email-signup-form email-signup-form--${variant}`} 
      onSubmit={handleSubmit}
    >
      <div className="email-signup-form__input-group">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          placeholder={placeholder}
          className={`email-signup-form__input ${error ? 'email-signup-form__input--error' : ''}`}
          aria-label="Email address"
          disabled={isSubmitting}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing...' : buttonText}
        </Button>
      </div>
      {error && <span className="email-signup-form__error">{error}</span>}
    </form>
  );
}
