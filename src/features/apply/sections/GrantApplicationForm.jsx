import { useState, useMemo } from 'react';
import Button from '../../../components/ui/Button';
import { GRANT_APPLICATION_FIELDS, FORM_SECTIONS } from './grantFormConfig';
import './GrantApplicationForm.css';

export default function GrantApplicationForm() {
  // Initialize form data from config
  const initialFormData = useMemo(() => {
    return GRANT_APPLICATION_FIELDS.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {});
  }, []);

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateField = (field, value) => {
    if (field.required && !value.trim()) {
      return `${field.label} is required`;
    }

    if (field.type === 'email' && value && !validateEmail(value)) {
      return 'Please enter a valid email address';
    }

    if (field.type === 'number' && value) {
      const numValue = parseFloat(value);
      if (isNaN(numValue)) {
        return 'Please enter a valid number';
      }
      if (field.min && numValue < field.min) {
        return `Minimum amount is £${field.min}`;
      }
    }

    if (field.minLength && value && value.trim().length < field.minLength) {
      return `Minimum ${field.minLength} characters required`;
    }

    return '';
  };

  const validateForm = () => {
    const newErrors = {};

    GRANT_APPLICATION_FIELDS.forEach((field) => {
      const error = validateField(field, formData[field.name] || '');
      if (error) {
        newErrors[field.name] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      // For file inputs, just store the file name for display
      setFormData((prev) => ({ ...prev, [name]: files[0]?.name || '' }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Grant application submitted:', formData);
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitStatus(null);
  };

  if (submitStatus === 'success') {
    return (
      <div className="grant-form grant-form--success">
        <div className="grant-form__success-icon">✓</div>
        <h3 className="grant-form__success-title">Application Submitted!</h3>
        <p className="grant-form__success-text">
          Thank you for your grant application. Our team will review your submission 
          and contact you within 10 business days. Please check your email for a 
          confirmation message.
        </p>
        <Button variant="secondary" onClick={handleReset}>
          Submit Another Application
        </Button>
      </div>
    );
  }

  const renderField = (field) => {
    const commonProps = {
      id: `grant-${field.name}`,
      name: field.name,
      value: formData[field.name],
      onChange: handleChange,
      placeholder: field.placeholder,
      disabled: isSubmitting,
      'aria-describedby': errors[field.name] ? `${field.name}-error` : undefined,
    };

    if (field.type === 'textarea') {
      return (
        <textarea
          {...commonProps}
          className={`grant-form__textarea ${errors[field.name] ? 'grant-form__input--error' : ''}`}
          rows={field.rows || 4}
        />
      );
    }

    if (field.type === 'file') {
      return (
        <div className="grant-form__file-input">
          <input
            type="file"
            id={`grant-${field.name}`}
            name={field.name}
            onChange={handleChange}
            accept={field.accept}
            disabled={isSubmitting}
            className="grant-form__file-hidden"
          />
          <label htmlFor={`grant-${field.name}`} className="grant-form__file-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            {formData[field.name] || 'Choose file...'}
          </label>
          {field.helpText && (
            <span className="grant-form__help-text">{field.helpText}</span>
          )}
        </div>
      );
    }

    return (
      <input
        {...commonProps}
        type={field.type}
        className={`grant-form__input ${errors[field.name] ? 'grant-form__input--error' : ''}`}
        min={field.min}
      />
    );
  };

  // Group fields by section
  const fieldsBySection = FORM_SECTIONS.map((section) => ({
    ...section,
    fields: GRANT_APPLICATION_FIELDS.filter((f) => f.section === section.id),
  }));

  return (
    <form className="grant-form" onSubmit={handleSubmit} noValidate>
      {submitStatus === 'error' && (
        <div className="grant-form__error-banner">
          Something went wrong while submitting your application. Please try again later.
        </div>
      )}

      {fieldsBySection.map((section) => (
        <fieldset key={section.id} className="grant-form__section">
          <legend className="grant-form__section-title">{section.title}</legend>
          
          <div className="grant-form__fields">
            {section.fields.map((field) => (
              <div 
                key={field.name} 
                className={`grant-form__field ${field.type === 'textarea' ? 'grant-form__field--full' : ''}`}
              >
                <label htmlFor={`grant-${field.name}`} className="grant-form__label">
                  {field.label}
                  {field.required && <span className="grant-form__required">*</span>}
                </label>
                {renderField(field)}
                {errors[field.name] && (
                  <span 
                    id={`${field.name}-error`} 
                    className="grant-form__error"
                    role="alert"
                  >
                    {errors[field.name]}
                  </span>
                )}
              </div>
            ))}
          </div>
        </fieldset>
      ))}

      <div className="grant-form__actions">
        <Button type="submit" disabled={isSubmitting} size="large">
          {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
        </Button>
        <Button 
          type="button" 
          variant="secondary" 
          onClick={handleReset}
          disabled={isSubmitting}
        >
          Clear Form
        </Button>
      </div>
    </form>
  );
}
