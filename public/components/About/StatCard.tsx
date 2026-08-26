interface StatCardProps {
  logo: string;
  number: string;
  text: string;
}

export const StatCard = ({ logo, number, text }: StatCardProps) => {
  return (
    <div className="flex flex-1 items-center gap-4 px-6 py-6 sm:px-8">
      <img
        className="h-10 w-10 shrink-0 object-contain"
        src={logo}
        alt={`${logo} logo`}
      />

      <div>
        <h3 className="text-2xl sm:text-3xl font-bold leading-none text-slate-900">
          {number}
        </h3>

        <p className="mt-2 text-sm sm:text-base font-medium text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
};
