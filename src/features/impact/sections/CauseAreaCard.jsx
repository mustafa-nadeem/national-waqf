import Placeholder from '../../../components/ui/Placeholder';
import './CauseAreaCard.css';

export default function CauseAreaCard({ title, description, imageLabel }) {
  return (
    <article className="cause-area-card">
      <div className="cause-area-card__image">
        <Placeholder label={imageLabel || title} aspectRatio="16/9" />
      </div>
      <div className="cause-area-card__content">
        <h3 className="cause-area-card__title">{title}</h3>
        <p className="cause-area-card__description">{description}</p>
      </div>
    </article>
  );
}
