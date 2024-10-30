import { useState } from "react";

 

const StateForm = () => {
const [name,setName] = useState(null)
const [email, setEmail] = useState(null)
const [password,setPassword] = useState(null)
const [error, setError] = useState()

    const handleStateFrom = e =>{
        e.preventDefault()
        if(password.length <6){
            setError('please provide 6 cherecture')
        }else{
            setError("")
            console.log(name,email,password)
        }
            
        
        
    }

    const handleChangeName = e =>{
        setName(e.target.value)
    }
    const handleChangeEmail = e =>{
        setEmail(e.target.value)
    }
    const handleChangePassword = e =>{
        setPassword(e.target.value)
    }

    return (
        <div>
         <form onSubmit={handleStateFrom }>

    <input onChange={handleChangeName} type="text" name="name" id="" />
<br />
        <input onChange={handleChangeEmail} type="email" name="email" id="" />
    <br />
    <input onChange={handleChangePassword} type="password" name="password" id="" required />
<br />  
        <input type="submit" value="submit" />
</form>
{
   error && <p>{error}</p>
}
        </div>
    );
};

export default StateForm;