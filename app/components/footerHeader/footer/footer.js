"use client";

import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="rk-footer">
      <div className="rk-footer-top">
        <div className="rk-col rk-col--about">
          <h3 className="rk-title">Støtt vårt arbeid</h3>
          <p className="rk-text">
            Røde Kors hjelper mennesker i krise – lokalt og internasjonalt.
            Din støtte gjør vårt arbeid mulig. Støtt oss, og vær med å gjøre en forskjell.
          </p>
          <ul className="rk-links">
            <li><Link className="rk-link" href="/omOss">Kontakt Oss</Link></li>
            <li><Link className="rk-link" href="/bliFrivillig">Bli frivillig</Link></li>
            <li><Link className="rk-link" href="/vartArbeid">Vårt arbeid</Link></li>
            <li><Link className="rk-link rk-link--cta" href="/stottArbeidet">Støtt arbeidet</Link></li>
          </ul>

          <div className="rk-search">
            <input type="text" placeholder="Søk" aria-label="Søk" />
            <button aria-label="Søk">🔍</button>
          </div>
        </div>

        <div className="rk-col">
          <h3 className="rk-title">Kontakt</h3>
          <p className="rk-text"><strong>Telefonnummer</strong><br/>22 05 40 00</p>
          <p className="rk-text"><strong>E-post</strong><br/>post@redcross.no</p>
          <p className="rk-text"><strong>Besøksadresse</strong><br/>Prinsens gate 18, 0152 Oslo</p>
          <p className="rk-text"><strong>Organisasjonsnummer</strong><br/>864 139 442</p>
        </div>

        <div className="rk-col">
          <h3 className="rk-title">Sosiale medier</h3>
          <ul className="rk-social">
            <li><a className="rk-social-link" href="https://www.facebook.com/HedmarkRodeKors/"><span>📘</span> Facebook</a></li>
            <li><a className="rk-social-link" href="https://www.instagram.com/rodekorsnorge/"><span>📸</span> Instagram</a></li>
            <li><a className="rk-social-link" href="https://x.com/rodekorsnorge"><span>🐦</span> Twitter</a></li>
            <li><a className="rk-social-link" href="https://www.youtube.com/@rodekorsnorge/featured"><span>▶</span> YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="rk-footer-bottom">
        <div className="rk-brand">
          <span className="rk-brand-text">Røde Kors</span>
        </div>
        <p className="rk-copy">© {new Date().getFullYear()} Røde Kors. Alle rettigheter forbeholdt.</p>
      </div>
    </footer>
  );
}
