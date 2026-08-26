"use client";

import { useState } from "react";
import { FeedbackFilters } from "./FeedbackFilters";
import { FeedbackList } from "./FeedbackList";
import { FeedbackDetails } from "./FeedbackDetails";

interface Feedback {
  id: number;
  title: string;
  description: string;
  rating: string;
  images: string[];
  created_at: string;
}

export const FeedbackContent = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(
    null,
  );

  return (
    <div className="w-full">
      {selectedFeedback ? (
        <div key="details" className="feedback-page-enter">
          <FeedbackDetails
            feedback={selectedFeedback}
            onBack={() => setSelectedFeedback(null)}
          />
        </div>
      ) : (
        <div key="list" className="feedback-page-enter">
          <FeedbackFilters />

          <FeedbackList onSelectFeedback={setSelectedFeedback} />
        </div>
      )}
    </div>
  );
};
