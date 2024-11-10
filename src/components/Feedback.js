import React, { useEffect, useState } from "react";
import "./styles.css"; // Import the custom styles

const Feedback = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch("https://backend-pressure-bros.onrender.com/api/reviews")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data[0].reviews); // Assuming `reviews` is nested in the first object
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="feedback-container">
      <h2 className="feedback-header">Customer Reviews</h2>
      <ul className="feedback-list">
        {reviews.map((review, index) => (
          <li key={index} className="feedback-item">
            <p className="feedback-user"><strong>User:</strong> {review.user}</p>
            <p className="feedback-date"><strong>Date:</strong> {review.date}</p>
            <p className="feedback-rating"><strong>Rating:</strong> {review.stars} stars</p>
            <p className="feedback-review"><strong>Review:</strong> {review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
