import Kundeservice from "../Kundeservice/Kundeservice";
import KontaktInfo from "../Kontaktinfo/KontaktInfo";

export default function KontaktSection() {
  return (
    <section className="kontakt-container">
      <Kundeservice />
      <KontaktInfo />
    </section>
  );
}
