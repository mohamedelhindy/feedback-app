interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="w-fit flex flex-col gap-4 rounded-lg border cursor-pointer border-gray-200 px-10 py-8 shadow-md transition-transform hover:scale-105">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100">
        <img className="h-7 w-7" src={icon} alt={`${icon} icon`} />
      </div>

      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
