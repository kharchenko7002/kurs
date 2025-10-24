"use client";

import Link from "next/link";
import Image from "next/image";
import "./header.css";

export default function Header() {
  return (
    <header className="header">

      <Link href="/" className="logo">
        <Image
          src="/footerHeader/logo.png"   
          alt="Logo"
          width={120}
          height={40}
          priority
        />
        <span className="logo-text">Røde Kors</span>
      </Link>

  
      <nav className="nav">
        <Link href="/omOss">Om oss</Link>
        <Link href="/bliFrivillig">Bli frivillig</Link>
        <Link href="/vartArbeid">Vårt arbeid</Link>
      </nav>


      <Link href="/stottArbeidet" className="button">
        Støtt arbeidet
      </Link>

 
      <div className="menu-toggle md:hidden">☰</div>
    </header>
  );
}
