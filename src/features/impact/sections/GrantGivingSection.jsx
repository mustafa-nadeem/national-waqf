import Container from '../../../components/layout/Container';
import FundingModelDiagram from './FundingModelDiagram';
import './GrantGivingSection.css';

export default function GrantGivingSection() {
  return (
    <section className="grant-giving-section">
      <Container>
        <div className="grant-giving-section__grid">
          <div className="grant-giving-section__content">
            <div className="grant-giving-section__block">
              <h3 className="grant-giving-section__heading">Grant Giving</h3>
              <p className="grant-giving-section__text">
                Our grants support a wide range of community initiatives, from mosque 
                renovations to educational scholarships. We assess applications based on 
                community impact, sustainability, and alignment with Islamic values. 
                Grants are disbursed quarterly following rigorous due diligence.
              </p>
            </div>
            <div className="grant-giving-section__block">
              <h3 className="grant-giving-section__heading">Our Funding Model</h3>
              <p className="grant-giving-section__text">
                Unlike traditional charity, Waqf preserves your principal donation 
                permanently. Only the investment returns are distributed to charitable 
                causes, ensuring your generosity creates impact that lasts forever. 
                This model has sustained Muslim communities for over 1,400 years.
              </p>
            </div>
          </div>
          <div className="grant-giving-section__diagram">
            <FundingModelDiagram />
          </div>
        </div>
      </Container>
    </section>
  );
}
