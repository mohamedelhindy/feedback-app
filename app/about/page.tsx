import { AboutHero } from "@/public/components/About/AboutHero";
import { Navbar } from "@/public/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <>
        <Navbar />
      </>
      <main className="flex flex-col items-center justify-between">
        <AboutHero />
      </main>
    </div>
  );
}
