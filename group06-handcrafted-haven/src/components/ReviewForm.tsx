"use client";

import { useState } from "react";

export default function ReviewForm({
  onAddReview,
}: {
  onAddReview: (review: string) => void;
}) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    onAddReview(text.trim());
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border rounded p-2 mb-2"
        placeholder="Write your review..."
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Review
      </button>
    </form>
  );
}
