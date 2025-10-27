import Kundeservice from "../Kundeservice/Kundeservice.js";
import KontaktInfo from "../Kontaktinfo/KontaktInfo.js";

export default function KontaktSection() {
  return (
    <section className="kontakt-container">
      <Kundeservice />
      <KontaktInfo />
    </section>
  );
}
