"use client";
import { useState } from "react";
import "./AktiviteterSection.css";
import { AKTIVITETER } from "./data";
import Card from "./Card";
import Modal from "./Modal";

export default function AktiviteterSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="aktiviteter-section">
      <div className="aktiviteter-container">
        <h2 className="aktiviteter-title">Hva kan du engasjere deg i?</h2>
        <div className="aktiviteter-grid">
          {AKTIVITETER.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              text={item.text}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Modal
          title={AKTIVITETER[openIndex].title}
          details={AKTIVITETER[openIndex].details}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
