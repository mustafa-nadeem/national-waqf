import React, { useRef, useEffect, useState } from 'react';
import './AboutCompanyTimeline.css';

const MILESTONES = [
  {
    year: 2020,
    monthYear: 'March 2020',
    title: 'Initiative begins',
    body: 'Initiative by the Muslim community leaders began to establish a charity to revive the Waqf institution. However, progress was not as swift as desired due to COVID-19 set back.',
    image: null,
  },
  {
    year: 2021,
    monthYear: 'December 2021',
    title: 'Charity status awarded',
    body: 'Our charity status was awarded by the Charity Commission, and we secured initial seed funding to begin our mission.',
    image: null,
  },
  {
    year: 2022,
    monthYear: 'June 2022',
    title: 'Momentum rebuilds',
    body: 'With the pandemic easing, momentum rebuilt as community engagement increased and foundational structures were put in place.',
    image: null,
  },
  {
    year: 2023,
    monthYear: 'June 2023',
    title: 'Vision and rebrand',
    body: "The new executive board revised and defined a new vision and strategy, which included rebranding the charity's operating name to National Waqf.",
    image: null,
  },
  {
    year: 2024,
    monthYear: 'June 2024',
    title: '£1m milestone invested',
    body: 'A £1 million donation milestone was reached and strategically invested into income-generating assets to create long-term, sustainable impact.',
    image: null,
  },
  {
    year: 2025,
    monthYear: 'December 2025',
    title: 'First public grant cycle',
    body: 'Our first public grant cycle marked a major milestone, with grants awarded to five organisations to strengthen their capacity and deliver measurable impact.',
    image: null,
  },
  {
    year: 2026,
    monthYear: 'February 2026',
    title: 'Waqf Pack launched',
    body: 'The Waqf Pack is launched and made available for purchase by charities, Muslim institutions, high-net-worth individuals, and families seeking structured Islamic estate planning.',
    image: null,
  },
];

export default function AboutCompanyTimeline() {
  const containerRef = useRef(null);
  const milestoneRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;
      
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight * 0.4 - containerTop) / (containerHeight - windowHeight * 0.2)
      ));
      setProgress(scrollProgress);

      const triggerPoint = windowHeight * 0.35;
      let newActiveIndex = 0;
      
      milestoneRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const yearElement = ref.querySelector('.aurora-timeline__year');
        if (yearElement) {
          const yearRect = yearElement.getBoundingClientRect();
          if (yearRect.top <= triggerPoint) {
            newActiveIndex = i;
          }
        }
      });
      
      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const displayYear = MILESTONES[activeIndex]?.year === 2026 ? 'TODAY' : MILESTONES[activeIndex]?.year;

  return (
    <section className="aurora-timeline-section" ref={containerRef}>
      <h2 className="aurora-timeline__section-title">Our Journey So Far</h2>
      
      <div className="aurora-timeline__wrapper">
        <div className="aurora-timeline__sticky-left">
          <div className="aurora-timeline__sticky-inner">
            <span className="aurora-timeline__header-label">COMPANY TIMELINE</span>
            <div className="aurora-timeline__giant-year">{displayYear}</div>
            
            <div className="aurora-timeline__progress-rail">
              <span className="aurora-timeline__progress-start">{MILESTONES[0].year}</span>
              <div className="aurora-timeline__progress-track">
                <div className="aurora-timeline__progress-track-bg" />
                <div 
                  className="aurora-timeline__progress-track-fill" 
                  style={{ height: `${progress * 100}%` }} 
                />
                <div className="aurora-timeline__progress-dot aurora-timeline__progress-dot--start" />
                <div className="aurora-timeline__progress-dot aurora-timeline__progress-dot--end" />
              </div>
              <span className="aurora-timeline__progress-end">TODAY</span>
            </div>
          </div>
        </div>

        <div className="aurora-timeline__content">
        <div className="aurora-timeline__columns">
          <div className="aurora-timeline__column aurora-timeline__column--left">
            {MILESTONES.filter((_, i) => i % 2 === 0).map((milestone, i) => {
              const globalIndex = i * 2;
              const isActive = globalIndex <= activeIndex;
              return (
                <article
                  key={milestone.year + milestone.title}
                  ref={el => milestoneRefs.current[globalIndex] = el}
                  className="aurora-timeline__milestone"
                >
                  <span className={`aurora-timeline__year ${isActive ? 'aurora-timeline__year--active' : ''}`}>
                    {milestone.monthYear}
                  </span>
                  <div className="aurora-timeline__image-placeholder" />
                  <h3 className="aurora-timeline__title">{milestone.title}</h3>
                  <p className="aurora-timeline__body">{milestone.body}</p>
                </article>
              );
            })}
          </div>

          <div className="aurora-timeline__column aurora-timeline__column--right">
            {MILESTONES.filter((_, i) => i % 2 === 1).map((milestone, i) => {
              const globalIndex = i * 2 + 1;
              const isActive = globalIndex <= activeIndex;
              return (
                <article
                  key={milestone.year + milestone.title}
                  ref={el => milestoneRefs.current[globalIndex] = el}
                  className="aurora-timeline__milestone"
                >
                  <span className={`aurora-timeline__year ${isActive ? 'aurora-timeline__year--active' : ''}`}>
                    {milestone.monthYear}
                  </span>
                  <div className="aurora-timeline__image-placeholder" />
                  <h3 className="aurora-timeline__title">{milestone.title}</h3>
                  <p className="aurora-timeline__body">{milestone.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
