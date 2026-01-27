import { useRef, useState, useEffect } from 'react';
import Container from '../../../components/layout/Container';
import image1 from '../../../assets/images/what-is-waqf/image1.svg';
import image2 from '../../../assets/images/what-is-waqf/image2.svg';
import image3 from '../../../assets/images/what-is-waqf/image3.svg';
import './WhatIsWaqfSection.css';

const TIMELINE_STEPS = [
  {
    id: 'donate',
    title: 'Donate',
    description: 'Your generous donations are collected and pooled together.',
    image: image1,
  },
  {
    id: 'invest',
    title: 'Invest',
    description: "Our Investment Committee invests the donations into Shari'ah compliant and income generating assets to preserve the principal of the donation and generate growth and income.",
    image: image2,
  },
  {
    id: 'distribute',
    title: 'Distribute and Grow',
    description: "The profits generated from these investments are given out as grants to help the community. It's a long-lasting way to make a difference.",
    image: image3,
  },
];

export default function AboutTimelineSection() {
  const sectionRef = useRef(null);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [lineFillProgress, setLineFillProgress] = useState(0);
  const stepRefs = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const windowHeight = window.innerHeight;
      if (timelineRef.current) {
        const timeline = timelineRef.current;
        const timelineTop = timeline.getBoundingClientRect().top;
        const timelineVisibleStart = windowHeight * 0.8;
        const timelineVisibleEnd = windowHeight * 0.2;
        let overallProgress = (timelineVisibleStart - timelineTop) / (timelineVisibleStart - timelineVisibleEnd);
        overallProgress = Math.max(0, Math.min(1, overallProgress));
        const numLines = TIMELINE_STEPS.length - 1;
        const scaledProgress = overallProgress * numLines;
        const currentLineIndex = Math.floor(scaledProgress);
        const currentLineFill = scaledProgress - currentLineIndex;
        setLineFillProgress(currentLineFill);
        stepRefs.current.lineIndex = currentLineIndex;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const newVisibleSteps = [0];
    const numLines = TIMELINE_STEPS.length - 1;
    const overallProgress = (stepRefs.current.lineIndex !== undefined ? stepRefs.current.lineIndex : 0) + lineFillProgress;
    for (let i = 1; i < TIMELINE_STEPS.length; i++) {
      if (overallProgress >= i) {
        newVisibleSteps.push(i);
      }
    }
    setVisibleSteps(newVisibleSteps);
  }, [lineFillProgress]);

  return (
    <section className="what-is-waqf" ref={sectionRef}>
      <Container>
        {/* Static Title, smaller size */}
        <div className="what-is-waqf__hero">
          <h2 className="what-is-waqf__title" style={{ fontSize: '3.3rem', fontWeight: 600, marginBottom: '2.2rem' }}>
            How does National Waqf Work?
          </h2>
        </div>
        {/* Timeline Section with animation */}
        <div className="what-is-waqf__timeline" ref={timelineRef}>
          <div className="what-is-waqf__timeline-rail"
            style={{
              '--line-fill-progress': `${lineFillProgress * 100}%`,
              '--filled-lines': stepRefs.current.lineIndex || 0,
              '--num-lines': TIMELINE_STEPS.length - 1,
            }}
          >
            {TIMELINE_STEPS.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`what-is-waqf__step ${visibleSteps.includes(index) ? 'what-is-waqf__step--visible' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="what-is-waqf__dot-container">
                  <div className={`what-is-waqf__dot ${visibleSteps.includes(index) ? 'what-is-waqf__dot--active' : ''}`} />
                  {index < TIMELINE_STEPS.length - 1 && (
                    <div
                      className="what-is-waqf__line"
                      style={{
                        '--line-index': index,
                        '--current-line-index': stepRefs.current.lineIndex || 0,
                        '--current-line-fill': `${lineFillProgress * 100}%`,
                        '--is-filled': (stepRefs.current.lineIndex || 0) > index
                          ? '100%'
                          : (stepRefs.current.lineIndex || 0) === index
                            ? `${lineFillProgress * 100}%`
                            : '0%',
                      }}
                    />
                  )}
                </div>
                {/* Step Content + Image Row */}
                <div className="what-is-waqf__step-row">
                  <div className="what-is-waqf__step-content">
                    <h3 className="what-is-waqf__step-title">{step.title}</h3>
                    <p className="what-is-waqf__step-description">{step.description}</p>
                  </div>
                  <div className="what-is-waqf__step-image">
                    <img src={step.image} alt={step.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
