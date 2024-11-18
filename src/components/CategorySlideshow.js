import React, { useState } from "react";
import "../css/GalleryStyles.css";

const CategorySlideshow = ({ title, images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const showNextImage = () =>
        setCurrentImageIndex((currentImageIndex + 1) % images.length);

    const showPreviousImage = () =>
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);

    return (
        <div className="gallery-category">
            <h2>{title}</h2>
            <div className="gallery-slideshow">
                {images.map((imgSrc, index) => (
                    <img
                        key={index}
                        src={imgSrc}
                        alt={`${title} ${index + 1}`}
                        className={`gallery-slideshow-img ${index === currentImageIndex ? "" : "hidden"}`}
                        onClick={() => showModal(index)}
                    />
                ))}
            </div>

            {isModalOpen && (
                <div id="gallery-modal" className="show">
                    <span id="gallery-close" onClick={closeModal}>&times;</span>
                    <img
                        id="gallery-modal-img"
                        src={images[currentImageIndex]}
                        alt={`${title} Full`}
                    />
                    <div id="gallery-prev" onClick={showPreviousImage}>&lt;</div>
                    <div id="gallery-next" onClick={showNextImage}>&gt;</div>
                </div>
            )}
        </div>
    );
};

export default CategorySlideshow;
