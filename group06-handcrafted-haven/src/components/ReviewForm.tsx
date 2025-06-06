"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted review:", review);
    setReview("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review..."
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="mt-2 bg-black text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
