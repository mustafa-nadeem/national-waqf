import ImpactStatBlock from './ImpactStatBlock';
import './ImpactMetricsSection.css';

/**
 * ImpactMetricsSection - Editorial typography-led layout
 * 
 * Inspired by editorial compositions with strong whitespace
 * and asymmetric placement. No tiles, no cards—just typography.
 * 
 * Layout:
 * - Top-left anchor block (4422 supporters)
 * - Lower centerpiece block (£645k+ raised)  
 * - Right-side supporting block (9 organisations)
 */

const METRICS = [
  {
    id: 'supporters',
    value: '4422',
    label: 'Supporters of our Waqf',
    position: 'top-left',
  },
  {
    id: 'funds',
    value: '£645k+',
    label: 'Total funds raised to date',
    position: 'middle',
  },
  {
    id: 'orgs',
    value: '9',
    label: 'Organisations/Charities funded to date',
    position: 'bottom-right',
  },
];

export default function ImpactMetricsSection() {
  return (
    <section className="impact-metrics-editorial">
      <h2 className="impact-metrics-editorial__title">The Impact We Have Made</h2>
      <div className="impact-metrics-editorial__container">
        {/* Top-left stat */}
        <div className="impact-metrics-editorial__block impact-metrics-editorial__block--top-left">
          <ImpactStatBlock
            value={METRICS[0].value}
            label={METRICS[0].label}
          />
        </div>

        {/* Middle stat */}
        <div className="impact-metrics-editorial__block impact-metrics-editorial__block--middle">
          <ImpactStatBlock
            value={METRICS[1].value}
            label={METRICS[1].label}
          />
        </div>

        {/* Bottom-right stat */}
        <div className="impact-metrics-editorial__block impact-metrics-editorial__block--bottom-right">
          <ImpactStatBlock
            value={METRICS[2].value}
            label={METRICS[2].label}
          />
        </div>
      </div>
    </section>
  );
}
