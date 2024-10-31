import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { GiftContext } from "../grendFather/GrendFather";

 

const Angcel = () => {
    const [money,setMoney] = useContext(GiftContext)
    return (
        <div className="GrendFather">
            <h3>Angcel</h3>
            {money}
            <div className="GrendFather">
                <Cousin></Cousin>
            </div>
            <button onClick={()=>setMoney(money +500)}>gift</button>
        </div>
    );
};

export default Angcel;