export default function Card({ title, text, onOpen }) {
  return (
    <button
      className="aktivitet-card"
      onClick={onOpen}
      aria-haspopup="dialog"
    >
      <div className="aktivitet-chip">Frivillig</div>
      <h3 className="aktivitet-card-title">{title}</h3>
      <p className="aktivitet-card-text">{text}</p>
      <div className="aktivitet-arrow">
        <span>Les mer</span>
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}
