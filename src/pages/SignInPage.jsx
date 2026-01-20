import Container from '../components/layout/Container';
import RegisterAccessSection from '../features/auth/sections/RegisterAccessSection';
import SectionDivider from '../features/auth/sections/SectionDivider';
import SignInSection from '../features/auth/sections/SignInSection';
import './SignInPage.css';

export default function SignInPage() {
  return (
    <div className="signin-page">
      <Container>
        <div className="signin-page__content">
          <div className="signin-page__header">
            <span className="signin-page__subtitle">Account Access</span>
            <h1 className="signin-page__title">Welcome Back</h1>
          </div>
          
          <div className="signin-page__card">
            <RegisterAccessSection />
            <SectionDivider text="already have an account?" />
            <SignInSection />
          </div>
        </div>
      </Container>
    </div>
  );
}
