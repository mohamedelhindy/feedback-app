"use client";

interface RatingSelectorProps {
  value: number | null;
  onChange: (rating: number) => void;
}

const ratings = [
  {
    value: 1,
    label: "Very Bad",
    image: "../assets/images/feedback-very-bad.svg",
  },
  {
    value: 2,
    label: "Bad",
    image: "../assets/images/feedback-bad.svg",
  },
  {
    value: 3,
    label: "Neutral",
    image: "../assets/images/feedback-neutral.svg",
  },
  {
    value: 4,
    label: "Good",
    image: "../assets/images/feedback-good.svg",
  },
  {
    value: 5,
    label: "Excellent",
    image: "../assets/images/feedback-excellent.svg",
  },
];

export const RatingSelector = ({ value, onChange }: RatingSelectorProps) => {
  return (
    <div>
      <h2 className="text-sm font-semibold text-slate-900">
        How was your experience?
      </h2>

      <div className="mt-7 flex items-start justify-between">
        {ratings.map((rating) => {
          const isSelected = value === rating.value;

          return (
            <button
              key={rating.value}
              type="button"
              onClick={() => onChange(rating.value)}
              className="group flex flex-col items-center gap-3"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-200 ${
                  isSelected
                    ? "scale-110 bg-blue-50 ring-2 ring-blue-500"
                    : "bg-transparent group-hover:scale-105"
                }`}
              >
                <img
                  src={rating.image}
                  alt={rating.label}
                  className="h-12 w-12 object-contain"
                />
              </div>

              <span
                className={`text-sm transition-colors duration-200 ${
                  isSelected
                    ? "font-semibold text-blue-600"
                    : "text-slate-600 group-hover:text-blue-600"
                }`}
              >
                {rating.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
