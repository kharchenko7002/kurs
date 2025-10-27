"use client";
import { useEffect } from "react";
import "./SlikFungererSection.css";
import { STEPS } from "./data";
import Step from "./Step";

export default function SlikFungererSection() {
  useEffect(() => {
    const items = document.querySelectorAll(".slik-step");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.2 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="slik-section">
      <div className="slik-container">
        <h2 className="slik-title">Slik fungerer det</h2>
        <ol className="slik-timeline">
          {STEPS.map((s, i) => (
            <Step key={i} {...s} />
          ))}
        </ol>
      </div>
    </section>
  );
}
