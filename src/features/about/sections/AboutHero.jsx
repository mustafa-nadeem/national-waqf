import Container from '../../../components/layout/Container';
import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="about-hero">
      <Container>
        <div className="about-hero__content">
          <h1 className="about-hero__title">
            National Waqf – Building Communities One Waqf at a Time
          </h1>
          <p className="about-hero__description">
            We are a UK-based charitable foundation dedicated to reviving the timeless 
            Islamic tradition of Waqf. Our mission is to create sustainable, lasting 
            impact by channeling community donations into carefully managed endowments 
            that benefit generations to come.
          </p>
          <p className="about-hero__description">
            Through transparent governance, Sharia-compliant investments, and community-focused 
            projects, we're building a legacy of positive change across the United Kingdom.
          </p>
        </div>
      </Container>
    </section>
  );
}
