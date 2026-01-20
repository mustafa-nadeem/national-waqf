import ProjectsMapSection from '../features/impact/sections/ProjectsMapSection';
import EligibilityCTASection from '../features/impact/sections/EligibilityCTASection';
import FundedProjectsShowcase from '../features/impact/sections/FundedProjectsShowcase';
import SupportedLogosStrip from '../features/impact/sections/SupportedLogosStrip';
import ImpactMetricsGrid from '../features/impact/sections/ImpactMetricsGrid';
import GrantGivingSection from '../features/impact/sections/GrantGivingSection';
import CauseAreasSection from '../features/impact/sections/CauseAreasSection';
import './ImpactPage.css';

export default function ImpactPage() {
  return (
    <div className="impact-page">
      <ProjectsMapSection />
      <EligibilityCTASection />
      <FundedProjectsShowcase />
      <SupportedLogosStrip />
      <ImpactMetricsGrid />
      <GrantGivingSection />
      <CauseAreasSection />
    </div>
  );
}
