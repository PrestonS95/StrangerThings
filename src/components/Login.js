import React,{useState, useEffect} from "react"
import { API, getPosts } from "../api/index"
import UserPosts from "./UserPosts"
import {registerPerson, loginUser} from '../api'
import './App.css'
import { Route } from "react-router-dom"

const LogIn = () =>{

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
</>)

}
export default LogIn