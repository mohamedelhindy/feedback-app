import { FeedbackFilters } from "@/public/components/Feedbacks/FeedbackFilters";
import { FeedbackList } from "@/public/components/Feedbacks/FeedbackList";
import { Navbar } from "@/public/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <>
        <Navbar />
      </>
      <main className="flex flex-col items-center justify-between px-20 py-12">
        <FeedbackFilters />

        <FeedbackList />
      </main>
    </div>
  );
}
