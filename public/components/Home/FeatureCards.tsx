import { FeatureCard } from "./FeatureCard";

export const FeatureCards = () => {
  return (
    <div className="w-full flex gap-20 mb-17 px-25 align-center justify-center flex-wrap">
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
