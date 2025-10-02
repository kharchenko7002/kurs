import { Poppins } from "next/font/google";
import "./(home)/globals.css";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap", 
});

export const metadata = {
  title: "Røde Kors",
  description: "Frivillig arbeid - Røde Kors",
};

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
