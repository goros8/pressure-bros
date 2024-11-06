import "../css/employeeBio.css";
import Kai from "../images/kai.JPG";
const EmployeeKai = () => {
    return (
        <div className="one">
            <img src={Kai} alt="Kai Young" />
            <h4>Kai Young</h4>
            <h6>Co-Owner</h6>
            <p>Kai is a passionate and hardworking powerwashing
                    technician who excels at delivering top-tier service.
                    With a natural talent for deep cleaning and surface
                    restoration, he approaches every task with care and
                    efficiency. Kai's friendly demeanor and professionalism
                    have earned him a reputation for building great rapport
                    with clients while consistently delivering spotless
                    results. Whether handling routine maintenance or tough
                    grime, Kai brings expertise and enthusiasm to the job,
                    making him a trusted name in powerwashing.
                </p>
        </div>
    );
};

export default EmployeeKai;
