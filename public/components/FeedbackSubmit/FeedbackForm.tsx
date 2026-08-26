"use client";

import { FormEvent, useState } from "react";
import { FeedbackTextArea } from "./FeedbackTextArea";
import { ImageUploader } from "./ImageUploader";
import { RatingSelector } from "./RatingSelector";
import { useRouter } from "next/navigation";

export const FeedbackForm = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!rating) {
      setError("Please select a rating.");
      return;
    }

    if (!description.trim()) {
      setError("Please enter your feedback.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const imageUrls: string[] = [];

      const response = await fetch("/api/feedbacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Feedback",
          description: description.trim(),
          rating,
          images: imageUrls,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback.");
      }

      router.push("/feedback-success");
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <RatingSelector
        value={rating}
        onChange={(value) => {
          setRating(value);
          setError("");
        }}
      />

      <FeedbackTextArea
        value={description}
        onChange={(value) => {
          setDescription(value);
          setError("");
        }}
      />

      <ImageUploader onImagesChange={setImages} />

      {error && <p className="text-sm font-medium text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Feedback"}
      </button>
    </form>
  );
};
