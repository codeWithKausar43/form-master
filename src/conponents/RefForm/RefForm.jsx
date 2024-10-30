import { useEffect, useRef } from "react";

 
const RefForm = () => {

const  handleFromSubmit = e =>{
    e.preventDefault()
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)

}
useEffect(()=>{
    nameRef.current.focus()
},[])
const nameRef =useRef(null)
const emailRef = useRef(null) 
const passwordRef  = useRef(null)
 
    return (
        <div>
             <form onSubmit={handleFromSubmit}>

                <input ref={nameRef} type="text" name="name" id="" />
                <br />
                 <input ref={emailRef} defaultValue={'kausar@gmail.com'} type="email" name="email" id="" />
                 <br />
                <input ref={passwordRef} type="password" name="password" id="" />
                <br />  
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;