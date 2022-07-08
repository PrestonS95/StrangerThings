import React from "react"
import { registerPerson } from "../api";

const Register = () =>{
         

       async function handleSubmit(event) {
         event.preventDefault();
        //  const username = event.target.value
        //  const password = event.target.value
        // const returnedData = await registerPerson(event)
        //  console.log(event, returnedData)
           }
               
return(<>
       <form onSubmit={handleSubmit}>
         <label>Username:</label>
         <input id='username' placeholder="Your Username here"  />
         <label>Password:</label>
         <input id= 'password' placeholder='Your Password Here'  />
         <label>Confirmation:</label>
         <input id="confirm" placeholder="Confirm Password"  />
         <button type="submit">Login</button>
       </form>
 </>)

}
export default Register