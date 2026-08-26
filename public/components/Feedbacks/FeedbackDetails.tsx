interface Feedback {
  id: number;
  title: string;
  description: string;
  rating: string;
  images: string[];
  created_at: string;
}

interface FeedbackDetailsProps {
  feedback: Feedback;
  onBack: () => void;
}

const ratingLabels = {
  "1": "Very Bad",
  "2": "Bad",
  "3": "Neutral",
  "4": "Good",
  "5": "Excellent",
};

const ratingFaces = {
  "1": "../assets/images/feedback-very-bad.svg",
  "2": "../assets/images/feedback-bad.svg",
  "3": "../assets/images/feedback-neutral.svg",
  "4": "../assets/images/feedback-good.svg",
  "5": "../assets/images/feedback-excellent.svg",
};

export const FeedbackDetails = ({ feedback, onBack }: FeedbackDetailsProps) => {
  const rating = ratingLabels[feedback.rating as keyof typeof ratingLabels];

  const rateFace = ratingFaces[feedback.rating as keyof typeof ratingFaces];

  const date = new Date(feedback.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = new Date(feedback.created_at).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="w-full">
      {/* Back */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        ← Back to all feedbacks
      </button>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_235px]">
        {/* Main feedback */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <img
                  src={rateFace}
                  alt={`${rating} face`}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  {feedback.title}
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  {date} at {time}
                </p>
              </div>
            </div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-semibold text-green-700">
              {rating}
            </span>
          </div>

          {/* Feedback */}
          <div className="mt-10">
            <h2 className="text-sm font-bold text-slate-900">Feedback</h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {feedback.description}
            </p>
          </div>

          {/* Images */}
          {feedback.images.length > 0 && (
            <div className="mt-10">
              <h2 className="text-sm font-bold text-slate-900">Images</h2>

              <div className="mt-4 flex flex-wrap gap-4">
                {feedback.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Feedback image ${index + 1}`}
                    className="h-44 w-44 rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Details sidebar */}
        <div className="h-fit rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-bold text-slate-900">Details</h2>

          <div className="mt-8">
            <p className="text-sm font-semibold text-slate-900">Rating</p>

            <div className="mt-4 flex items-center gap-3">
              <img src={rateFace} alt={`${rating} face`} className="h-8 w-8" />

              <span className="text-sm text-slate-700">{rating}</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold text-slate-900">Submitted by</p>

            <p className="mt-3 text-sm text-slate-600">Anonymous</p>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold text-slate-900">Date</p>

            <p className="mt-3 text-sm text-slate-600">
              {date} at {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
