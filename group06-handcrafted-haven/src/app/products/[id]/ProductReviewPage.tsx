"use client";

import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";
import { useState } from "react";

export default function ProductReviewPage() {
  const [reviews, setReviews] = useState<string[]>([]);

  function addReview(newReview: string) {
    setReviews((prev) => [newReview, ...prev]);
  }

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      <ReviewForm onAddReview={addReview} />
      <ReviewList reviews={reviews} />
    </section>
  );
}
