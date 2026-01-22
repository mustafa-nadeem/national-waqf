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
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Calculate progress: animation completes when 90% past the hero section
      // Animation starts when section enters viewport, completes at 10% into section
      const scrollStart = windowHeight;
      const scrollEnd = windowHeight * 0.1; // Complete at 90% past hero (10% into viewport)
      const progress = Math.max(0, Math.min(1, (scrollStart - sectionTop) / (scrollStart - scrollEnd)));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Timeline step visibility observers
  useEffect(() => {
    const observers = [];
    const options = {
      root: null,
      rootMargin: '-5% 0px -15% 0px',
      threshold: 0.2,
    };

    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            } else {
              setVisibleSteps((prev) => prev.filter((i) => i !== index));
            }
          });
        }, options);

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

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
        <div className="what-is-waqf__timeline">
          <div className="what-is-waqf__timeline-rail">
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
                    <div className="what-is-waqf__line" />
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
