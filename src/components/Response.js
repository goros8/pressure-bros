import React, { useState } from "react";
import "../css/Response.css";
const Response = ({ onAddReview }) => {
  const [review, setReview] = useState({ name: "", stars: 0, feedback: "" });
  const [message, setMessage] = useState(""); // For error/success message

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  // Handle star rating click
  const handleStarClick = (star) => {
    setReview((prevReview) => ({ ...prevReview, stars: star }));
  };

  // Submit review form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.stars === 0) {
      setMessage("Please select a star rating.");
      return;
    }
    const date = new Date().toLocaleDateString();
    const newReview = { ...review, date };

    onAddReview(newReview); // Pass data to parent for submission
    setReview({ name: "", stars: 0, feedback: "" }); // Reset form
    setMessage(""); // Clear any existing messages
  };

  return (
    <div id="response">
      <h3>Leave a Review!</h3>
      {message && <p style={{ color: "red" }}>{message}</p>}
      <form onSubmit={handleSubmit}>
  <label htmlFor="name-input">
    Your Name:
    <input
      type="text"
      id="name-input"
      name="name"
      placeholder="Enter your name"
      value={review.name}
      onChange={handleChange}
      required
    />
  </label>
  <label>
    Satisfaction Level:
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${review.stars >= star ? "selected" : ""}`}
          onClick={() => handleStarClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  </label>
  <p>Your Review:</p>
    <textarea
      id="feedback-input"
      name="feedback"
      placeholder="Let us know how we did!"
      value={review.feedback}
      onChange={handleChange}
      required
    />
  
  <button type="submit">Submit</button>
</form>

    </div>
  );
};

export default Response;
