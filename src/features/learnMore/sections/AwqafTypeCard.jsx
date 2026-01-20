import './AwqafTypeCard.css';

export default function AwqafTypeCard({ title, description }) {
  return (
    <article className="awqaf-type-card">
      <h3 className="awqaf-type-card__title">{title}</h3>
      <p className="awqaf-type-card__description">{description}</p>
    </article>
  );
}
