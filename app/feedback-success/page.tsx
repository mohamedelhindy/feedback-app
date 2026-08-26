import Link from "next/link";
import { Navbar } from "@/public/components/Navbar";

export default function FeedbackSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="feedback-page-enter flex min-h-[calc(100vh-81px)] items-start justify-center px-6 pt-20">
        <div className="flex w-full max-w-xl flex-col items-center text-center">
          {/* Success icon */}
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-green-500 shadow-sm">
            <svg
              width="72"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12.5L9.5 17L19 7"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Message */}
          <h1 className="mt-16 text-4xl font-bold text-slate-900">
            Thank you!
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Your feedback has been submitted successfully.
            <br />
            We appreciate you taking the time to help us improve.
          </p>

          {/* Actions */}
          <div className="mt-14 flex items-center gap-8">
            <Link
              href="/feedback"
              className="rounded-lg bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
            >
              View Feedbacks
            </Link>

            <Link
              href="/"
              className="rounded-lg border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
