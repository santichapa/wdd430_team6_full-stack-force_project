export default function ReviewList() {
  const reviews = [
    { id: 1, text: "This basket is stunning!" },
    { id: 2, text: "Perfect craftsmanship and great size." },
  ];

  return (
    <ul className="mt-4 space-y-2">
      {reviews.map((review) => (
        <li key={review.id} className="border p-2 rounded">
          {review.text}
        </li>
      ))}
    </ul>
  );
}
