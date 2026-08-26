import { FeatureCard } from "./FeatureCard";

export const FeatureCards = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-5 sm:px-8 lg:px-10 items-stretch justify-center flex-wrap">
      <FeatureCard
        icon="../assets/images/feedback-pencil.svg"
        title="Easy to use"
        description="Submit feedback in just a few steps."
      />

      <FeatureCard
        icon="../assets/images/feedback-image.svg"
        title="Upload images"
        description="Add images to help explain better."
      />

      <FeatureCard
        icon="../assets/images/feedback-star.svg"
        title="Make an impact"
        description="Your feedback helps us improve."
      />
    </div>
  );
};
