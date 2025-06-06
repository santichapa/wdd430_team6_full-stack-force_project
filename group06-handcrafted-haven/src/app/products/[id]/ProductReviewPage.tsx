"use client";

import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";

export default function ProductReviewPage() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      <ReviewForm />
      <ReviewList />
    </section>
  );
}
