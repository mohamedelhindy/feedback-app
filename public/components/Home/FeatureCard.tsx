interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="w-full sm:w-[280px] lg:w-[320px] flex flex-col gap-4 rounded-xl border cursor-pointer border-slate-200 bg-white px-6 sm:px-7 py-6 sm:py-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100">
        <img
          className="h-6 w-6 object-contain"
          src={icon}
          alt={`${icon} icon`}
        />
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h3>

      <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
