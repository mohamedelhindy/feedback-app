import Link from "next/link";

export const AboutCTA = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-5 pb-8 sm:pt-15 sm:pb-18">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-xl border border-slate-200 bg-blue-50/60 px-6 sm:px-8 lg:px-10 py-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Have Suggestions?
          </h2>

          <p className="mt-1.5 text-sm sm:text-base text-slate-600">
            Don't hesitate to share your thoughts with us.
          </p>
        </div>

        <Link
          className="shrink-0 rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
          href="/feedback"
        >
          Submit Feedback
        </Link>
      </div>
    </div>
  );
};
