import { useState } from 'react';
import './TextField.css';

export default function TextField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error,
  helperText,
  validate,
  className = '',
  ...props
}) {
  const [touched, setTouched] = useState(false);
  const [internalError, setInternalError] = useState('');

  const handleBlur = (e) => {
    setTouched(true);
    if (validate) {
      const validationError = validate(e.target.value);
      setInternalError(validationError || '');
    }
  };

  const handleChange = (e) => {
    onChange(e);
    if (touched && validate) {
      const validationError = validate(e.target.value);
      setInternalError(validationError || '');
    }
  };

  const displayError = error || internalError;
  const showError = touched && displayError;

  const classNames = [
    'text-field',
    showError && 'text-field--error',
    disabled && 'text-field--disabled',
    className,
  ].filter(Boolean).join(' ');

  const inputId = `field-${name}`;

  return (
    <div className={classNames}>
      {label && (
        <label htmlFor={inputId} className="text-field__label">
          {label}
          {required && <span className="text-field__required" aria-hidden="true">*</span>}
        </label>
      )}
      
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="text-field__input"
        aria-invalid={showError}
        aria-describedby={showError ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      
      {showError && (
        <span id={`${inputId}-error`} className="text-field__error" role="alert">
          {displayError}
        </span>
      )}
      
      {!showError && helperText && (
        <span id={`${inputId}-helper`} className="text-field__helper">
          {helperText}
        </span>
      )}
    </div>
  );
}
