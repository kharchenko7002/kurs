import PastWorkSection from "@/app/components/componentsForUndersider/vartArbeid/PastWorkSection/Section.js";
import UpcomingEventsSection from "@/app/components/componentsForUndersider/vartArbeid/UpcomingEventsSection/Section.js";

export const metadata = {
  title: "Vårt arbeid – Røde Kors",
  description: "Se hva vi gjør, og finn aktiviteter du kan bli med på.",
};

export default function VartArbeidPage() {
  return (
    <main>
      <PastWorkSection />
      <UpcomingEventsSection />
    </main>
  );
}
