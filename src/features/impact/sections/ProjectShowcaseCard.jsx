import Placeholder from '../../../components/ui/Placeholder';
import './ProjectShowcaseCard.css';

export default function ProjectShowcaseCard({ project, size = 'default' }) {
  return (
    <article className={`project-showcase-card project-showcase-card--${size}`}>
      <div className="project-showcase-card__image">
        <Placeholder label={project.name} aspectRatio={size === 'large' ? '16/10' : '4/3'} />
      </div>
      <div className="project-showcase-card__content">
        <span className="project-showcase-card__category">{project.category}</span>
        <h3 className="project-showcase-card__name">{project.name}</h3>
        <p className="project-showcase-card__description">{project.description}</p>
      </div>
    </article>
  );
}
