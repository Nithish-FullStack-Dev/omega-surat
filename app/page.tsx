// src/app/page.tsx
import ComprehensiveCancerCareSection from "@/components/layout/ComprehensiveCancerCareSection";
import HealthcareStatsSection from "@/components/layout/HealthcareStatsSection";
import SuratLocationSection from "@/components/layout/SuratLocationSection";
import HeroCarousel from "@/components/pages/landing-page/HeroCarousel";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <SuratLocationSection />
      <HealthcareStatsSection />
      <ComprehensiveCancerCareSection />
    </main>
  );
}
