export const AboutHero = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-5 sm:px-8 lg:px-10 py-12 sm:py-14">
      <div className="w-full md:w-1/2">
        <h1 className="mb-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          About Us
        </h1>

        <p className="mb-2 text-base sm:text-lg leading-relaxed text-slate-600">
          We are committed to building better for our product just for you.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-slate-600">
          Your feedback helps us understand what we're doing right and where we
          can improve.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          className="w-68 sm:w-76 md:w-84 lg:w-100 h-auto object-contain"
          src="../assets/images/feedback-about-logo.svg"
          alt="about logo"
        />
      </div>
    </div>
  );
};
