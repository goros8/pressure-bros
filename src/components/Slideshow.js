import React from "react";
import "../css/GalleryStyles.css";
import DeckImage1 from "../images/deck.jpg";
import FenceImage1 from "../images/fence.jpg";
import FenceImage2 from "../images/fencelong.webp";
import DeckImage2 from "../images/gooddeck.jpg";
import SidewalkImage2 from "../images/goodSidewalk.webp";
import HouseImage1 from "../images/house.JPG";
import HouseImage2 from "../images/house2.jpg";
import SidewalkImage1 from "../images/sidewalk.jpg";
import CategorySlideshow from "./CategorySlideshow";

const Slideshow = () => {
    return (
        <div id="gallery-main-div">
            <h1>Gallery</h1>
            <div id="gallery-columns">
                <CategorySlideshow
                    title="Sidewalks/Driveways"
                    images={[SidewalkImage1, SidewalkImage2]}
                />
                <CategorySlideshow
                    title="Houses"
                    images={[HouseImage1, HouseImage2]}
                />
                <CategorySlideshow
                    title="Fences"
                    images={[FenceImage1, FenceImage2]}
                />
                <CategorySlideshow
                    title="Decks/Patios"
                    images={[DeckImage1, DeckImage2]}
                />
            </div>
        </div>
    );
};

export default Slideshow;
