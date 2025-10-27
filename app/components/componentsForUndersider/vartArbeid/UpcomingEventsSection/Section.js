"use client";
import { useState } from "react";
import "./styles.css";
import { EVENTS } from "./data";

const FALLBACK = "/placeholder-16x9.jpg";

export default function UpcomingEventsSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  if (!Array.isArray(EVENTS) || EVENTS.length === 0) {
    return (
      <section className="events-section">
        <div className="events-wrap">
          <header className="events-head">
            <h2 className="events-title">Meld deg på kommende aktiviteter</h2>
            <p className="events-sub">
              For øyeblikket er det ingen aktiviteter tilgjengelig.
            </p>
          </header>
        </div>
      </section>
    );
  }

  const showMore = () => setVisibleCount(EVENTS.length);
  const showLess = () => setVisibleCount(3);
  const visible = EVENTS.slice(0, visibleCount);

  return (
    <section className="events-section">
      <div className="events-wrap">
        <header className="events-head">
          <h2 className="events-title">Meld deg på kommende aktiviteter</h2>
          <p className="events-sub">
            Velg noe som passer deg – stort eller lite, alt teller.
          </p>
        </header>

        <div className="events-grid">
          {visible.map((e, i) => (
            <article className="event-card" key={i}>
              <figure className="event-media">
                <img
                  src={e.img || FALLBACK}
                  alt={e.title}
                  loading="lazy"
                  onError={(ev) => (ev.currentTarget.src = FALLBACK)}
                />
              </figure>

              <div className="event-body">
                <h3 className="event-title">{e.title}</h3>
                {e.date || e.place ? (
                  <p className="event-meta">
                    {e.date ? <span>{e.date}</span> : null}
                    {e.date && e.place ? " • " : null}
                    {e.place ? <span>{e.place}</span> : null}
                  </p>
                ) : null}
                <p className="event-desc">{e.text}</p>
                <a className="event-cta" href={e.link}>
                  Meld meg på
                </a>
              </div>
            </article>
          ))}
        </div>

        {EVENTS.length > 3 && (
          <div className="events-toggle">
            {visibleCount < EVENTS.length ? (
              <button className="events-toggle-btn" onClick={showMore}>
                Vis mer
              </button>
            ) : (
              <button className="events-toggle-btn" onClick={showLess}>
                Vis mindre
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
