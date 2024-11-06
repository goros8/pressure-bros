import Deck from "../images/deck.jpg";
import Fence from "../images/fence.jpg";
import House from "../images/house.JPG";
import Sidewalk from "../images/sidewalk.jpg";

const Slideshow =()=>{
    return(
        <div id="main-div">
            <div class="columns">
                <div class="one">
                    <h2>Sidewalks/Driveways</h2>
                    <div class="slideshow">
                        <img src={Sidewalk} class="slideshow-img" alt="Sidewalk" />
                        <img src="../youngbros/pressure-washing/side.JPG" class="slideshow-img hidden" alt="Driveway" />
                    </div>
                </div>
                <div class="one">
                    <h2>Houses</h2>
                    <div class="slideshow">
                        <img src={House} class="slideshow-img" alt="House1" />
                        <img src="../youngbros/pressure-washing/two.JPG" class="slideshow-img hidden" alt="House2" />
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="one">
                    <h2>Fences</h2>
                    <div class="slideshow">
                        <img src={Fence} class="slideshow-img" alt="Fence" />
                        <img src="../youngbros/generic-pics/fencelong.webp" class="slideshow-img hidden" alt="Fence 2" />
                    </div>
                </div>
                <div class="one">
                    <h2>Decks/Patios</h2>
                    <div class="slideshow">
                        <img src={Deck} class="slideshow-img" alt="Deck" />
                        <img src="../youngbros/generic-pics/gooddeck.jpg" class="slideshow-img hidden" alt="Patio" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slideshow;