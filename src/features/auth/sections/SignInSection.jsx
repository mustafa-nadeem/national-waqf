import SignInForm from './SignInForm';
import SectionDivider from './SectionDivider';
import SocialAuthButtons from './SocialAuthButtons';
import './SignInSection.css';

export default function SignInSection() {
  const handleSocialAuth = (providerId) => {
    // Mock handler - would integrate with OAuth in production
    console.log('Initiating social auth with:', providerId);
    alert(`Social sign-in with ${providerId} would be initiated here.`);
  };

  return (
    <div className="signin-section">
      <h2 className="signin-section__title">
        Sign in to your dashboard
      </h2>
      <p className="signin-section__description">
        Access your donation history, impact reports, and account settings.
      </p>
      
      <SignInForm />
      
      <SectionDivider text="or continue with" />
      
      <SocialAuthButtons onProviderClick={handleSocialAuth} />
    </div>
  );
}
