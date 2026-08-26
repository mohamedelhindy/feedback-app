import { FeatureCard } from "./FeatureCard";

export const FeatureCards = () => {
  return (
    <div className="w-full flex justify-evenly mb-17 px-20">
      <FeatureCard
        icon="../assets/images/pen-icon.png"
        title="Easy to use"
        description="Submit feedback in just a few steps."
      />

      <FeatureCard
        icon="../assets/images/pen-icon.png"
        title="Upload images"
        description="Add images to help explain better."
      />

      <FeatureCard
        icon="../assets/images/pen-icon.png"
        title="Make an impact"
        description="Your feedback helps us improve."
      />
    </div>
  );
};
