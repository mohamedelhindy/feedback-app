export const FeedbackTips = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">Tips</h2>

      <div className="mt-8 space-y-7">
        <div className="flex items-start gap-4">
          <span className="mt-0.5 text-lg text-slate-700">♡</span>

          <p className="text-sm leading-6 text-slate-600">
            Be honest and specific
          </p>
        </div>

        <div className="flex items-start gap-4">
          <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-500 text-xs font-bold text-slate-600">
            i
          </span>

          <p className="text-sm leading-6 text-slate-600">
            Include as much detail as you can
          </p>
        </div>

        <div className="flex items-start gap-4">
          <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-500 text-xs font-bold text-slate-600">
            i
          </span>

          <p className="text-sm leading-6 text-slate-600">
            Images help us understand better
          </p>
        </div>
      </div>
    </div>
  );
};
