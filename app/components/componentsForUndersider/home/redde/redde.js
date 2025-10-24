"use client";

import Image from "next/image";
import Link from "next/link";
import "./redde.css";

export default function Redde() {
  return (
    <section className="redde">
      <div className="redde-left">
        <Image
          src="/bilderForUndersider/home/redde/redde.png"
          alt="Røde Kors redder liv"
          width={600}
          height={500}
          className="redde-img"
          priority
        />
      </div>

      <div className="redde-right">
        <Image src="/bilderForUndersider/home/redde/logostor.png" alt="Røde Kors logo" width={190} height={190} />
        <Link href="/bli-frivillig" className="redde-button">
          Bli med oss for å hjelpe mennesker
        </Link>


        <div className="redde-banner">
          <Image
            src="/bilderForUndersider/home/redde/banner.png"
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
