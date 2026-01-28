import Container from '../../../components/layout/Container';
import Button from '../../../components/ui/Button';
import './HomeHero.css';

export default function HomeHero() {
  return (
    <section className="home-hero">
      <Container size="full">
        <div className="home-hero__layout">
          {/* Left: Headline & copy */}
          <div className="home-hero__left">
            <h1 className="home-hero__heading">
              Building a better future
              <br />
              through sustainable <span>Waqf</span>
            </h1>
            <div className="home-hero__body">
              <p className="home-hero__copy home-hero__copy--emphasis">
                We are the authoritative body that collects, distributes and is entrusted with Waqf
                donations of all kinds in the United Kingdom.
              </p>
              <p className="home-hero__copy">
                We collect monetary and asset donations, buy and manage the assets and manage the
                yield that in turn funds Islamic community projects.
              </p>
              <p className="home-hero__copy">
                We work hard to identify worthy projects to fund, that build communities and
                society.
              </p>
            </div>
          </div>

          {/* Right: Donation card */}
          <div className="home-hero__donation-card" aria-label="Donation options">
            <header className="home-hero__donation-header">
              <h2 className="home-hero__donation-title">Donate to a waqf</h2>
              <p className="home-hero__donation-subtitle">
                Donate as little as <span>£5 a month</span> and help us build our communities.
                Complete the process below to earn eternal reward inshaAllah.
              </p>
            </header>

            {/* Frequency toggle */}
            <div className="home-hero__donation-toggle" role="tablist" aria-label="Donation frequency">
              <button type="button" className="home-hero__toggle-tab home-hero__toggle-tab--inactive">
                Give once
              </button>
              <button type="button" className="home-hero__toggle-tab home-hero__toggle-tab--active">
                Monthly
              </button>
            </div>

            {/* Amount choices */}
            <div className="home-hero__donation-body">
              <p className="home-hero__donation-label">Choose an amount to give</p>

              <div className="home-hero__amount-grid">
                <button type="button" className="home-hero__amount-pill">
                  <span className="home-hero__amount-main">£5</span>
                  <span className="home-hero__amount-sub">GBP/mo</span>
                </button>
                <button type="button" className="home-hero__amount-pill">
                  <span className="home-hero__amount-main">£10</span>
                  <span className="home-hero__amount-sub">GBP/mo</span>
                </button>
                <button
                  type="button"
                  className="home-hero__amount-pill home-hero__amount-pill--active"
                >
                  <span className="home-hero__amount-main">£20</span>
                  <span className="home-hero__amount-sub">GBP/mo</span>
                </button>
                <button type="button" className="home-hero__amount-pill home-hero__amount-pill--muted">
                  <span className="home-hero__amount-main">£40</span>
                  <span className="home-hero__amount-sub">GBP/mo</span>
                </button>
                <button
                  type="button"
                  className="home-hero__amount-pill home-hero__amount-pill--muted home-hero__amount-pill--wide"
                >
                  Other amount
                </button>
              </div>

              {/* Choose charity/campaign selector */}
              <select
                className="home-hero__charity-select"
                defaultValue=""
                aria-label="Choose a charity or campaign"
              >
                <option value="" disabled>
                  Choose a charity or campaign
                </option>
                <option value="clean-water">Clean Water Waqf</option>
                <option value="education">Education & Scholarships</option>
                <option value="masjid">Mosques & Community Centres</option>
                <option value="healthcare">Healthcare & Social Care</option>
              </select>

              {/* CTA */}
              <Button
                to="/donate"
                variant="donate"
                size="large"
                className="home-hero__donation-cta"
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
