"use client";

import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  rating: number;
  comment: string;
  user: {
    name: string;
  };
  createdAt: string;
}

interface ProductReviewPageProps {
  productId: string;
}

export default function ProductReviewPage({
  productId,
}: ProductReviewPageProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch reviews when component mounts
  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch(`/api/products/${productId}/reviews`);
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, [productId]);

  async function addReview(newReview: { rating: number; comment: string }) {
    try {
      const response = await fetch(`/api/products/${productId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newReview,
          userId: "ccf2e5c3-9356-4d0e-b19d-dbc855815810", // Temporary - use actual logged-in user later
        }),
      });

      if (response.ok) {
        const createdReview = await response.json();
        setReviews((prev) => [createdReview, ...prev]);
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  }

  if (loading) {
    return <div className="mt-8">Loading reviews...</div>;
  }

  return (
    <section className="mt-8">
      <h2 className="text-mango4 text-2xl font-semibold mb-4">
        Reviews ({reviews.length})
      </h2>
      <ReviewForm onAddReview={addReview} />
      <ReviewList reviews={reviews} />
    </section>
  );
}
