import './SectionDivider.css';

export default function SectionDivider({ text = 'or' }) {
  return (
    <div className="section-divider">
      <span className="section-divider__line" />
      <span className="section-divider__text">{text}</span>
      <span className="section-divider__line" />
    </div>
  );
}
