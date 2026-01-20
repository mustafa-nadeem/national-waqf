import HomeHero from '../features/home/sections/HomeHero';
import WhatIsWaqfSection from '../features/home/sections/WhatIsWaqfSection';
import WhyWaqfSection from '../features/home/sections/WhyWaqfSection';
import ImpactMetricsSection from '../features/home/sections/ImpactMetricsSection';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeHero />
      <WhatIsWaqfSection />
      <WhyWaqfSection />
      <ImpactMetricsSection />
    </div>
  );
}
