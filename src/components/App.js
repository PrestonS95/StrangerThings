import React,{useState, useEffect} from "react"
import { API, getPosts } from "../api/index"
import {UserPosts, Header, LogIn, Profile, Register} from "./"
import {registerPerson, loginUser} from '../api'
import './App.css'
import { Route, Routes } from "react-router-dom"


const App = () =>{
    
    
            
    return(<>
    <Header/>
        <Routes>
        <Route path="/" element={<UserPosts getPosts={getPosts}/>} />
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/register" element={<Register/>}/>
           
    </Routes>
    {/* <Route path="/post">  */}
    {/* </Route> */}

    </>
    
    
    )

}

export default App


