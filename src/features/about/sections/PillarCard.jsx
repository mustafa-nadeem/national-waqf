import './PillarCard.css';

export default function PillarCard({ icon, title, description }) {
  return (
    <article className="pillar-card">
      <div className="pillar-card__icon">
        {icon || <span className="pillar-card__icon-default" />}
      </div>
      <h3 className="pillar-card__title">{title}</h3>
      <p className="pillar-card__description">{description}</p>
    </article>
  );
}
