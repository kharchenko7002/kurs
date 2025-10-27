export default function Step({ n, title, lead, more, bullets }) {
  return (
    <li className="slik-step">
      <div className="slik-pin">
        <div className="slik-number">{n}</div>
        <span className="slik-line" />
      </div>

      <details className="slik-card">
        <summary className="slik-summary">
          <div className="slik-head">
            <h3 className="slik-item-title">{title}</h3>
            <p className="slik-item-lead">{lead}</p>
          </div>
          <svg
            className="slik-chevron"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </summary>

        <div className="slik-more">
          <p className="slik-more-text">{more}</p>
          <ul className="slik-bullets">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="slik-actions">
            <a href="#skjema" className="btn btn-primary">Søk nå</a>
            <a href="#faq" className="btn btn-ghost">Les vanlige spørsmål</a>
          </div>
        </div>
      </details>
    </li>
  );
}
