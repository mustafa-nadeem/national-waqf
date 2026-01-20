import './ProjectTooltipCard.css';

export default function ProjectTooltipCard({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-tooltip-card">
      <button className="project-tooltip-card__close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <h4 className="project-tooltip-card__name">{project.name}</h4>
      <p className="project-tooltip-card__location">{project.location}</p>
      <p className="project-tooltip-card__summary">{project.summary}</p>
      {project.impactBullets && project.impactBullets.length > 0 && (
        <ul className="project-tooltip-card__impacts">
          {project.impactBullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
