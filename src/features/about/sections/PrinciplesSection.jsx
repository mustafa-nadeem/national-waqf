import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PrinciplesSection.css';

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  {
    id: 1,
    tab: 'Unity',
    tabPosition: 'left',
    title: 'Unity of the Ummah',
    quote: '"The believers are but brothers, so make settlement between your brothers. And fear Allah that you may receive mercy." [Qur\'an 49:10]',
    description: 'We are committed to building a stronger, more united Ummah. Our aim is to strengthen our communities through empowerment, collaboration, and working together.',
  },
  {
    id: 2,
    tab: 'Transparency',
    tabPosition: 'center-left',
    title: 'Transparency & Trust',
    quote: '"The religion is (to act) with sincerity" (Sahih Muslim)',
    description: 'We aim to operate with openness, honesty, and accountability in all that we do. As custodians of trust, we believe transparency is a divine responsibility. Our donors and communities deserve to see clearly how resources are managed.',
  },
  {
    id: 3,
    tab: 'Professional',
    tabPosition: 'center-right',
    title: 'Professional Excellence',
    quote: '"Allah loves that when one of you does something, that they perfect it." [Hadith, al-Bayhaqi]',
    description: 'Excellence (ihsan) is our standard. From governance to delivery, we strive for professionalism in every aspect of our work.',
  },
  {
    id: 4,
    tab: 'Independence',
    tabPosition: 'right',
    title: 'Independence with Integrity',
    quote: '"And stand firm for justice, even if it is against yourselves..." [Qur\'an 4:135]',
    description: 'We aim maintain independence in governance and decision-making. We aim to ensure that our mission stays true, our operations remain fair, and our voice always reflects the interests of the communities that we serve.',
  },
];

export default function PrinciplesSection() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const stage = stageRef.current;
    const cards = cardRefs.current;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      gsap.set(cards.slice(1), { yPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => `+=${(PRINCIPLES.length - 1) * window.innerHeight}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.slice(1).forEach((card, index) => {
        tl.to(
          card,
          {
            yPercent: 0,
            ease: 'none',
            duration: 1,
          },
          index
        );
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    });

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
    <section className="principles-section" ref={sectionRef}>
      <div className="principles-stage" ref={stageRef}>
        <div className="principles-container">
          <div className="principles-left">
            <h2 className="principles-left__title">Our Principles</h2>
            <p className="principles-left__desc">
              We honour four core principles inspired by our faith. These help to guide every decision we make, every trust we uphold, and every step we take in service of the Ummah.
            </p>
          </div>

          <div className="principles-right">
            <div className="principles-card-stack">
              {PRINCIPLES.map((principle, index) => (
                <div
                  key={principle.id}
                  className="principles-card"
                  ref={(el) => (cardRefs.current[index] = el)}
                  style={{ zIndex: index + 1 }}
                >
                  <div className={`principles-card__tab principles-card__tab--${principle.tabPosition}`}>{principle.tab}</div>
                  <div className="principles-card__content">
                    <h3 className="principles-card__title">{principle.title}</h3>
                    <p className="principles-card__quote">{principle.quote}</p>
                    <p className="principles-card__desc">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
