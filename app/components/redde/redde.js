"use client";

import Image from "next/image";
import Link from "next/link";
import "./Redde.css";

export default function Redde() {
  return (
    <section className="redde">
      <div className="redde-left">
        <Image
          src="/redde.png"
          alt="Røde Kors redder liv"
          width={600}
          height={500}
          className="redde-img"
          priority
        />
      </div>

      <div className="redde-right">
        <Image src="/logostor.png" alt="Røde Kors logo" width={190} height={190} />
        <h1>Røde Kors</h1>
        <Link href="/bli-frivillig" className="redde-button">
          Bli med oss for å hjelpe mennesker
        </Link>

        {/* Баннер в белом контейнере */}
        <div className="redde-banner">
          <Image
            src="/banner.png"
            alt="Frivillige"
            width={800}
            height={200}
            className="redde-banner-img"
          />
        </div>
      </div>
    </section>
  );
}
