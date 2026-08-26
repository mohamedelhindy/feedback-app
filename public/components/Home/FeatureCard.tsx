interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="w-[25%] flex flex-col gap-4 rounded-lg border cursor-pointer border-gray-200 px-7 py-10 shadow-md transition-transform hover:scale-105">
      <div>
        <img src={icon} alt={`${icon} icon`} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
