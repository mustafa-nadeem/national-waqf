import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import MetricTile from './MetricTile';
import './ImpactMetricsSection.css';

const METRICS = [
  { id: 'funds', value: '£3m+', label: 'Total Funds Raised', size: 'large', highlight: true },
  { id: 'projects', value: '60+', label: 'Projects Funded', size: 'default' },
  { id: 'years', value: '10', label: 'Years of Impact', size: 'default' },
  { id: 'allocation', value: '100%', label: 'Sharia Compliant', size: 'default' },
  { id: 'growth', value: '8%', label: 'Average Annual Return', size: 'default' },
  { id: 'communities', value: '25+', label: 'Communities Served', size: 'large' },
];

export default function ImpactMetricsSection() {
  return (
    <section className="impact-metrics">
      <Container>
        <SectionHeader
          subtitle="Our Track Record"
          title="The Impact We Have Made"
          description="Real numbers that demonstrate the difference your contributions make in communities across the United Kingdom."
        />
        <div className="impact-metrics__grid">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className={`impact-metrics__item impact-metrics__item--${metric.size || 'default'}`}
            >
              <MetricTile
                value={metric.value}
                label={metric.label}
                size={metric.size}
                highlight={metric.highlight}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
