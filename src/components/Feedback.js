import React, { useEffect, useState } from "react";
import "../css/Feedback.css"; // Import custom styles

const Feedback = () => {
  const [reviews, setReviews] = useState([]); // Store the fetched reviews
  const [loading, setLoading] = useState(true); // Indicate if data is being loaded
  const [error, setError] = useState(null); // Store any errors during fetch

  useEffect(() => {
    // Fetch reviews directly from the backend
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://backend-pressure-bros.onrender.com/api/reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews. Please try again later.");
        }
        const data = await response.json(); // Parse the JSON response
        setReviews(data); // Update the reviews state
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchReviews(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once

  // Display loading message while reviews are being fetched
  if (loading) return <p>Loading reviews...</p>;

  // Display error message if fetching fails
  if (error) return <p>Error: {error}</p>;

  // Render the reviews if available
  return (
    <div className="feedback-container">
      <h2 className="feedback-header">Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available at the moment. Be the first to leave one!</p>
      ) : (
        <ul className="feedback-list">
          {reviews.map((review, index) => (
            <li key={index} className="feedback-item">
              <p className="feedback-user">
                <strong>Name:</strong> {review.name}
              </p>
              <p className="feedback-date">
                <strong>Date:</strong> {review.date}
              </p>
              <p className="feedback-rating">
                <strong>Rating:</strong> {review.stars} stars
              </p>
              <p className="feedback-review">
                <strong>Review:</strong> {review.feedback}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Feedback;
