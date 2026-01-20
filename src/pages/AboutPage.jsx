import AboutHero from '../features/about/sections/AboutHero';
import AboutSplitSection from '../features/about/sections/AboutSplitSection';
import PurposeVisionMission from '../features/about/sections/PurposeVisionMission';
import PillarCardGrid from '../features/about/sections/PillarCardGrid';
import TrusteesGrid from '../features/about/sections/TrusteesGrid';
import ShariaBoardGrid from '../features/about/sections/ShariaBoardGrid';
import PrinciplesSection from '../features/about/sections/PrinciplesSection';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutSplitSection />
      <PurposeVisionMission />
      <PillarCardGrid />
      <TrusteesGrid />
      <ShariaBoardGrid />
      <PrinciplesSection />
    </div>
  );
}
