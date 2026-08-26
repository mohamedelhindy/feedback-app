import Link from "next/link";

export const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between gap-10 px-25 py-17 md:flex-row">
      <div>
        <p className="bg-blue-200 w-fit mb-10 p-2 text-[11px] text-blue-600 rounded-full font-bold">
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

        <div className="flex gap-25">
          <Link href="/feedback">Submit Feedback</Link>
          <Link href="/feedback">View Feedback</Link>
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
