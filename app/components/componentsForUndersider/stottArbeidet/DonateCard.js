import DonateSwitch from "./DonateSwitch";
import DonateAmounts from "./DonateAmounts.js";
import DonateCTA from "./DonateCTA";

export default function DonateCard() {
  return (
    <div className="donate-card" role="form" aria-labelledby="donate-title">
      <h1 id="donate-title" className="donate-title">Hjelp jenter og kvinner i krig og nød</h1>
      <p className="donate-lead">Som fast giver gir du håp, trygghet og en bedre fremtid for jenter og kvinner i hele verden.</p>
      <DonateSwitch />
      <DonateAmounts />
      <DonateCTA />
      <p className="donate-meta">Organisasjonsnummer: <strong>864 139 442</strong></p>
      <p className="donate-small">Ved å fortsette aksepterer du våre vilkår og personvern.</p>
    </div>
  );
}
