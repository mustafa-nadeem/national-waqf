import { useEffect, useRef, useState } from 'react';
import Button from '../../../components/ui/Button';
import './WhatIsWaqfSection.css';

const WAQF_CARDS = [
  {
    id: 'how-waqf-works',
    number: '01',
    title: 'How Waqf works',
    description: 'Find drop-off points, analyze funnels, and improve onboarding experiences.',
    ctaText: 'Learn More About Waqf',
    chartTitle: 'Waqf Process',
    chartSubtitle: '3-step Process • Last 3 months',
    content: [
      {
        subtitle: 'A sustainable and permanent benefit to society:',
        body: 'Waqf creates a permanent income stream or provides permanent benefit to a community. A donated building generates rent forever, farmland produces crops year after year, a well can provide water to a whole community. The infrastructure funds itself and the benefits can self perpetuate.',
      },
      {
        subtitle: 'For the good of society:',
        body: 'A Waqf cannot be sold or transferred as, once donated and put under trust, it has to remain as a Waqf forever. Trustees are entrusted to look after the Waqf for as long as it is in use.',
      },
    ],
  },
  {
    id: 'benefits-of-waqf',
    number: '02',
    title: 'The benefits of Waqf',
    description: 'Uncover the features and behaviors that keep users active and coming back.',
    ctaText: 'Discover Benefits',
    chartTitle: 'Waqf Impact',
    chartSubtitle: 'Total, last 12 months',
    content: [
      {
        subtitle: 'Rewards to the donor:',
        body: 'The rewards to the donor count the same as Sadaqah Jariyah - an ongoing reward for as long as the donation is in use.',
      },
      {
        subtitle: 'Wealth circulation:',
        body: 'A Waqf redirects private wealth towards public good.',
      },
      {
        subtitle: 'Independence:',
        body: 'Communities can fund their own religious and social institutions through sustainable investment.',
      },
    ],
  },
  {
    id: 'sustainable-infrastructure',
    number: '03',
    title: 'Building sustainable infrastructure',
    description: 'Throughout Islamic history, Waqf has funded universities, hospitals, libraries, and more.',
    ctaText: 'See Infrastructure Impact',
    chartTitle: 'Infrastructure Growth',
    chartSubtitle: 'Total, last 12 months',
    content: [
      {
        subtitle: 'An Islamic way of building communities:',
        body: 'Throughout Islamic history, Waqf has funded universities, hospitals, libraries, public fountains, wells, supported scholars as well as many other societal causes. Waqf creates lasting infrastructure that serves communities for generations. It is an endowment fund rooted in Islamic law and spirituality - designed to build communities and benefit them forever.',
      },
    ],
  },
];

export default function WhatIsWaqfSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const scrollStart = windowHeight * 0.5;
      const scrollEnd = -sectionHeight + windowHeight * 0.5;
      const scrollProgress = (scrollStart - sectionTop) / (scrollStart - scrollEnd);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Determine which card should be active based on scroll progress
      const cardSize = 1 / WAQF_CARDS.length;
      let newIndex = Math.floor(clampedProgress / cardSize);
      newIndex = Math.min(newIndex, WAQF_CARDS.length - 1);
      
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="what-is-waqf" ref={sectionRef}>
      <div className="what-is-waqf__layout">
          {/* Left Side - Sticky Title, Description, CTA */}
          <div className="what-is-waqf__left">
            <h2 className="what-is-waqf__title">
              What is Waqf?
            </h2>
            <p className="what-is-waqf__description">
              Waqf helps improve communities and create lasting impact by understanding needs, 
              investing sustainably, and making informed decisions that benefit generations to come.
            </p>
            <Button 
              to="/learn-more" 
              variant="navy" 
              size="medium"
              className="what-is-waqf__cta"
            >
              Learn More &gt;
            </Button>
          </div>

          {/* Right Side - Scrollable Cards */}
          <div className="what-is-waqf__right">
            {WAQF_CARDS.map((card, index) => (
              <div
                key={card.id}
                className={`what-is-waqf__card ${
                  index === activeIndex ? 'what-is-waqf__card--active' : ''
                }`}
              >
                <div className="what-is-waqf__card-content">
                  {/* Left Side - Text */}
                  <div className="what-is-waqf__card-left">
                    {/* Card Header */}
                    <div className="what-is-waqf__card-header">
                      <span className="what-is-waqf__card-number">{card.number}</span>
                      <h3 className="what-is-waqf__card-title">{card.title}</h3>
                    </div>

                    {/* Card Description */}
                    <p className="what-is-waqf__card-description">
                      {card.description}
                    </p>

                    {/* Card CTA Button */}
                    <Button 
                      to={`/learn-more#${card.id}`}
                      variant="muted"
                      size="small"
                      className="what-is-waqf__card-cta"
                    >
                      {card.ctaText} &gt;
                    </Button>
                  </div>

                  {/* Right Side - Image Placeholder */}
                  <div className="what-is-waqf__card-right">
                    <div className="what-is-waqf__card-chart">
                      <div className="what-is-waqf__chart-header">
                        <h4 className="what-is-waqf__chart-title">{card.chartTitle}</h4>
                        <span className="what-is-waqf__chart-subtitle">{card.chartSubtitle}</span>
                      </div>
                      <div className="what-is-waqf__chart-placeholder">
                        {/* Placeholder container for image/chart */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
