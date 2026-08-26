import { StatCard } from "./StatCard";

export const AboutStats = () => {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <StatCard
        logo="../assets/images/feedback-text.svg"
        number="120+"
        text="Feedbacks"
      />

      <StatCard
        logo="../assets/images/feedback-contact.svg"
        number="80+"
        text="Happy Users"
      />

      <StatCard
        logo="../assets/images/feedback-true.svg"
        number="120+"
        text="Improvements"
      />
    </div>
  );
};
