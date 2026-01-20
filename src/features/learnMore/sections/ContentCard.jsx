import Placeholder from '../../../components/ui/Placeholder';
import './ContentCard.css';

export default function ContentCard({ title, excerpt, imageLabel, link = '#' }) {
  return (
    <article className="content-card">
      <div className="content-card__image">
        <Placeholder label={imageLabel || title} aspectRatio="16/9" />
      </div>
      <div className="content-card__content">
        <h3 className="content-card__title">{title}</h3>
        <p className="content-card__excerpt">{excerpt}</p>
        <a href={link} className="content-card__link">
          Read more →
        </a>
      </div>
    </article>
  );
}
