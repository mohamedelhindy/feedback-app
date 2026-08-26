import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full h-[68px] flex items-center justify-between px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200">
      <div className="flex justify-center items-center gap-2.5">
        <img
          className="w-8 h-8 object-contain"
          src="./assets/images/feedback-logo.svg"
          alt="Logo"
        />
        <h1 className="text-base sm:text-lg font-semibold text-slate-800">
          For later
        </h1>
      </div>

      <div className="hidden sm:flex items-center gap-6 md:gap-8">
        <Link
          className="text-sm md:text-[15px] font-medium text-blue-600"
          href="/"
        >
          Home
        </Link>

        <Link
          className="text-sm md:text-[15px] font-medium text-slate-700 hover:text-blue-600 transition-colors"
          href="/feedback"
        >
          Feedback
        </Link>

        <Link
          className="text-sm md:text-[15px] font-medium text-slate-700 hover:text-blue-600 transition-colors"
          href="/about"
        >
          About
        </Link>
      </div>

      <Link href="/feedbacks">
        <button className="px-3.5 sm:px-4 md:px-5 py-2.5 rounded-md bg-blue-600 cursor-pointer text-white text-xs sm:text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">
          Submit Feedback
        </button>
      </Link>
    </div>
  );
};
