import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className="header">
          <h1 className="logo">min portfolio</h1>
        </header>
        <main className="content">
          {children}
        </main>
      </body>
    </html>
  );
}
