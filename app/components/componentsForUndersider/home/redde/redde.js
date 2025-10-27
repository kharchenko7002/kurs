"use client";

import Image from "next/image";
import Link from "next/link";
import "./redde.css";

export default function Redde() {
  return (
    <section className="redde" aria-labelledby="redde-title">
      
      <span className="redde-bg" aria-hidden />

      
      <div className="redde-left">
        <div className="redde-photo">
          <Image
            src="/bilderForUndersider/home/redde/redde.png"
            alt="Røde Kors redder liv i felt"
            width={1200}
            height={900}
            className="redde-img"
            priority
          />
          <span className="redde-chip">Frivillighet redder liv</span>
        </div>
      </div>

      
      <div className="redde-right">
        <h1 id="redde-title" className="sr-only">
          Bli med og hjelp mennesker sammen med Røde Kors
        </h1>

        
        <div className="redde-logo-wrap" aria-hidden="true">
          <Image
            src="/bilderForUndersider/home/redde/logostor.png"
            alt="Røde Kors"
            width={190}
            height={190}
            className="redde-logo"
          />
        </div>

       
        <Link href="/bliFrivillig" className="redde-ribbon" prefetch>
          <span className="ribbon-shine" />
          Bli med oss for å hjelpe mennesker
        </Link>

        
        <div className="redde-banner">
          <Image
            src="/bilderForUndersider/home/redde/banner.png"
            alt="Frivillige i arbeid"
            width={1000}
            height={320}
            className="redde-banner-img"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
