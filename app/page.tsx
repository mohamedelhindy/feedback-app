import { FeatureCards } from "@/public/components/Home/FeatureCards";
import { Navbar } from "@/public/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />

      <FeatureCards />
    </main>
  );
}
