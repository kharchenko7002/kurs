export default function SitatCard({ quote, name }) {
  return (
    <figure className="sitat-card">
      <div className="sitat-badge">❝</div>
      <blockquote className="sitat-text">{quote}</blockquote>
      <figcaption className="sitat-name">{name}</figcaption>
    </figure>
  );
}
