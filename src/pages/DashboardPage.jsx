import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import './DashboardPage.css';

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <Container>
        <div className="dashboard-page__content">
          <div className="dashboard-page__success-icon">✓</div>
          <h1 className="dashboard-page__title">Welcome to Your Dashboard</h1>
          <p className="dashboard-page__description">
            You have successfully signed in. This is a placeholder dashboard page 
            where you would normally see your donation history, impact reports, 
            and account settings.
          </p>
          
          <div className="dashboard-page__stats">
            <div className="dashboard-page__stat">
              <span className="dashboard-page__stat-value">£0</span>
              <span className="dashboard-page__stat-label">Total Donated</span>
            </div>
            <div className="dashboard-page__stat">
              <span className="dashboard-page__stat-value">0</span>
              <span className="dashboard-page__stat-label">Projects Supported</span>
            </div>
            <div className="dashboard-page__stat">
              <span className="dashboard-page__stat-value">0</span>
              <span className="dashboard-page__stat-label">Impact Reports</span>
            </div>
          </div>

          <div className="dashboard-page__actions">
            <Button to="/donate" size="large">Make a Donation</Button>
            <Link to="/" className="dashboard-page__link">Return to Home</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
