import ExplanationSection from "@/components/explanation-section";
import HeroSection from "@/components/hero-section";
import WhySection from "@/components/why-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExplanationSection />
      <WhySection />
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
    </div>
  );
}
