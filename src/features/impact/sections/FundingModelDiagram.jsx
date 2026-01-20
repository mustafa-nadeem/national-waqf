import './FundingModelDiagram.css';

export default function FundingModelDiagram() {
  return (
    <div className="funding-model-diagram">
      <div className="funding-model-diagram__flow">
        {/* Donor */}
        <div className="funding-model-diagram__node funding-model-diagram__node--start">
          <span className="funding-model-diagram__node-label">Your Donation</span>
        </div>

        <div className="funding-model-diagram__arrow">→</div>

        {/* Waqf Fund */}
        <div className="funding-model-diagram__node funding-model-diagram__node--center">
          <span className="funding-model-diagram__node-label">Waqf Fund</span>
          <span className="funding-model-diagram__node-sub">Principal Preserved</span>
        </div>

        <div className="funding-model-diagram__arrow">→</div>

        {/* Investment */}
        <div className="funding-model-diagram__node">
          <span className="funding-model-diagram__node-label">Sharia Investment</span>
          <span className="funding-model-diagram__node-sub">Halal Returns</span>
        </div>

        <div className="funding-model-diagram__arrow">→</div>

        {/* Distribution */}
        <div className="funding-model-diagram__node funding-model-diagram__node--end">
          <span className="funding-model-diagram__node-label">Community Projects</span>
          <span className="funding-model-diagram__node-sub">Perpetual Impact</span>
        </div>
      </div>

      <div className="funding-model-diagram__loop">
        <span>Returns reinvested annually</span>
      </div>
    </div>
  );
}
