import { Poppins } from "next/font/google";
import "./globals.css";
import Header from '../components/header.js'

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Generelt({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header className='header'/>
        <main className="bla_bla_bla">
          {children}
        </main>
      </body>
    </html>
  );
}
