import { SOCIAL_PROVIDERS } from './socialAuthConfig';
import './SocialAuthButtons.css';

export default function SocialAuthButtons({ onProviderClick }) {
  const handleClick = (providerId) => {
    // Mock handler - in production this would initiate OAuth flow
    console.log('Social auth clicked:', providerId);
    if (onProviderClick) {
      onProviderClick(providerId);
    }
  };

  return (
    <div className="social-auth-buttons">
      {SOCIAL_PROVIDERS.map((provider) => (
        <button
          key={provider.id}
          type="button"
          className="social-auth-button"
          onClick={() => handleClick(provider.id)}
        >
          <span className="social-auth-button__icon">{provider.icon}</span>
          <span className="social-auth-button__label">{provider.label}</span>
        </button>
      ))}
    </div>
  );
}
