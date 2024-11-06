import "../css/Right.css";
import goodDeck from "../images/gooddeck.jpg";
const Right = () =>{
    return(
        <>
        <div className="right">
            <div className="three">
                <p>Decks!</p>
            </div>

            <img className="seven" src={goodDeck}/>

            
        </div>
        </>
    )
}
export default Right;