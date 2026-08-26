import { AboutCTA } from "@/public/components/About/AboutCTA";
import { AboutHero } from "@/public/components/About/AboutHero";
import { AboutStats } from "@/public/components/About/AboutStats";
import { Navbar } from "@/public/components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex flex-col items-center">
        <AboutHero />
        <AboutStats />
        <AboutCTA />
      </main>
    </div>
  );
}
