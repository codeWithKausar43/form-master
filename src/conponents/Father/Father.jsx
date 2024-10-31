import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

 

const Father = ({gift}) => {
    return (
        <div className="GrendFather">
            <h2>Father</h2>
            <div className="flex">
            <Myself gift={gift}></Myself>
            <Brother></Brother>
            <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;