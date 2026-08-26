export interface FeedbackItemProps {
  rateFace: string;
  title: string;
  description: string;
  images: string[];
  rating: string;
  date: string;
  onClick: () => void;
}

export const FeedbackItem = ({
  rateFace,
  title,
  description,
  images,
  rating,
  date,
  onClick,
}: FeedbackItemProps) => {
  return (
    <div
      onClick={onClick}
      className="flex w-full items-start gap-5 border-b border-slate-200 p-6 last:border-b-0"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <img
          src={rateFace}
          alt={`${rating} face`}
          className="h-10 w-10 object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="text-base font-bold text-slate-900">{title}</h2>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        {images.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Feedback image ${index + 1}`}
                className="h-20 w-20 rounded-lg border border-slate-200 object-cover"
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex w-24 shrink-0 flex-col items-end gap-3">
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          {rating}
        </span>

        <span className="text-xs text-slate-400">{date}</span>
      </div>
    </div>
  );
};
