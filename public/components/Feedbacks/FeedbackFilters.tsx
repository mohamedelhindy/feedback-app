export const FeedbackFilters = () => {
  return (
    <div className="w-full pb-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Feedbacks
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          See what others are saying.
        </p>
      </div>

      {/* Filters */}
      <div className="flex w-full items-center gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <img
            src="/assets/images/feedback-search-icon.svg"
            alt="Search"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
          />

          <input
            type="text"
            placeholder="Search feedbacks..."
            className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Rating */}
        <div className="relative w-44">
          <select
            className="h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 pr-9 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            defaultValue=""
          >
            <option value="" disabled>
              All Ratings
            </option>

            <option value="5">Excellent</option>
            <option value="4">Good</option>
            <option value="3">Neutral</option>
            <option value="2">Bad</option>
            <option value="1">Very Bad</option>
          </select>

          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            ▼
          </span>
        </div>

        {/* Sort */}
        <div className="relative w-44">
          <select
            className="h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 pr-9 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            defaultValue="newest"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            ▼
          </span>
        </div>
      </div>
    </div>
  );
};
