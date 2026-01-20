import './MetricTile.css';

export default function MetricTile({ value, label, size = 'default', highlight = false }) {
  const classNames = [
    'metric-tile',
    `metric-tile--${size}`,
    highlight && 'metric-tile--highlight',
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <span className="metric-tile__value">{value}</span>
      <span className="metric-tile__label">{label}</span>
    </div>
  );
}
