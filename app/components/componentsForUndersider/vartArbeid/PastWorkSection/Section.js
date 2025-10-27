"use client";
import { useState } from "react";
import "./styles.css";
import { PAST_WORK } from "./data";
import Card from "./Card";
import Modal from "./Modal";

export default function PastWorkSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => setVisibleCount(PAST_WORK.length);
  const showLess = () => setVisibleCount(3);

  return (
    <section className="work-section">
      <div className="work-wrap">
        <header className="work-head">
          <h1 className="work-title">Vårt arbeid</h1>
          <p className="work-sub">Et utvalg av prosjekter og tiltak vi har gjennomført de siste årene.</p>
        </header>

        <div className="work-grid">
          {PAST_WORK.slice(0, visibleCount).map((item, i) => (
            <Card
              key={i}
              title={item.title}
              date={item.date}
              cover={item.cover}
              desc={item.desc}
              tags={item.tags || []}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </div>

        <div className="work-more-wrap">
          {visibleCount < PAST_WORK.length ? (
            <button className="work-more-btn" onClick={showMore}>Vis mer</button>
          ) : (
            PAST_WORK.length > 3 && (
              <button className="work-more-btn" onClick={showLess}>Vis mindre</button>
            )
          )}
        </div>
      </div>

      {openIndex !== null && (
        <Modal
          title={PAST_WORK[openIndex].title}
          date={PAST_WORK[openIndex].date}
          tags={PAST_WORK[openIndex].tags || []}
          images={PAST_WORK[openIndex].images || [PAST_WORK[openIndex].cover]}
          text={PAST_WORK[openIndex].longDesc || PAST_WORK[openIndex].desc}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
