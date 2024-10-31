
import { createContext, useState} from "react";
import Angcel from "../Angcel/Angcel";
import Anti from "../Anti/Anti";
import Father from "../Father/Father";
import './GrendFather.css'
export const GiftContext = createContext(100)
export const MoneyContext = createContext('gold')
 
const GrendFather = () => {
const gift = "daimon"
 const [money, setMoney] = useState(100)
    return (
       <GiftContext.Provider value={[money,setMoney]}>
<MoneyContext.Provider value="gold">
             <div className="GrendFather">
           
           <h2>Greand Father</h2>
           {money}
             
            <div className="flex">
            <Father gift={gift}></Father>
            <Angcel></Angcel>
            <Anti></Anti>
            </div>
        
        </div>
          </MoneyContext.Provider>
       </GiftContext.Provider>
            
     
      
    );
};

export default GrendFather;