import Friend from "../Friend/Friend";

 

const Myself = ({gift}) => {
    return (
        <div className="GrendFather">
            <h3>Myself</h3>
             <div className="GrendFather">
                <Friend gift={gift}></Friend>
             </div>
        </div>
    );
};

export default Myself;