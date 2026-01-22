import { useState, useEffect, useRef } from 'react';
import Container from '../../../components/layout/Container';
import image1 from '../../../assets/images/what-is-waqf/image1.svg';
import image2 from '../../../assets/images/what-is-waqf/image2.svg';
import image3 from '../../../assets/images/what-is-waqf/image3.svg';
import './WhatIsWaqfTimelineSection.css';

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

export default function WhatIsWaqfTimelineSection() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

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
              // Add step when scrolling into view
              setVisibleSteps((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            } else {
              // Remove step when scrolling out of view (reverse animation)
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

  return (
    <section className="waqf-timeline">
      <Container>
        {/* Timeline Rail with Steps */}
        <div className="waqf-timeline__rail">
          {TIMELINE_STEPS.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`waqf-timeline__step ${
                visibleSteps.includes(index) ? 'waqf-timeline__step--visible' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="waqf-timeline__dot-container">
                <div
                  className={`waqf-timeline__dot ${
                    visibleSteps.includes(index) ? 'waqf-timeline__dot--active' : ''
                  }`}
                />
                {index < TIMELINE_STEPS.length - 1 && (
                  <div className="waqf-timeline__line" />
                )}
              </div>

              {/* Step Content + Image Row */}
              <div className="waqf-timeline__step-row">
                {/* Step Text */}
                <div className="waqf-timeline__step-content">
                  <h3 className="waqf-timeline__step-title">{step.title}</h3>
                  <p className="waqf-timeline__step-description">
                    {step.description}
                  </p>
                </div>

                {/* Step Image */}
                <div className="waqf-timeline__step-image">
                  <img src={step.image} alt={step.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
