import './GivingTypeCard.css';

export default function GivingTypeCard({ icon, title, description, highlight }) {
  return (
    <article className={`giving-type-card ${highlight ? 'giving-type-card--highlight' : ''}`}>
      <div className="giving-type-card__icon">
        {icon || <span className="giving-type-card__icon-placeholder" />}
      </div>
      <h3 className="giving-type-card__title">{title}</h3>
      <p className="giving-type-card__description">{description}</p>
    </article>
  );
}
