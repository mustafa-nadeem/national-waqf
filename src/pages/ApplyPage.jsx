import ApplyHeroSection from '../features/apply/sections/ApplyHeroSection';
import EligibilityDocumentDownload from '../features/apply/sections/EligibilityDocumentDownload';
import GrantApplicationSection from '../features/apply/sections/GrantApplicationSection';
import './ApplyPage.css';

export default function ApplyPage() {
  return (
    <div className="apply-page">
      <ApplyHeroSection />
      <EligibilityDocumentDownload />
      <GrantApplicationSection />
    </div>
  );
}
