import React, { useState } from "react";
import "../css/EditReviewDialog.css";

const EditReviewDialog = ({ review, id, onSave }) => {
  const [inputs, setInputs] = useState({
    ...review,
    date: review?.date || new Date().toLocaleDateString(), // Ensure date field is set
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(inputs); // Pass the updated review to the parent component
    setIsOpen(false); // Close the dialog after saving
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Edit</button>
      {isOpen && (
        <div id="edit-review-modal">
          <div className="modal-header">
            <h3>Edit Review</h3>
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              &times;
            </button>
          </div>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Rating:
                <input
                  type="number"
                  name="stars"
                  value={inputs.stars}
                  onChange={handleChange}
                  required
                  min="1"
                  max="5"
                />
              </label>
              <label>
                Feedback:
                <textarea
                  name="feedback"
                  value={inputs.feedback}
                  onChange={handleChange}
                  required
                />
              </label>
              {/* Date field displayed but non-editable */}
              <label>
                Date:
                <input
                  type="text"
                  name="date"
                  value={inputs.date}
                  readOnly
                />
              </label>
              <div className="modal-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditReviewDialog;
