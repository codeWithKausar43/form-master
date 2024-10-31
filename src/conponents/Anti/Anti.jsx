import { useContext } from "react";
import { GiftContext } from "../grendFather/GrendFather";

 
const Anti = ( ) => {
 const [money,setMoney] = useContext(GiftContext)
    return (
        <div className="GrendFather ">
           <h3>Anti</h3>
            <div>
              {money}
              <button onClick={()=>setMoney(money + 100)}>Gift Money</button>
            </div>
        </div>
    );
};

export default Anti;