import './ReportDownloadItem.css';

export default function ReportDownloadItem({ title, description, year, fileUrl = '#' }) {
  return (
    <div className="report-download-item">
      <div className="report-download-item__content">
        <div className="report-download-item__header">
          <h4 className="report-download-item__title">{title}</h4>
          {year && <span className="report-download-item__year">{year}</span>}
        </div>
        <p className="report-download-item__description">{description}</p>
      </div>
      <a
        href={fileUrl}
        className="report-download-item__download"
        download
        aria-label={`Download ${title}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </a>
    </div>
  );
}
