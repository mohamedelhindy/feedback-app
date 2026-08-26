export const AboutHero = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-5 sm:px-8 lg:px-10 pt-17 sm:pt-20 pb-8 sm:pb-10">
      <div className="w-full md:w-1/2">
        <h1 className="mb-5 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          About Us
        </h1>

        <p className="mb-2 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
          We are committed to building better for our product just for you.
        </p>

        <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
          Your feedback helps us understand what we're doing right and where we
          can improve.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          className="w-60 sm:w-68 md:w-76 lg:w-80 h-auto object-contain"
          src="../assets/images/feedback-about-logo.svg"
          alt="about logo"
        />
      </div>
    </div>
  );
};
