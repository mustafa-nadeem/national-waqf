import Placeholder from '../../../components/ui/Placeholder';
import './FeatureSplit.css';

export default function FeatureSplit({ title, description, imageLabel, reversed = false }) {
  return (
    <div className={`feature-split ${reversed ? 'feature-split--reversed' : ''}`}>
      <div className="feature-split__image">
        <Placeholder label={imageLabel} aspectRatio="4/3" />
      </div>
      <div className="feature-split__content">
        <h3 className="feature-split__title">{title}</h3>
        <p className="feature-split__description">{description}</p>
      </div>
    </div>
  );
}
