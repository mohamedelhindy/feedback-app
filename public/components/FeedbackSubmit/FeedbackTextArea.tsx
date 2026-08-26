"use client";

interface FeedbackTextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

export const FeedbackTextArea = ({
  value,
  onChange,
}: FeedbackTextAreaProps) => {
  return (
    <div>
      <label
        htmlFor="feedback"
        className="text-sm font-semibold text-slate-900"
      >
        Your feedback <span className="text-red-500">*</span>
      </label>

      <textarea
        id="feedback"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Tell us more..."
        rows={5}
        required
        className="mt-3 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
};
