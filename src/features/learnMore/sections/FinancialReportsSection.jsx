import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import ReportDownloadItem from './ReportDownloadItem';
import './FinancialReportsSection.css';

const REPORTS = [
  {
    id: 'annual-2025',
    title: 'Annual Report',
    description: 'Comprehensive overview of our activities, achievements, and financial performance.',
    year: '2025',
    fileUrl: '#annual-report-2025',
  },
  {
    id: 'financial-2025',
    title: 'Financial Statements',
    description: 'Audited accounts showing income, expenditure, and fund allocations.',
    year: '2025',
    fileUrl: '#financial-statements-2025',
  },
  {
    id: 'impact-2025',
    title: 'Impact Report',
    description: 'Detailed analysis of the social impact of our Waqf-funded projects.',
    year: '2025',
    fileUrl: '#impact-report-2025',
  },
  {
    id: 'sharia-2025',
    title: 'Sharia Compliance Certificate',
    description: 'Independent certification confirming adherence to Islamic principles.',
    year: '2025',
    fileUrl: '#sharia-certificate-2025',
  },
];

export default function FinancialReportsSection() {
  return (
    <section className="financial-reports-section">
      <Container>
        <SectionHeader
          subtitle="Accountability"
          title="Financial Reports"
          description="Access our audited financial reports and impact assessments for complete transparency."
        />
        <div className="financial-reports-section__list">
          {REPORTS.map((report) => (
            <ReportDownloadItem
              key={report.id}
              title={report.title}
              description={report.description}
              year={report.year}
              fileUrl={report.fileUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
