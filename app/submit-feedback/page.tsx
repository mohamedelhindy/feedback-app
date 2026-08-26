import { FeedbackForm } from "@/public/components/FeedbackSubmit/FeedbackForm";
import { FeedbackTips } from "@/public/components/FeedbackSubmit/FeedbackTipx";
import { Navbar } from "@/public/components/Navbar";

export default function SubmitFeedbackPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="feedback-page-enter mx-auto w-full max-w-6xl px-6 py-14">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Submit Feedback</h1>

          <p className="mt-2 text-base text-slate-500">
            We’d love to hear your thoughts.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
            <FeedbackForm />
          </div>

          <FeedbackTips />
        </div>
      </main>
    </div>
  );
}
