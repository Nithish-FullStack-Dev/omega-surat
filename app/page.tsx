// src/app/page.tsx
import AppointmentSection from "@/components/layout/AppointmentSection";
import ComprehensiveCancerCareSection from "@/components/layout/ComprehensiveCancerCareSection";
import ExpertTreatment from "@/components/layout/ExpertTreatment";
import HealthcareStatsSection from "@/components/layout/HealthcareStatsSection";
import MedicalTeamSection from "@/components/layout/MedicalTeamSection";
import SuratLocationSection from "@/components/layout/SuratLocationSection";
import HeroCarousel from "@/components/pages/landing-page/HeroCarousel";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <SuratLocationSection />
      <HealthcareStatsSection />
      <ComprehensiveCancerCareSection />
      <ExpertTreatment />
      <MedicalTeamSection />
      <AppointmentSection />
    </main>
  );
}
