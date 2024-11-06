import "../css/employeeBio.css";
import Nicco from "../images/nicco.JPG";
const EmployeeNicco = () => {
    return (
        <div className="one">
            <img src={Nicco} alt="Nicco Young" />
            <h4>Nicco Young</h4>
            <h6>Co-Owner</h6>
            <p>
                Nicco is a dedicated powerwashing expert with a keen eye for detail.
                Known for his strong work ethic and ability to tackle the toughest
                cleaning jobs, he brings precision and energy to every project. Nicco
                takes pride in restoring surfaces to their original shine, whether
                it's a residential driveway or a commercial building. With his
                customer-first approach and commitment to quality, Nicco ensures
                that every job exceeds expectations, leaving clients impressed with the transformation.
            </p>
        </div>
    );
};

export default EmployeeNicco;
