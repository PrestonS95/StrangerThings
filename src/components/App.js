import React,{useState, useEffect} from "react"
import { API, getPosts } from "../api/index"
import {UserPosts, Header, LogIn, Profile, Register} from "./"
import {registerPerson, loginUser} from '../api'
import './App.css'
import { Route } from "react-router-dom"


const App = () =>{
    
    
            
    return(<>
        <Header/>
        <LogIn/>
        <Register/>
        <UserPosts getPosts={getPosts}/>
    {/* <Route path="/post">  */}
    {/* </Route> */}

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