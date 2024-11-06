import EmployeeKai from "../components/EmployeeKai";
import EmployeeNicco from "../components/EmployeeNicco.js";
import "../css/About.css";
const  About= ()=>{
    return(
        
        <>

            <div id="mission">
            <h2>Mission Statement</h2>
            <p>
"At Young Bro's Pressure Washing, our mission is to deliver exceptional
cleaning services that restore and rejuvenate surfaces, enhancing the
beauty and value of every property we touch. With a commitment to
precision, quality, and customer satisfaction, we aim to provide
eco-friendly and effective powerwashing solutions that exceed
expectations. Through hard work, integrity, and attention to detail,
we strive to leave every client with a spotless finish and a lasting impression."
            </p>
        </div>
        <div class="columns">
            <EmployeeNicco/>
            <EmployeeKai/>
        </div>
        
        </>
        
    );
};
export default About;