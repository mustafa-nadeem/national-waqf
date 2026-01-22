import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyWaqfPanels.css';

gsap.registerPlugin(ScrollTrigger);

const CHAPTERS = [
  {
    number: '1',
    headline: 'Because self-perpetuating funding is effective',
    paragraph:
      'Unlike one-time donations that get spent and disappear, waqf can create a permanent income stream or benefit to a community.',
    background: '#FFFFFF',
  },
  {
    number: '2',
    headline: 'Generational stability',
    paragraph:
      "Because Waqf assets can't be sold or divided up, they survive political changes, economic crises, and family disputes. A mosque or school established 500 years ago can still be operating today from the same endowment. This provides communities stable institutions that benefit them across generations.",
    background: '#FFFFFF',
  },
  {
    number: '3',
    headline: 'The multiplier effect',
    paragraph:
      'One strategic waqf can spawn entire ecosystems. For example, a Waqf might fund a nearby school, which educates locals, who then open businesses in that same market. The economic and social benefits compound and grow over time.',
    background: '#FFFFFF',
  },
  {
    number: '4',
    headline: 'Community impact',
    paragraph:
      "Waqf creates lasting infrastructure that serves communities for generations. National Waqf carefully analyses and assesses a project's viability and the potential impact it can make before providing the funding that will drive that project forward.",
    background: '#FFFFFF',
  },
];

export default function WhyWaqfPanels() {
  const stageRef = useRef(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    const stage = stageRef.current;
    const panels = panelRefs.current;

    // Only run GSAP on desktop/tablet
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      // Set initial positions - panels 2-4 start below viewport
      gsap.set(panels.slice(1), { yPercent: 100 });

      // Create timeline for panel transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => `+=${(CHAPTERS.length - 1) * window.innerHeight}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update overlay visibility based on panel overlap
            const progress = self.progress;
            
            // Panel 1 overlapped when progress > 0.25
            panels[0].setAttribute('data-overlapped', progress > 0.25 ? 'true' : 'false');
            
            // Panel 2 overlapped when progress > 0.5
            if (panels[1]) panels[1].setAttribute('data-overlapped', progress > 0.5 ? 'true' : 'false');
            
            // Panel 3 overlapped when progress > 0.75
            if (panels[2]) panels[2].setAttribute('data-overlapped', progress > 0.75 ? 'true' : 'false');
          },
        },
      });

      // Animate panels 2, 3, 4 sliding up to cover previous (yPercent 100 -> 0)
      panels.slice(1).forEach((panel, index) => {
        tl.to(
          panel,
          {
            yPercent: 0,
            ease: 'none',
            duration: 1,
          },
          index // Sequential timing
        );
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    });

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mm.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Static Header - Normal document flow, NOT pinned */}
      <div className="why-waqf-header">
        <div className="why-waqf-header__container">
          <h1 className="why-waqf-header__title">Why Waqf?</h1>
        </div>
      </div>

      {/* Pinned Animated Stage */}
      <section className="why-waqf-stage" ref={stageRef}>
        <div className="why-waqf-panel-stack">
          {CHAPTERS.map((chapter, index) => (
            <div
              key={chapter.number}
              className="why-waqf-panel"
              ref={(el) => (panelRefs.current[index] = el)}
              style={{
                zIndex: index + 1,
                backgroundColor: chapter.background,
              }}
            >
            <div className="why-waqf-panel__container">
              {/* Left Column - Number */}
              <div className="why-waqf-panel__number-col">
                <span className="why-waqf-panel__number">{chapter.number}</span>
              </div>

              {/* Right Column - Content */}
              <div className="why-waqf-panel__content-col">
                <h2 className="why-waqf-panel__headline">{chapter.headline}</h2>

                {/* Image Placeholder */}
                <div className="why-waqf-panel__image-wrapper">
                  <div className="why-waqf-panel__image-placeholder">
                    <span className="why-waqf-panel__image-label">Image</span>
                  </div>
                </div>

                <p className="why-waqf-panel__paragraph">{chapter.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
