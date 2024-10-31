
import './App.css'
import GrendFather from './conponents/grendFather/GrendFather'
import ReusableForm from './conponents/ReusableForm/ReusableForm'
//import HookForm from './conponents/HookForm/HookForm'
//import RefForm from './conponents/RefForm/RefForm'
//import StateForm from './conponents/StateForm/StateForm'
//import From from './conponents/From/From'

function App() {
 const handleSingeUpForm = data =>{
  console.log("singe up form",data)
 }
 const handleUpdataProfile = data =>{
  console.log("Updata Profile ",data)
 }
 
  return (
    <>
      <h1>Vite + React</h1>
    {/* <From></From>*/}
     {/* <StateForm></StateForm>*/}
    {/* <RefForm></RefForm>*/}
     {/*<HookForm></HookForm>*/}
    {/* <ReusableForm  submitBtnText={"Submit"} handleForm={handleSingeUpForm }>
      <div>
        <h3>singe up</h3>
        <p>please singe up now </p>
      </div>
     </ReusableForm>
     <ReusableForm submitBtnText={"Update"} handleForm={handleUpdataProfile}>
     <div>
        <h3>Profile update</h3>
        <p>Always your profile update </p>
      </div>
     </ReusableForm>*/}

     <GrendFather></GrendFather>
    </>
  )
}

export default App
