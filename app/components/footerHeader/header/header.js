"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`rk-header ${scrolled ? "rk-header--scrolled" : ""}`}>
        <Link href="/" className="rk-logo" aria-label="Forside">
          <span className="rk-logo-wrap">
            <Image
              src="/footerHeader/logo.png"
              alt="Røde Kors"
              width={120}
              height={40}
              priority
            />
          </span>
          <span className="rk-logo-text">Røde Kors</span>
        </Link>

        <nav className="rk-nav" aria-label="Hovednavigasjon">
          <NavLink href="/omOss" active={pathname === "/omOss"}>Om oss</NavLink>
          <NavLink href="/bliFrivillig" active={pathname === "/bliFrivillig"}>Bli frivillig</NavLink>
          <NavLink href="/vartArbeid" active={pathname === "/vartArbeid"}>Vårt arbeid</NavLink>
        </nav>

        <Link href="/stottArbeidet" className="rk-cta">Støtt arbeidet</Link>

        <button
          className="rk-burger"
          aria-label="Åpne meny"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`rk-drawer ${open ? "rk-drawer--open" : ""}`} aria-hidden={!open}>
        <div className="rk-drawer-inner">
          <Link className={`rk-drawer-link ${pathname === "/kontaktOss" ? "is-active" : ""}`} href="/kontaktOss">Kontakt Oss</Link>
          <Link className={`rk-drawer-link ${pathname === "/bliFrivillig" ? "is-active" : ""}`} href="/bliFrivillig">Bli frivillig</Link>
          <Link className={`rk-drawer-link ${pathname === "/vartArbeid" ? "is-active" : ""}`} href="/vartArbeid">Vårt arbeid</Link>
          <Link className="rk-drawer-cta" href="/stottArbeidet">Støtt arbeidet</Link>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, active, children }) {
  return (
    <Link href={href} className={`rk-nav-link ${active ? "is-active" : ""}`}>
      <span className="rk-nav-text">{children}</span>
      <span className="rk-underline" />
    </Link>
  );
}
