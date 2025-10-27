import "@/app/components/componentsForUndersider/stottArbeidet/style.css";
import DonateHero from "@/app/components/componentsForUndersider/stottArbeidet/DonateHero";

export default function DonationPage() {
  return (
    <main className="donate">
      <DonateHero
        image="/bilderForUndersider/home/redde/redde.png"
        title="Hjelp jenter og kvinner i krig og nød"
        subtitle="Som fast giver gir du håp, trygghet og en bedre fremtid for jenter og kvinner i hele verden."
      />
    </main>
  );
}
