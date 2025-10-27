"use client";
import "./FordelerSection.css";
import { useEffect } from "react";
import { FORDELER } from "./data";
import FordelCard from "./Item";

export default function FordelerSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".fordel-card");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.2 }
    );
    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="fordeler" className="fordeler-section">
      <div className="fordeler-container">
        <h2 className="fordeler-title">Hvorfor bli frivillig?</h2>
        <p className="fordeler-subtitle">
          Her er noen pluss ved å engasjere seg i Røde Kors.
        </p>

        <div className="fordeler-grid">
          {FORDELER.map((item, index) => (
            <FordelCard key={index} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
