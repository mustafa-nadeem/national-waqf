import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import ProjectShowcaseCard from './ProjectShowcaseCard';
import './FundedProjectsShowcase.css';

const PROJECTS = [
  {
    id: 'masjid-expansion',
    name: 'East London Masjid Expansion',
    category: 'Mosque',
    description: 'A £2.5 million expansion project increasing prayer capacity and adding community facilities.',
    size: 'large',
  },
  {
    id: 'school-scholarship',
    name: 'Northern Schools Scholarship Fund',
    category: 'Education',
    description: 'Providing full scholarships to 50 students from low-income families.',
    size: 'default',
  },
  {
    id: 'food-bank',
    name: 'Birmingham Food Security Initiative',
    category: 'Welfare',
    description: 'Community food bank serving 500 families weekly during Ramadan.',
    size: 'default',
  },
  {
    id: 'health-clinic',
    name: 'Manchester Community Health Centre',
    category: 'Healthcare',
    description: 'Free medical consultations and mental health support for the community.',
    size: 'default',
  },
  {
    id: 'youth-program',
    name: 'Scotland Youth Leadership Academy',
    category: 'Youth',
    description: 'Leadership training and mentorship for young Muslims aged 16-25.',
    size: 'large',
  },
  {
    id: 'refugee-support',
    name: 'Cardiff Refugee Integration Program',
    category: 'Social Welfare',
    description: 'Comprehensive support for refugee families including housing and job placement.',
    size: 'default',
  },
];

export default function FundedProjectsShowcase() {
  return (
    <section className="funded-projects-showcase">
      <Container>
        <SectionHeader
          subtitle="Success Stories"
          title="Blessed to Have Funded"
          description="These are just some of the transformative projects made possible by your Waqf contributions."
        />
        <div className="funded-projects-showcase__grid">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`funded-projects-showcase__item funded-projects-showcase__item--${project.size || 'default'}`}
            >
              <ProjectShowcaseCard project={project} size={project.size} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
