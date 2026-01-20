import { useState } from 'react';
import ProjectMarker from './ProjectMarker';
import ProjectTooltipCard from './ProjectTooltipCard';
import './UkProjectMap.css';

const PROJECTS = [
  {
    id: 'durham',
    name: 'Durham Community Centre',
    location: 'Durham, North East',
    position: { x: '52%', y: '28%' },
    summary: 'A multi-purpose community facility serving local Muslim families with educational and social programs.',
    impactBullets: ['500+ families served', 'Weekly youth programs', 'Food bank partnership'],
  },
  {
    id: 'manchester',
    name: 'Manchester Islamic School',
    location: 'Manchester, North West',
    position: { x: '45%', y: '38%' },
    summary: 'Full-time Islamic school providing quality education integrated with Islamic values.',
    impactBullets: ['300 students enrolled', 'Ofsted rated Good', '95% university placement'],
  },
  {
    id: 'birmingham',
    name: 'Birmingham Health Clinic',
    location: 'Birmingham, West Midlands',
    position: { x: '48%', y: '52%' },
    summary: 'Community health clinic offering free medical consultations and wellness programs.',
    impactBullets: ['2,000+ patients yearly', 'Mental health support', 'Women\'s health focus'],
  },
  {
    id: 'london-east',
    name: 'East London Mosque Extension',
    location: 'Tower Hamlets, London',
    position: { x: '58%', y: '68%' },
    summary: 'Major expansion project to accommodate growing congregation and community services.',
    impactBullets: ['5,000 prayer capacity', 'Youth centre', 'Funeral services'],
  },
  {
    id: 'cardiff',
    name: 'Cardiff Welfare Hub',
    location: 'Cardiff, Wales',
    position: { x: '35%', y: '60%' },
    summary: 'Emergency assistance center providing food, clothing, and crisis support.',
    impactBullets: ['1,200 families assisted', '24/7 helpline', 'Refugee support'],
  },
  {
    id: 'glasgow',
    name: 'Glasgow Learning Centre',
    location: 'Glasgow, Scotland',
    position: { x: '38%', y: '18%' },
    summary: 'After-school tutoring and Quran memorization programs for young Muslims.',
    impactBullets: ['150 students weekly', 'Hafiz program', 'STEM workshops'],
  },
];

export default function UkProjectMap() {
  const [activeProject, setActiveProject] = useState(null);

  const handleMarkerClick = (project) => {
    setActiveProject(activeProject?.id === project.id ? null : project);
  };

  const handleTooltipClose = () => {
    setActiveProject(null);
  };

  return (
    <div className="uk-project-map">
      {/* Simplified UK Map SVG */}
      <svg
        className="uk-project-map__svg"
        viewBox="0 0 100 140"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Scotland */}
        <path
          d="M30 5 L45 3 L55 8 L52 15 L48 12 L50 20 L45 25 L40 22 L35 28 L30 25 L28 18 L32 12 Z"
          fill="var(--color-primary-light)"
          stroke="white"
          strokeWidth="0.5"
        />
        {/* Northern England */}
        <path
          d="M35 28 L45 25 L50 30 L55 35 L52 42 L48 45 L42 42 L38 38 L35 35 Z"
          fill="var(--color-primary)"
          stroke="white"
          strokeWidth="0.5"
        />
        {/* Wales */}
        <path
          d="M28 55 L35 52 L38 58 L42 62 L38 68 L32 70 L25 65 L26 58 Z"
          fill="var(--color-primary-light)"
          stroke="white"
          strokeWidth="0.5"
        />
        {/* Midlands & South */}
        <path
          d="M38 45 L52 42 L58 48 L62 55 L65 65 L60 75 L55 82 L48 85 L42 80 L38 72 L42 62 L38 58 L35 52 L38 48 Z"
          fill="var(--color-primary)"
          stroke="white"
          strokeWidth="0.5"
        />
        {/* East Anglia */}
        <path
          d="M58 48 L68 50 L72 58 L70 65 L65 65 L62 55 Z"
          fill="var(--color-primary-light)"
          stroke="white"
          strokeWidth="0.5"
        />
        {/* South West */}
        <path
          d="M25 65 L32 70 L38 72 L42 80 L35 88 L28 92 L18 88 L15 80 L18 72 Z"
          fill="var(--color-primary)"
          stroke="white"
          strokeWidth="0.5"
        />
      </svg>

      {/* Project Markers */}
      <div className="uk-project-map__markers">
        {PROJECTS.map((project) => (
          <ProjectMarker
            key={project.id}
            project={project}
            isActive={activeProject?.id === project.id}
            onClick={handleMarkerClick}
          />
        ))}
      </div>

      {/* Active Project Tooltip */}
      {activeProject && (
        <div
          className="uk-project-map__tooltip"
          style={{
            left: activeProject.position.x,
            top: activeProject.position.y,
          }}
        >
          <ProjectTooltipCard project={activeProject} onClose={handleTooltipClose} />
        </div>
      )}

      {/* Legend */}
      <div className="uk-project-map__legend">
        <span className="uk-project-map__legend-dot" />
        <span className="uk-project-map__legend-text">{PROJECTS.length} Active Projects</span>
      </div>
    </div>
  );
}
