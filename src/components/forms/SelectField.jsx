import { useState } from 'react';
import './SelectField.css';

export default function SelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  error,
  helperText,
  className = '',
  ...props
}) {
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
  };

  const showError = touched && error;

  const classNames = [
    'select-field',
    showError && 'select-field--error',
    disabled && 'select-field--disabled',
    className,
  ].filter(Boolean).join(' ');

  const inputId = `field-${name}`;

  return (
    <div className={classNames}>
      {label && (
        <label htmlFor={inputId} className="select-field__label">
          {label}
          {required && <span className="select-field__required" aria-hidden="true">*</span>}
        </label>
      )}
      
      <div className="select-field__wrapper">
        <select
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          required={required}
          disabled={disabled}
          className="select-field__input"
          aria-invalid={showError}
          aria-describedby={showError ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="select-field__arrow" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      
      {showError && (
        <span id={`${inputId}-error`} className="select-field__error" role="alert">
          {error}
        </span>
      )}
      
      {!showError && helperText && (
        <span id={`${inputId}-helper`} className="select-field__helper">
          {helperText}
        </span>
      )}
    </div>
  );
}
