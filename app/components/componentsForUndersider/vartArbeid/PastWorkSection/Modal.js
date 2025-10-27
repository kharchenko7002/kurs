"use client";
import { useEffect, useRef, useState } from "react";

export default function Modal({ title, date, tags, images, text, onClose }) {
  const [idx, setIdx] = useState(0);
  const startX = useRef(null);

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx > 60) prev();
    if (dx < -60) next();
    startX.current = null;
  };

  return (
    <div className="work-modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="work-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="work-close" onClick={onClose} aria-label="Lukk">×</button>

        <div
          className="work-slider"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img
            key={idx}
            src={images[idx]}
            alt={`${title} – bilde ${idx + 1}`}
            className="work-slide-img"
          />
          {images.length > 1 && (
            <>
              <button className="work-arrow left" onClick={prev} aria-label="Forrige">❮</button>
              <button className="work-arrow right" onClick={next} aria-label="Neste">❯</button>
              <div className="work-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`work-dot ${i === idx ? "is-active" : ""}`}
                    onClick={() => setIdx(i)}
                    aria-label={`Gå til bilde ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="work-modal-body">
          <h3 className="work-modal-title">{title}</h3>
          <p className="work-modal-meta">
            {date}{tags?.length ? ` • ${tags.join(" / ")}` : ""}
          </p>
          <p className="work-modal-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
