import React, { useEffect, useState } from "react";
import "../css/Reviews.css";
import EditReviewDialog from "./EditReviewDialog";
import Response from "./Response";

const Parent = () => {
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://backend-pressure-bros.onrender.com/api/reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        console.log("Fetched reviews:", data); // Debug API response
        setReviews(data); // Directly using data instead of nested property
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setMessage("Error fetching reviews: " + error.message);
      }
    };
    fetchReviews();
  }, []);

  const onAddReview = async (newReview) => {
    try {
      const response = await fetch("https://backend-pressure-bros.onrender.com/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) throw new Error("Failed to submit review");

      const addedReview = await response.json();
      setReviews((prevReviews) => [...prevReviews, addedReview]); // Add to the current list of reviews
      setMessage("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      setMessage("Error submitting review: " + error.message);
    }
  };

  const editReview = async (id, updatedReview) => {
    try {
      const response = await fetch(`https://backend-pressure-bros.onrender.com/api/reviews/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedReview),
      });

      if (!response.ok) throw new Error("Failed to update review");

      const updatedReviewData = await response.json();
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === updatedReviewData._id ? updatedReviewData : review
        )
      );
      setMessage("Review updated successfully!");
    } catch (error) {
      console.error("Error updating review:", error);
      setMessage("Error updating review: " + error.message);
    }
  };

  const deleteReview = async (id) => {
    try {
      const response = await fetch(`https://backend-pressure-bros.onrender.com/api/reviews/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete review");

      setReviews((prevReviews) => prevReviews.filter((review) => review._id !== id));
      setMessage("Review deleted successfully!");
    } catch (error) {
      console.error("Error deleting review:", error);
      setMessage("Error deleting review: " + error.message);
    }
  };

  return (
    <div id="reviews-container">
      <div className="three">
        <h2>Customer Reviews</h2>
        <div className="reviews-list">
          {reviews.length === 0 ? (
            <p id="blank">No reviews yet. Be the first to leave one!</p>
          ) : (
            <ul>
              {reviews.map((review) => (
                <li key={review._id}>
                  <p>
                    <strong>{review.name}</strong> ({review.date})
                  </p>
                  <p>Rating: {review.stars} stars</p>
                  <p>{review.feedback}</p>
                  <div className="review-buttons">
                    <button
                      className="delete"
                      onClick={() => deleteReview(review._id)} // Use MongoDB _id
                    >
                      Delete
                    </button>
                    <EditReviewDialog
                      review={review}
                      id={review._id}
                      onSave={(updatedReview) => editReview(review._id, updatedReview)} // Use MongoDB _id
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="one">
        <Response onAddReview={onAddReview} />
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Parent;
