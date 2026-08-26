import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full h-[72px] flex items-center justify-between px-10 bg-white border-b border-slate-200">
      <div className="flex justify-center items-center gap-4">
        <img
          className="w-10 h-10 object-contain"
          src="./assets/images/feedback-logo.svg"
          alt="Logo"
        />
        <h1 className="text-lg font-semibold text-slate-800">For later</h1>
      </div>

      <div className="flex items-center gap-8">
        <Link className="text-[17px] font-medium text-blue-600" href="/">
          Home
        </Link>
        <Link
          className="text-[17px] font-medium text-slate-700 hover:text-blue-600 transition-colors"
          href="/Feedback"
        >
          Feedback
        </Link>
        <Link
          className="text-[17px] font-medium text-slate-700 hover:text-blue-600 transition-colors"
          href="/about"
        >
          About
        </Link>
      </div>

      <Link href="/feedbacks">
        <button className="px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">
          Submit Feedback
        </button>
      </Link>
    </div>
  );
};
