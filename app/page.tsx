import { FeatureCards } from "@/public/components/Home/FeatureCards";
import { Hero } from "@/public/components/Home/Hero";
import { Navbar } from "@/public/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <>
        <Navbar />
      </>
      <main className="flex flex-col items-center justify-between feedback-page-enter">
        <Hero />
        <FeatureCards />
      </main>
    </div>
  );
}
