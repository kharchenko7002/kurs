import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header.js"; 
import Footer from "../components/footer/footer.js";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Frivillig",
  description: "Røde Kors - frivillig arbeid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className={poppins.className}>
        <Header />
        <main className="bla_bla_bla pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
