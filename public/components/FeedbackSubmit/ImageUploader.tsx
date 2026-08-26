"use client";

import { ChangeEvent, DragEvent, useState } from "react";

interface ImageUploaderProps {
  onImagesChange?: (images: File[]) => void;
}

export const ImageUploader = ({ onImagesChange }: ImageUploaderProps) => {
  const [images, setImages] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const addImages = (newImages: File[]) => {
    const imageFiles = newImages.filter((file) =>
      file.type.startsWith("image/"),
    );

    const updatedImages = [...images, ...imageFiles].slice(0, 5);

    setImages(updatedImages);
    onImagesChange?.(updatedImages);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    addImages(Array.from(event.target.files));

    event.target.value = "";
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    addImages(Array.from(event.dataTransfer.files));
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);

    setImages(updatedImages);
    onImagesChange?.(updatedImages);
  };

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-slate-900">
        Upload images{" "}
        <span className="font-normal text-slate-500">(optional)</span>
      </h3>

      <div
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-slate-200 bg-white"
        }`}
      >
        <input
          id="feedback-images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />

        <label
          htmlFor="feedback-images"
          className="flex cursor-pointer flex-col items-center"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-50">
            <span className="text-xl text-slate-500">↥</span>
          </div>

          <p className="text-sm text-slate-600">Drag & drop images here</p>

          <p className="mt-1 text-sm text-slate-600">
            or{" "}
            <span className="font-semibold text-blue-600">click to browse</span>
          </p>
        </label>

        <p className="mx-auto mt-4 w-fit rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500">
          You can upload up to 5 images
        </p>
      </div>

      {images.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={`${image.name}-${index}`}
              className="group relative overflow-hidden rounded-lg border border-slate-200"
            >
              <img
                src={URL.createObjectURL(image)}
                alt={`Selected image ${index + 1}`}
                className="h-28 w-full object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
