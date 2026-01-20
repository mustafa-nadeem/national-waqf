import Container from '../../../components/layout/Container';
import './EligibilityDocumentDownload.css';

export default function EligibilityDocumentDownload() {
  return (
    <section className="eligibility-download">
      <Container>
        <div className="eligibility-download__card">
          <div className="eligibility-download__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div className="eligibility-download__content">
            <h3 className="eligibility-download__title">Eligibility Criteria</h3>
            <p className="eligibility-download__text">
              Our eligibility criteria is clearly expressed in this downloadable document. 
              Please review before submitting your application.
            </p>
          </div>
          <a
            href="#eligibility-criteria"
            className="eligibility-download__button"
            download
            aria-label="Download Eligibility Criteria PDF"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>
      </Container>
    </section>
  );
}
