import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import DocumentDownloadRow from './DocumentDownloadRow';
import './PoliciesSection.css';

const POLICIES = [
  {
    id: 'privacy',
    title: 'Privacy Policy',
    fileType: 'PDF',
    fileUrl: '#privacy-policy',
  },
  {
    id: 'safeguarding',
    title: 'Safeguarding Policy',
    fileType: 'PDF',
    fileUrl: '#safeguarding-policy',
  },
  {
    id: 'complaints',
    title: 'Complaints Procedure',
    fileType: 'PDF',
    fileUrl: '#complaints-procedure',
  },
  {
    id: 'governance',
    title: 'Governance Framework',
    fileType: 'PDF',
    fileUrl: '#governance-framework',
  },
];

export default function PoliciesSection() {
  return (
    <section className="policies-section">
      <Container>
        <SectionHeader
          subtitle="Transparency"
          title="Our Policies"
          description="Download our governance and operational policies to understand how we operate."
        />
        <div className="policies-section__list">
          {POLICIES.map((policy) => (
            <DocumentDownloadRow
              key={policy.id}
              title={policy.title}
              fileType={policy.fileType}
              fileUrl={policy.fileUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
