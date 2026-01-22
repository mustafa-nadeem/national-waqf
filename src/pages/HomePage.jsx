import HomeHero from '../features/home/sections/HomeHero';
import WhatIsWaqfSection from '../features/home/sections/WhatIsWaqfSection';
import WhyWaqfPanels from '../features/home/sections/WhyWaqfPanels';
import ImpactMetricsSection from '../features/home/sections/ImpactMetricsSection';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeHero />
      <WhatIsWaqfSection />
      <WhyWaqfPanels />
      <ImpactMetricsSection />
    </div>
  );
}
