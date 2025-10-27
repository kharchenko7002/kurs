export default function FAQItem({ q, a }) {
  return (
    <details className="faq-item">
      <summary className="faq-summary">
        <span className="faq-bullet" aria-hidden>?</span>
        <span className="faq-question">{q}</span>
        <svg
          className="faq-chevron"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className="faq-answer">
        {a}
      </div>
    </details>
  );
}
