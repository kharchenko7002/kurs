export default function Card({ title, date, cover, desc, tags, onOpen }) {
  return (
    <article
      className="work-card"
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" ? onOpen() : null)}
      aria-label={`${title} — åpne detaljer`}
    >
      <figure className="work-media">
        <img src={cover} alt={title} loading="lazy" />
        <span className="work-date">{date}</span>
      </figure>
      <div className="work-body">
        <h3 className="work-card-title">{title}</h3>
        <p className="work-card-desc">{desc}</p>
        <div className="work-tags">
          {tags.map((t, i) => (
            <span key={i} className="work-tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
