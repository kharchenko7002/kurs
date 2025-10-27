 import FordelerSection from "@/app/components/componentsForUndersider/bliFrivillig/FordelerSection/FordelerSection.js";
 import AktiviteterSection from "@/app/components/componentsForUndersider/bliFrivillig/AktiviteterSection/AktiviteterSection.js";
 import SlikFungererSection from "@/app/components/componentsForUndersider/bliFrivillig/SlikFungererSection/SlikFungererSection.js";
 import SitaterSection from "@/app/components/componentsForUndersider/bliFrivillig/SitaterSection/SitaterSection.js";
 import FAQSection from "@/app/components/componentsForUndersider/bliFrivillig/FAQSection/FAQSection.js";
 import CTASection from "@/app/components/componentsForUndersider/bliFrivillig/CTASection/CTASection.js";
 import SkjemaSection from "@/app/components/componentsForUndersider/bliFrivillig/SkjemaSection/SkjemaSection.js";

export default function BliFrivilligDesign() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <FordelerSection />
      <AktiviteterSection />
      <SlikFungererSection />
      <SitaterSection />
      <FAQSection />
      <CTASection />
      <SkjemaSection />
    </main>
  );
}
