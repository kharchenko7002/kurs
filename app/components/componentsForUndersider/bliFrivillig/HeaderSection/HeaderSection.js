import "./HeaderSection.css";

export default function HeaderSection() {
  return (
    <header className="header">
      <div className="header-inner">
        <p className="header-brand">Røde Kors</p>
        <h1 className="header-title">Bli frivillig – gjør en forskjell</h1>
        <p className="header-lead">
          Bruk litt av tiden din på noe meningsfullt. Frivillighet skjer på dine premisser – stort
          eller lite, alt teller.
        </p>
        <div className="header-actions">
          <a href="#fordeler" className="btn btn-primary">
            Se fordelene
          </a>
          <a href="#skjema" className="btn btn-secondary">
            Søk nå
          </a>
        </div>
      </div>
    </header>
  );
}
