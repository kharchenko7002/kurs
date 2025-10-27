"use client";
import "./FAQSection.css";
import { FAQS } from "./data";
import FAQItem from "./Item";

export default function FAQSection() {
  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">Ofte stilte spørsmål</h2>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
