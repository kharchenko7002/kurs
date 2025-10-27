export default function DonateSwitch() {
  return (
    <div className="donate-switch">
      <input type="radio" name="freq" id="freq-month" defaultChecked className="sr-only" />
      <label htmlFor="freq-month" className="switch-pill">Hver måned</label>
      <input type="radio" name="freq" id="freq-once" className="sr-only" />
      <label htmlFor="freq-once" className="switch-pill">Enkeltbidrag</label>
    </div>
  );
}
