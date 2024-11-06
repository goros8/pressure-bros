import Feedback from "../components/Feedback";
import "../css/Reviews.css";
const Reviews = ()=>{
    return(
        <>
        <h1>Customer Testimonials</h1>
        <div className="columns">
            <div className="review-seven">
        <Feedback/>
        <Feedback/>
        <Feedback/>
        </div>
        <div id="write" className="review-one">
                <div id="response">
                    <h2>Leave a Review!</h2>
                    <h3>Satisfaction Level:</h3>
                    <input type="text" placeholder="Let us know how we did!"/>
                    <button>Submit</button>
                </div>
        </div>
        </div>
        
        
        </>
        

    );
};
export default Reviews;