import React,{useState, useEffect} from "react"
import { API, getPosts } from "../api/index"
import UserPosts from "./UserPosts"
import {registerPerson, loginUser} from '../api'
import './App.css'



const App = () =>{
    
    
    const handleSubmit = (event) => {
         event.preventDefault();
         getPosts(event)
        }
            
    return(<>
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input id='username' placeholder="Your Username here" type="text" name="name" />
      <label>Password:</label>
      <input id= 'password' placeholder='Your Password Here' name="password" />
      <button type="submit">Login</button>
    </form>
    <UserPosts getPosts={getPosts}/>
    </>
    
    )

}

export default App


// async function Post(){
//     const response = await fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts')
//     .then(response => response.json())
//     .then(result => {
//         const posts = result
//         console.log(result);
//         return posts
//     })
//     .catch(console.error);
// }