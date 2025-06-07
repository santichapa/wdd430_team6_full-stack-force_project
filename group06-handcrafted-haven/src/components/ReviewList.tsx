export default function ReviewList({ reviews }: { reviews: string[] }) {
  if (reviews.length === 0) {
    return <p>No reviews yet. Be the first!</p>;
  }

  return (
    <ul className="space-y-2">
      {reviews.map((review, i) => (
        <li key={i} className="border p-2 rounded bg-gray-50">
          {review}
        </li>
      ))}
    </ul>
  );
}
