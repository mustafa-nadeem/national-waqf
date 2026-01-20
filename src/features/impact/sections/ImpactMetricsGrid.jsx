import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import './ImpactMetricsGrid.css';

const METRICS = [
  { id: 'sharia', value: '100%', label: 'Sharia Compliant Investments', highlight: true },
  { id: 'raised', value: '£3m+', label: 'Total Funds Raised' },
  { id: 'years', value: '10', label: 'Years of Impact' },
  { id: 'admin', value: '3%', label: 'Administrative Costs' },
  { id: 'return', value: '8%', label: 'Average Annual Return' },
  { id: 'projects', value: '60+', label: 'Projects Funded', highlight: true },
];

export default function ImpactMetricsGrid() {
  return (
    <section className="impact-metrics-grid">
      <Container>
        <SectionHeader
          subtitle="By The Numbers"
          title="Areas We Invest In"
          description="Transparent metrics that demonstrate our commitment to sustainable impact."
        />
        <div className="impact-metrics-grid__grid">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className={`impact-metrics-grid__tile ${metric.highlight ? 'impact-metrics-grid__tile--highlight' : ''}`}
            >
              <span className="impact-metrics-grid__value">{metric.value}</span>
              <span className="impact-metrics-grid__label">{metric.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
