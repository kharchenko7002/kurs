export default function FordelCard({ title, text }) {
  return (
    <div className="fordel-card">
      <span className="fordel-icon" aria-hidden>✔</span>
      <div>
        <h3 className="fordel-card-title">{title}</h3>
        <p className="fordel-card-text">{text}</p>
      </div>
    </div>
  );
}
