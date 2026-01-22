import { useEffect, useRef, useState } from 'react';
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
    description: 'Our Investment Committee invests the donations into Shari\'ah compliant and income generating assets to preserve the principal of the donation and generate growth and income.',
    image: image2,
  },
  {
    id: 'distribute',
    title: 'Distribute and Grow',
    description: 'The profits generated from these investments are given out as grants to help the community. It\'s a long-lasting way to make a difference.',
    image: image3,
  },
];

export default function WhatIsWaqfSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [lineFillProgress, setLineFillProgress] = useState(0);
  const stepRefs = useRef([]);

  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Calculate progress for title: animation completes when 90% past the hero section
      const scrollStart = windowHeight;
      const scrollEnd = windowHeight * 0.1;
      const progress = Math.max(0, Math.min(1, (scrollStart - sectionTop) / (scrollStart - scrollEnd)));
      setScrollProgress(progress);

      // Calculate timeline scroll progress - lines fill sequentially, each 0-100%
      if (timelineRef.current) {
        const timeline = timelineRef.current;
        const timelineTop = timeline.getBoundingClientRect().top;
        
        // Map scroll position to timeline fill progress (0 to 1)
        const timelineVisibleStart = windowHeight * 0.8;
        const timelineVisibleEnd = windowHeight * 0.2;
        
        let overallProgress = (timelineVisibleStart - timelineTop) / (timelineVisibleStart - timelineVisibleEnd);
        overallProgress = Math.max(0, Math.min(1, overallProgress));
        
        // Scale overall progress to accommodate all lines
        // If we have 2 lines, scale by 2 so each line gets 0-100%
        const numLines = TIMELINE_STEPS.length - 1;
        const scaledProgress = overallProgress * numLines;
        
        // Current line (0, 1, 2, etc) and its fill progress (0-1)
        const currentLineIndex = Math.floor(scaledProgress);
        const currentLineFill = scaledProgress - currentLineIndex;
        
        setLineFillProgress(currentLineFill);
        
        // Store which line we're currently on
        stepRefs.current.lineIndex = currentLineIndex;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stagger step visibility based on line completion
  useEffect(() => {
    const newVisibleSteps = [0]; // Step 0 always visible
    
    const numLines = TIMELINE_STEPS.length - 1;
    const overallProgress = (stepRefs.current.lineIndex !== undefined ? stepRefs.current.lineIndex : 0) + lineFillProgress;
    
    for (let i = 1; i < TIMELINE_STEPS.length; i++) {
      // Step i appears when line i-1 is complete (progress >= i)
      if (overallProgress >= i) {
        newVisibleSteps.push(i);
      }
    }
    
    setVisibleSteps(newVisibleSteps);
  }, [lineFillProgress]);

  // Initial positions (spread across entire page height, then compress to center)
  const whatStart = { x: -40, y: 0 }; // middle-left (closer to center)
  const isStart = { x: 0, y: 250 }; // below middle (moved down)
  const waqfStart = { x: 40, y: 500 }; // bottom-right (closer to center)

  // Final positions (all aligned horizontally at center/middle - in white section)
  const whatEnd = { x: -80, y: 0 }; // center-left, aligned
  const isEnd = { x: 0, y: 0 }; // center-middle, aligned
  const waqfEnd = { x: 80, y: 0 }; // center-right, aligned

  // Linear interpolation
  const lerp = (start, end, t) => start + (end - start) * t;

  // Calculate current positions based on scroll progress
  const whatPos = {
    x: lerp(whatStart.x, whatEnd.x, scrollProgress),
    y: lerp(whatStart.y, whatEnd.y, scrollProgress),
  };

  const isPos = {
    x: lerp(isStart.x, isEnd.x, scrollProgress),
    y: lerp(isStart.y, isEnd.y, scrollProgress),
  };

  const waqfPos = {
    x: lerp(waqfStart.x, waqfEnd.x, scrollProgress),
    y: lerp(waqfStart.y, waqfEnd.y, scrollProgress),
  };

  return (
    <section className="what-is-waqf" ref={sectionRef}>
      <Container>
        {/* Animated Title */}
        <div className="what-is-waqf__hero">
          <h2 className="what-is-waqf__title">
            {/* "What" - top-left, moves slightly down to align */}
            <span 
              className="what-is-waqf__title-part"
              style={{
                transform: `translate(${whatPos.x}px, ${whatPos.y}px)`,
              }}
            >
              What
            </span>

            {/* "is" - middle, moves up to align */}
            <span 
              className="what-is-waqf__title-part"
              style={{
                transform: `translate(${isPos.x}px, ${isPos.y}px)`,
              }}
            >
              is
            </span>

            {/* "Waqf?" - bottom-right, moves up and stays right to align */}
            <span 
              className="what-is-waqf__title-part"
              style={{
                transform: `translate(${waqfPos.x}px, ${waqfPos.y}px)`,
              }}
            >
              Waqf?
            </span>
          </h2>
        </div>

        {/* Timeline Section */}
        <div className="what-is-waqf__timeline" ref={timelineRef}>
          <div 
            className="what-is-waqf__timeline-rail"
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
                className={`what-is-waqf__step ${
                  visibleSteps.includes(index) ? 'what-is-waqf__step--visible' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="what-is-waqf__dot-container">
                  <div
                    className={`what-is-waqf__dot ${
                      visibleSteps.includes(index) ? 'what-is-waqf__dot--active' : ''
                    }`}
                  />
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
                  {/* Step Text */}
                  <div className="what-is-waqf__step-content">
                    <h3 className="what-is-waqf__step-title">{step.title}</h3>
                    <p className="what-is-waqf__step-description">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Image */}
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
