import './InfoCard.css';

export default function InfoCard({ icon, title, description }) {
  return (
    <article className="info-card">
      <div className="info-card__icon">
        {icon || <span className="info-card__icon-placeholder" />}
      </div>
      <h3 className="info-card__title">{title}</h3>
      <p className="info-card__description">{description}</p>
    </article>
  );
}
