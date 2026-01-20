import './ProjectMarker.css';

export default function ProjectMarker({ project, isActive, onClick }) {
  return (
    <button
      className={`project-marker ${isActive ? 'project-marker--active' : ''}`}
      style={{ left: project.position.x, top: project.position.y }}
      onClick={() => onClick(project)}
      aria-label={`View ${project.name}`}
    >
      <span className="project-marker__dot" />
      <span className="project-marker__pulse" />
    </button>
  );
}
