import { FeedbackContent } from "@/public/components/Feedbacks/FeedbackContent";
import { Navbar } from "@/public/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <>
        <Navbar />
      </>
      <main className="flex flex-col items-center justify-between px-10 md:px-22 py-12">
        <FeedbackContent />
      </main>
    </div>
  );
}
