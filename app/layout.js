import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Generelt({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className="header">
          <h1 className="portfolio_tekst">min portfolio</h1>
        </header>
        <main className="bla_bla_bla">
          {children}
        </main>
      </body>
    </html>
  );
}
