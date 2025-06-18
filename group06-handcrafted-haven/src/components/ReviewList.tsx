'use client';

interface Review {
  id: string;
  rating: number;
  comment: string;
  user: {
    name: string;
  };
  createdAt: string;
}

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p className="text-lg">No reviews yet. Be the first!</p>
        <p className="text-sm">Share your experience with this product.</p>
      </div>
    );
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  function renderStars(rating: number) {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Header with stars and user info */}
          <div className="flex items-center justify-between mb-3">
            <div>
              {renderStars(review.rating)}
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">{review.user.name}</p>
              <p className="text-sm text-gray-500">
                {formatDate(review.createdAt)}
              </p>
            </div>
          </div>

          {/* Review comment */}
          <p className="text-gray-700 leading-relaxed">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}