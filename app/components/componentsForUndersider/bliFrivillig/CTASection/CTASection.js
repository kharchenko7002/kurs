import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-container">
        <div className="cta-texts">
          <h2 id="cta-heading" className="cta-title">Klar for å bli frivillig?</h2>
          <p className="cta-sub">
            Fyll ut skjemaet under – så tar vi kontakt for en uforpliktende prat.
          </p>
        </div>

        <a href="#skjema" className="cta-button" aria-label="Gå til søknadsskjema">
          Gå til skjema
          <svg
            className="cta-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
