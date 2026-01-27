import './FundedProjectsAlt.css';

const PROJECTS = [
  {
    id: 'msf',
    title: 'Muslim Scout Fellowship',
    description: "National Waqf's funding for two minibuses enabled MSF to transport young people to national events, enhancing their development while generating sustainable income for long-term impact.",
    imagePosition: 'left',
  },
  {
    id: 'humanity',
    title: 'Supporting Humanity',
    description: 'Our grant enabled a specialist recovery organisation to support vulnerable individuals affected by addiction, homelessness, and social exclusion. Through funded programmes, beneficiaries accessed structured recovery support, emotional guidance, and stable housing, helping them rebuild their lives. As a result, individuals have overcome substance dependency, avoided reoffending, and are now contributing positively to their communities.',
    imagePosition: 'right',
  },
  {
    id: 'sacred',
    title: 'Sacred Body Mind Space',
    description: 'With pass-through funding from National Waqf, Sacred BMS produced a landmark research report strengthening awareness and understanding of abuse within Scottish Muslim communities.',
    imagePosition: 'left',
  },
  {
    id: 'cpf',
    title: 'Community Policy Forum',
    description: 'An independent think tank advancing evidence-based, community-led policy solutions to address structural inequalities affecting Muslim communities in the UK.',
    imagePosition: 'right',
  },
];

export default function FundedProjectsAlt() {
  return (
    <section className="funded-alt">
      <div className="funded-alt__header">
        <span className="funded-alt__subtitle">Success Stories</span>
        <h2 className="funded-alt__title">Blessed to Have Funded</h2>
        <p className="funded-alt__desc">
          These are just some of the transformative projects made possible by your Waqf contributions.
        </p>
      </div>

      <div className="funded-alt__projects">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className={`funded-alt__row funded-alt__row--${project.imagePosition}`}
          >
            <div className="funded-alt__image-col">
              <div className="funded-alt__image-wrapper">
                <div className="funded-alt__image-placeholder" />
              </div>
            </div>
            <div className="funded-alt__content-col">
              <div className="funded-alt__content">
                <h3 className="funded-alt__project-title">{project.title}</h3>
                <p className="funded-alt__project-desc">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
