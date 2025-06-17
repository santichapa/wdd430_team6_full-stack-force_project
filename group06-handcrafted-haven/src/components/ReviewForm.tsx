"use client";

import { useState } from "react";

interface ReviewFormProps {
  onAddReview: (review: { rating: number; comment: string }) => void;
}

export default function ReviewForm({ onAddReview }: ReviewFormProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [hoveredRating, setHoveredRating] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!comment.trim()) return;

    onAddReview({
      rating,
      comment: comment.trim(),
    });

    setComment("");
    setRating(5);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 border rounded-lg bg-gray-50"
    >
      <h3 className="text-lg text-dark font-semibold mb-3">Write a Review</h3>

      {/* Star Rating */}
      <div className="mb-4">
        <label className="text-dark block text-sm font-medium mb-2">
          Rating
        </label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className={`text-2xl transition-colors ${
                star <= (hoveredRating || rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              } hover:text-yellow-400`}
            >
              ★
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-1">{rating} out of 5 stars</p>
      </div>

      {/* Comment */}
      <div className="mb-4">
        <label className="block text-dark text-sm font-medium mb-2">
          Your Review
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="bg-mango1 text-dark w-full border rounded-md p-3 h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Share your experience with this product..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={!comment.trim()}
        className="bg-mango4 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Submit Review
      </button>
    </form>
  );
}
