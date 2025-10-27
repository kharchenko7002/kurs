import Link from "next/link";

export default function FrivilligSection() {
  return (
    <section className="frivillig-section">
      <div className="frivillig-text">
        <h2>Bli frivillig – gjør en forskjell</h2>
        <p>
          Med noen timer i måneden kan du bidra til trygghet, inkludering og håp for mennesker i Norge.
          Vi tilbyr opplæring og et varmt fellesskap.
        </p>
        <Link href="/bliFrivillig" className="btn-frivillig">
          Les mer og meld interesse
        </Link>
      </div>

      <div className="frivillig-img">
        <img
          className="illustration"
          src="/bilderForUndersider/home/redde/banner.png"
          alt="Frivillige i Røde Kors"
        />
      </div>
    </section>
  );
}
