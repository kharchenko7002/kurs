import { useEffect, useRef } from "react";

export default function Modal({ title, details, onClose }) {
  const btnRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    btnRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} aria-hidden="true">
      <div
        role="dialog"
        aria-modal="true"
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button
            ref={btnRef}
            className="modal-close"
            onClick={onClose}
            aria-label="Lukk"
          >
            ×
          </button>
        </div>
        <p className="modal-text">{details}</p>
        <div className="modal-actions">
          <a href="#skjema" className="btn btn-primary">
            Søk nå
          </a>
          <button className="btn btn-ghost" onClick={onClose}>
            Lukk
          </button>
        </div>
      </div>
    </div>
  );
}
