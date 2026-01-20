import './FormGroup.css';

export default function FormGroup({
  children,
  title,
  description,
  className = '',
}) {
  const classNames = [
    'form-group',
    className,
  ].filter(Boolean).join(' ');

  return (
    <fieldset className={classNames}>
      {title && <legend className="form-group__title">{title}</legend>}
      {description && <p className="form-group__description">{description}</p>}
      <div className="form-group__fields">
        {children}
      </div>
    </fieldset>
  );
}
