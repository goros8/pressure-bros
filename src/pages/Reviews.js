import Feedback from "../components/Feedback";
import Response from "../components/Response";
import "../css/Reviews.css";
const Reviews = ()=>{
    return(
        <>
        <h1>Customer Testimonials</h1>
        <div className="columns">
            <div className="review-seven">
        <Feedback/>
        </div>
        <div className="review-one">
            <Response/>
        </div>
        </div>
        
        
        </>
        

    );
};
export default Reviews;