import { useState } from 'react';
import './Accordion.css';

function AccordionItem({ id, title, children, isOpen, onToggle }) {
  const headerId = `accordion-header-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div className={`accordion-item ${isOpen ? 'accordion-item--open' : ''}`}>
      <h3 className="accordion-item__header">
        <button
          id={headerId}
          type="button"
          className="accordion-item__trigger"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="accordion-item__title">{title}</span>
          <span className="accordion-item__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className="accordion-item__panel"
        hidden={!isOpen}
      >
        <div className="accordion-item__content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpenIndex = null,
  className = '',
}) {
  const [openItems, setOpenItems] = useState(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  const classNames = [
    'accordion',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id || index}
          id={item.id || index}
          title={item.title}
          isOpen={openItems.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
