import Link from "next/link";

export const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-20 px-5 sm:px-8 lg:px-12 py-12 sm:py-14 lg:py-16">
      <div className="w-full md:w-1/2">
        <p className="bg-blue-100 w-fit mb-6 sm:mb-7 py-2 px-3.5 text-[10px] sm:text-[11px] text-blue-600 rounded-full font-bold">
          We value your opinion
        </p>

        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-7 sm:mb-8">
          Your feedback makes us <span className="text-blue-600">better</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-600">
          Share your thoughts, ideas or suggestions.
        </p>

        <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-9">
          Together we can improve.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link
            className="w-fit px-5 sm:px-6 py-3 sm:py-3.5 rounded-md bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors"
            href="/feedback"
          >
            Submit Feedback
          </Link>

          <Link
            className="w-fit px-5 sm:px-6 py-3 sm:py-3.5 rounded-md border border-gray-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            href="/feedback"
          >
            View Feedback
          </Link>
        </div>
      </div>

      <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0">
        <img
          className="w-full h-full object-contain"
          src="../assets/images/feedback-hero-illustration-vector.svg"
          alt="hero illustration"
        />
      </div>
    </div>
  );
};
