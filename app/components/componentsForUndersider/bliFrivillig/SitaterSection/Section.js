"use client";
import "./SitaterSection.css";
import { QUOTES } from "./data";
import SitatCard from "./Item";
import { useEffect } from "react";

export default function SitaterSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".sitat-card");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="sitater-section">
      <div className="sitater-container">
        <h2 className="sitater-title">Hva sier frivillige?</h2>
        <div className="sitater-grid">
          {QUOTES.map((q, i) => (
            <SitatCard key={i} quote={q.quote} name={q.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
