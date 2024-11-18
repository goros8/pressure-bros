import React from "react";

// Modal Component
const Modal = ({ images, currentImageIndex, closeModal, showNextImage, showPreviousImage }) => {
    return (
        <div id="gallery-modal" className="modal-overlay">
            <div className="modal-content">
                <span id="gallery-close" className="modal-close" onClick={closeModal}>
                    &times;
                </span>
                <img
                    id="gallery-modal-img"
                    className="modal-image"
                    src={images[currentImageIndex]}
                    alt={`Full-size image ${currentImageIndex}`}
                />
                <div id="gallery-prev" className="modal-nav" onClick={showPreviousImage}>
                    &lt;
                </div>
                <div id="gallery-next" className="modal-nav" onClick={showNextImage}>
                    &gt;
                </div>
            </div>
        </div>
    );
};

export default Modal;
