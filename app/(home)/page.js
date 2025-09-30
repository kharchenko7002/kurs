"use client";

import Redde from "../components/redde/redde.js";
import Cards from "../components/cards/cards.js";
import Intro from "../components/intro/intro.js";
import "./globals.css";

export default function HomePage() {
  return (
    <main>

      <Redde />
      <Intro/>
      <Cards />

    </main>
  );
}
