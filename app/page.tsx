import ExplanationSection from "@/components/explanation-section";
import HeroSection from "@/components/hero-section";
import ImpactSection from "@/components/impact-section";
import MitosSection from "@/components/mitos-section";
import PreventSection from "@/components/prevent-section";
import SymptomsSection from "@/components/symptoms-section";
import TabletSection from "@/components/tablet-section";
import WhySection from "@/components/why-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExplanationSection />
      <WhySection />
      <SymptomsSection />
      <ImpactSection />
      <PreventSection />
      <TabletSection />
      <MitosSection />
    </div>
  );
}
