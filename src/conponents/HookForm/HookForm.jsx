  import useHandleHook from "../Formjs/Form";
 
 const HookForm = () => {

 const nameState = useHandleHook('kausar')
 const emailState = useHandleHook ()
const handleForm = e =>{
e.preventDefault()
console.log(nameState.value)
console.log(emailState.value)
}


    return (
        <div>
<form onSubmit={handleForm}>

<input {...nameState} type="text" name="name" id="" />
<br />
 <input {...emailState} type="email" name="email" id="" />
 <br />
<input  type="text" name="phone" id="" />
<br />  
<input type="submit" value="submit" />
</form>
        </div>
    );
 };
 
 export default HookForm;