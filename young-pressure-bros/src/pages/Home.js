import Left from "../components/Left";
import Right from "../components/Right";
import Main from "../images/webHouse.webp";
import "../css/Home.css"
const Home = ()=>{
    return(
        <>
        <h2 id="home-header">Previous Jobs:</h2>
        <img id="main-img" src ={Main}/>
        <Right/>
        <Left/>
        <Right/>
        <Left/>
        </>
    );
};
export default Home;