import React from "react"
import { registerPerson } from "../api";

const Register = () =>{
    

       const handleSubmit = async (event) => {
         event.preventDefault();
         await registerPerson(event.target.value)
         console.log(event)
           }
               
return(<>
       <form onSubmit={handleSubmit}>
         <label>Username:</label>
         <input id='username' placeholder="Your Username here" type="text" name="name" />
         <label>Password:</label>
         <input id= 'password' placeholder='Your Password Here' name="password" />
         <label>Confirmation:</label>
         <input id="confirm" placeholder="Confirm Password" name='confirm' />
         <button type="submit">Login</button>
       </form>
 </>)

}
export default Register