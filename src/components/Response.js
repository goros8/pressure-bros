import React, { useState } from 'react';

const Response = () => {
    const [review, setReview] = useState({
        name: '',
        stars: 0,
        feedback: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReview((prevReview) => ({
            ...prevReview,
            [name]: value,
        }));
    };

    const handleStarClick = (star) => {
        setReview((prevReview) => ({
            ...prevReview,
            stars: star,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const date = new Date().toLocaleDateString();
        const reviewData = { ...review, date };

        try {
            const response = await fetch('http://localhost:3000/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData),
            });
            const result = await response.json();

            if (response.ok) {
                setMessage('Review submitted successfully!');
                setReview({ name: '', stars: 0, feedback: '' });
            } else {
                setMessage(`Failed to submit review: ${result.message}`);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div id="write">
            <div id="response">
                <h2>Leave a Review!</h2>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <label>
                        <h3>Your Name:</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={review.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <h3>Satisfaction Level:</h3>
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`star ${review.stars >= star ? 'selected' : ''}`}
                                    onClick={() => handleStarClick(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </label>
                    <label>
                        <h3>Your Review:</h3>
                        <textarea
                            name="feedback"
                            placeholder="Let us know how we did!"
                            value={review.feedback}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Response;
