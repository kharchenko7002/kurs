"use client";

import Image from "next/image";
import "./cards.css";

export default function Cards() {
  return (
    <section className="cards">
      <div className="card">
        <Image
          src="/bilderForUndersider/home/cards/myefolk.jpg"
          alt="Frivillighet"
          width={300}
          height={200}
        />
        <h3>Frivillighet</h3>
        <p>Frivillige hjelper oss å nå ut til mennesker i nød.</p>
      </div>

      <div className="card">
        <Image
          src="/bilderForUndersider/home/cards/barn.png"
          alt="Gaver"
          width={300}
          height={200}
        />
        <h3>Også gi gaver</h3>
        <p>Dine bidrag gir mat, medisiner og trygghet til mennesker i krise.</p>
      </div>

      <div className="card">
        <Image
          src="/bilderForUndersider/home/cards/førstehjelp.jpg"
          alt="Beredskap"
          width={300}
          height={200}
        />
        <h3>Beredskap</h3>
        <p>Vi er klare til å rykke ut når katastrofen rammer.</p>
      </div>
    </section>
  );
}
