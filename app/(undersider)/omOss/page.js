//import "@/app/globals.css"; 
import './style.css'; 


import HeroSection from "../../components/componentsForUndersider/omOss/HeroSection/HeroSection.js";
import KontaktSection from "../../components/componentsForUndersider/omOss/KontaktSection/KontaktSection.js";
import FrivilligSection from "../../components/componentsForUndersider/omOss/FrivilligSection/FrivilligSection.js";

export const metadata = {
  title: "Kontakt oss | Røde Kors Førstehjelp",
  description: "Kundeservice, e-post, chat, telefon og sosiale medier.",
};

export default function Page() {
  return (
    <main className="kontakt-page">
      <HeroSection />
      <KontaktSection />
      <FrivilligSection />
    </main>
  );
}
