import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import './SignInForm.css';

export default function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (authError) {
      setAuthError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setAuthError('');

    // Mock API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock authentication check
      if (formData.email === 'test@example.com' && formData.password === 'password') {
        console.log('Sign in successful:', formData.email);
        navigate('/dashboard');
      } else {
        // Simulate invalid credentials
        setAuthError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setAuthError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="signin-form" onSubmit={handleSubmit} noValidate>
      {authError && (
        <div className="signin-form__auth-error" role="alert">
          {authError}
        </div>
      )}

      <div className="signin-form__field">
        <label htmlFor="signin-email" className="signin-form__label">
          Email Address
        </label>
        <input
          type="email"
          id="signin-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={`signin-form__input ${errors.email ? 'signin-form__input--error' : ''}`}
          disabled={isSubmitting}
          autoComplete="email"
        />
        {errors.email && (
          <span className="signin-form__error" role="alert">{errors.email}</span>
        )}
      </div>

      <div className="signin-form__field">
        <label htmlFor="signin-password" className="signin-form__label">
          Password
        </label>
        <input
          type="password"
          id="signin-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className={`signin-form__input ${errors.password ? 'signin-form__input--error' : ''}`}
          disabled={isSubmitting}
          autoComplete="current-password"
        />
        {errors.password && (
          <span className="signin-form__error" role="alert">{errors.password}</span>
        )}
      </div>

      <div className="signin-form__actions">
        <Button type="submit" disabled={isSubmitting} className="signin-form__button">
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </Button>
        <button type="button" className="signin-form__forgot-link">
          Forgot password?
        </button>
      </div>
    </form>
  );
}
