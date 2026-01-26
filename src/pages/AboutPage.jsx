import InspirationStackedHero from '../components/layout/InspirationStackedHero';
import AboutTimelineSection from '../features/about/sections/AboutTimelineSection';
import AboutCompanyTimeline from '../features/about/sections/AboutCompanyTimeline';
import TeamSection from '../features/about/sections/TeamSection';
import PrinciplesSection from '../features/about/sections/PrinciplesSection';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <InspirationStackedHero />
      <AboutTimelineSection />
      <AboutCompanyTimeline />
      {/* Purpose, Vision, Mission */}
      <section className="about-pvm">
        <div className="about-pvm__block">
          <h2>Our purpose</h2>
          <p>National Waqf exists as an independent hub of practical Waqf in the UK, providing lasting solutions for community needs, inspired by faith and focused on future generations. Our purpose is to create sustainable, impactful change by pooling resources and expertise for the benefit of all.</p>
        </div>
        <div className="about-pvm__block">
          <h2>Our vision</h2>
          <p>A sustainable Waqf for every mosque, school, and community space. We envision a future where every community has access to the resources and support needed to thrive, with Waqf as a central pillar of social good.</p>
        </div>
        <div className="about-pvm__block">
          <h2>Our mission</h2>
          <p>To build, protect, and grow sustainable Waqf for years to come, and to deliver projects where others cannot, using every penny with transparency, professionalism, and faith-driven purpose.</p>
        </div>
      </section>

      {/* Trustees and Sharia Board */}
      <TeamSection />

      {/* Principles */}
      <PrinciplesSection />
    </div>
  );
}
