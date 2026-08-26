import Link from "next/link";

export const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between gap-10 px-25 py-17 md:flex-row">
      <div>
        <p className="bg-blue-200 w-fit mb-10 py-2 px-4 text-[11px] text-blue-600 rounded-full font-bold">
          We value your opinion
        </p>

        <h1 className="font-bold text-5xl mb-12">
          Your feedback makes us{" "}
          <li className="list-none text-blue-600">better</li>
        </h1>

        <p className="text-[22px]">
          Share your thoughts, ideas or suggestions.
        </p>
        <p className="text-[22px] mb-12">Together we can improve</p>

        <div className="flex gap-13">
          <Link
            className="w-fit h-fit px-6 py-4 rounded-md bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors"
            href="/feedback"
          >
            Submit Feedback
          </Link>

          <Link
            className="w-fit h-fit px-6 py-3.5 rounded-md border-gray-200 border"
            href="/feedback"
          >
            View Feedback
          </Link>
        </div>
      </div>

      <div className="h-105 w-105">
        <img
          src="../assets/images/feedback-hero-illustration-vector.svg"
          alt="hero illustration"
        />
      </div>
    </div>
  );
};
