"use client";

import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Левая колонка */}
        <div className="footer-column">
          <h3>Støtt vårt arbeid</h3>
          <p>
            Røde Kors hjelper mennesker i krise – lokalt og internasjonalt.
            Din støtte gjør vårt arbeid mulig. Støtt oss, og vær med å gjøre en forskjell.
          </p>
          <ul className="footer-links">
            <li><Link href="/om-oss">Om oss</Link></li>
            <li><Link href="/bli-frivillig">Bli frivillig</Link></li>
            <li><Link href="/vart-arbeid">Vårt arbeid</Link></li>
            <li><Link href="/stott-arbeidet">Støtt arbeidet</Link></li>
          </ul>

          {/* Поиск */}
          <div className="footer-search">
            <input type="text" placeholder="Søk" />
            <button>🔍</button>
          </div>
        </div>

        {/* Средняя колонка */}
        <div className="footer-column">
          <h3>Kontakt</h3>
          <p><strong>Telefonnummer</strong><br/>22 05 40 00</p>
          <p><strong>E-post</strong><br/>post@redcross.no</p>
          <p><strong>Besøksadresse</strong><br/>Prinsens gate 18, 0152 Oslo</p>
          <p><strong>Organisasjonsnummer</strong><br/>864 139 442</p>
        </div>

        {/* Правая колонка */}
        <div className="footer-column">
          <h3>Sosiale medier</h3>
          <ul className="social-links">
            <li><a href="#">📘 Facebook</a></li>
            <li><a href="#">📸 Instagram</a></li>
            <li><a href="#">🐦 Twitter</a></li>
            <li><a href="#">▶ YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Нижняя часть с логотипом */}
      <div className="footer-bottom">
        <Image
          src="/logo.png"
          alt="Røde Kors"
          width={40}
          height={40}
        />
        <span className="footer-logo-text">Røde Kors</span>
      </div>
    </footer>
  );
}
