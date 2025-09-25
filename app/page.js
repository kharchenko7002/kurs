import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">min portfolio</h1>

      {/* Фото */}
      <div className="photo">
        <Image
          src="/me.jpg"   // путь внутри public/
          alt="Моё фото"
          width={250}     // ширина
          height={250}    // высота
          className="profile-pic"
        />
      </div>

      {/* Карточки */}
      <div className="cards">
        <div className="card">Mine prosjekter</div>
        <div className="card">Min CV</div>
        <div className="card">Min utdanning</div>
        <div className="card">Min arbeidserfaring</div>
      </div>
    </main>
  );
}