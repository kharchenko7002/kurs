"use client";

import Link from "next/link";
import Image from "next/image";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Логотип */}
      <Link href="/" className="logo">
        <Image
          src="/logo.png"   // положи свой логотип в public/logo.png
          alt="Logo"
          width={120}
          height={40}
          priority
        />
        <span className="logo-text">Røde Kors</span>
      </Link>

      {/* Навигация */}
      <nav className="nav">
        <Link href="/om-oss">Om oss</Link>
        <Link href="/bli-frivillig">Bli frivillig</Link>
        <Link href="/vart-arbeid">Vårt arbeid</Link>
      </nav>

      {/* Красная кнопка */}
      <Link href="/stott-arbeidet" className="button">
        Støtt arbeidet
      </Link>

      {/* Кнопка-меню (появится только на мобилке) */}
      <div className="menu-toggle md:hidden">☰</div>
    </header>
  );
}
