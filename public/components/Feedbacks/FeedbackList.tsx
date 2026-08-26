"use client";

import { useEffect, useState } from "react";
import { FeedbackItem } from "./FeedbackItem";

interface Feedback {
  id: number;
  title: string;
  description: string;
  rating: string;
  images: string[];
  created_at: string;
}

interface FeedbackListProps {
  onSelectFeedback: (feedback: Feedback) => void;
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

export const FeedbackList = ({ onSelectFeedback }: FeedbackListProps) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        setIsLoading(true);

        const response = await fetch("/api/feedbacks");

        if (!response.ok) {
          throw new Error("Failed to fetch feedbacks.");
        }

        const data = await response.json();

        setFeedbacks(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load feedback.");
      } finally {
        setIsLoading(false);
      }
    };

    getFeedbacks();
  }, []);

  if (isLoading) {
    return (
      <div className="flex w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white py-16">
        <div className="h-1 w-32 overflow-hidden rounded-full bg-slate-200">
          <div className="loading-bar h-full w-1/2 rounded-full bg-blue-600" />
        </div>

        <p className="mt-3 text-sm text-slate-500">Loading feedback...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white py-16">
        <p className="text-sm font-medium text-red-500">{error}</p>
      </div>
    );
  }

  if (feedbacks.length === 0) {
    return (
      <div className="flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white py-16">
        <p className="text-sm text-slate-500">No feedback yet.</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
      {feedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          rateFace={ratingFaces[feedback.rating as keyof typeof ratingFaces]}
          title={feedback.title}
          description={feedback.description}
          images={feedback.images}
          rating={ratingLabels[feedback.rating as keyof typeof ratingLabels]}
          date={formatDate(feedback.created_at)}
          onClick={() => onSelectFeedback(feedback)}
        />
      ))}
    </div>
  );
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
