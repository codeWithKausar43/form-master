 const ReusableForm = ( {formTitle, submitBtnText,handleForm,children}) => {

const handleLocalForm = e =>{
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password:e.target.password.value

    }
    handleForm(data)
}
     
return (
<div>
<h4>{children}</h4>
<form onSubmit={handleLocalForm}>

<input type="text" name="name" id="" />
<br />
 <input type="email" name="email" id="" />
 <br />
<input type="password" name="password" id="" />
<br />  
<input type="submit" value={submitBtnText} />
</form>
        </div>
    );
};

export default ReusableForm;