import LearnMoreHeroCTA from '../features/learnMore/sections/LearnMoreHeroCTA';
import IslamicGivingOverview from '../features/learnMore/sections/IslamicGivingOverview';
import AwqafTypesSection from '../features/learnMore/sections/AwqafTypesSection';
import WorkshopsBookingSection from '../features/learnMore/sections/WorkshopsBookingSection';
import PoliciesSection from '../features/learnMore/sections/PoliciesSection';
import ContentHubSection from '../features/learnMore/sections/ContentHubSection';
import FinancialReportsSection from '../features/learnMore/sections/FinancialReportsSection';
import FAQSection from '../features/learnMore/sections/FAQSection';
import './LearnMorePage.css';

export default function LearnMorePage() {
  return (
    <div className="learn-more-page">
      <LearnMoreHeroCTA />
      <IslamicGivingOverview />
      <AwqafTypesSection />
      <WorkshopsBookingSection />
      <PoliciesSection />
      <ContentHubSection />
      <FinancialReportsSection />
      <FAQSection />
    </div>
  );
}
