import DonateCard from "./DonateCard";

export default function DonateHero() {
  return (
    <section
      className="donate-hero"
      style={{ backgroundImage: "url(/bilderForUndersider/home/redde/redde.png)" }}
    >
      <div className="donate-veil" />
      <DonateCard />
    </section>
  );
}
