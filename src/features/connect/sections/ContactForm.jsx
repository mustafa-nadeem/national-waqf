import { useState } from 'react';
import Button from '../../../components/ui/Button';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Mock API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Contact form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="contact-form contact-form--success">
        <div className="contact-form__success-icon">✓</div>
        <h3 className="contact-form__success-title">Message Sent!</h3>
        <p className="contact-form__success-text">
          Thank you for reaching out. We'll get back to you within 2-3 business days.
        </p>
        <Button 
          variant="secondary" 
          onClick={() => setSubmitStatus(null)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {submitStatus === 'error' && (
        <div className="contact-form__error-banner">
          Something went wrong. Please try again later.
        </div>
      )}

      <div className="contact-form__field">
        <label htmlFor="contact-name" className="contact-form__label">
          Name <span className="contact-form__required">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
          placeholder="Your full name"
          disabled={isSubmitting}
        />
        {errors.name && <span className="contact-form__error">{errors.name}</span>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email" className="contact-form__label">
          Email <span className="contact-form__required">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
          placeholder="your.email@example.com"
          disabled={isSubmitting}
        />
        {errors.email && <span className="contact-form__error">{errors.email}</span>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message" className="contact-form__label">
          Message <span className="contact-form__required">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`contact-form__textarea ${errors.message ? 'contact-form__input--error' : ''}`}
          placeholder="How can we help you?"
          rows={5}
          disabled={isSubmitting}
        />
        {errors.message && <span className="contact-form__error">{errors.message}</span>}
      </div>

      <Button type="submit" disabled={isSubmitting} size="large">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
