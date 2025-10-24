import { Poppins } from "next/font/google";
import "./(undersider)/(home)/globals.css";
import Header from "./components/footerHeader/header/header.js";
import Footer from "./components/footerHeader/footer/footer.js";


export const metadata = {
  title: "Røde Kors",
  description: "Frivillig arbeid - Røde Kors",
};


const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
