export default function DonateAmounts() {
  return (
    <fieldset className="donate-amounts">
      <legend className="sr-only">Velg beløp</legend>
      <input type="radio" name="amount" id="a150" className="sr-only" defaultChecked />
      <label htmlFor="a150" className="amount-pill">150 kr</label>
      <input type="radio" name="amount" id="a200" className="sr-only" />
      <label htmlFor="a200" className="amount-pill">200 kr</label>
      <input type="radio" name="amount" id="a350" className="sr-only" />
      <label htmlFor="a350" className="amount-pill">350 kr</label>
      <div className="amount-custom">
        <label htmlFor="custom" className="sr-only">Eget beløp</label>
        <input id="custom" type="number" min="50" step="10" placeholder="Velg eget beløp" inputMode="numeric" />
        <span className="amount-suffix">kr</span>
      </div>
    </fieldset>
  );
}
