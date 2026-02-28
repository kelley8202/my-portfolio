import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoSkills from "@/components/BentoSkills";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030014] selection:bg-neon-purple/30">
      <Navbar />
      <HeroSection />
      <BentoSkills />
      <ProjectsShowcase />
      <ExperienceTimeline />
      <ContactFooter />
    </main>
  );
}
