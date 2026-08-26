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

  useEffect(() => {
    const getFeedbacks = async () => {
      const response = await fetch("/api/feedbacks");
      const data = await response.json();

      setFeedbacks(data);
    };

    getFeedbacks();
  }, []);

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
