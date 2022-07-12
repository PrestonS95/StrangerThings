import React,{useState, useEffect} from "react"
import { API, getPosts } from "../api/index"
import {UserPosts, Header, LogIn, Profile, Register,} from "./"
import {registerPerson, loginUser} from '../api'
import './App.css'
import { Route, Routes } from "react-router-dom"


const App = () =>{
    const [tokenState, SetTokenState] = useState("")
    const [userLogIn, setUserLogIn] = useState(false);
    const setter= ()=>{
     const localToken= localStorage.getItem('token')
      console.log(localToken)
      if(localToken){setUserLogIn(true), SetTokenState(localToken)} else {setUserLogIn(false)}
        
    }
  useEffect(setter)
   

  function logsIn(){
    setUserLogIn(true)
    localStorage.setItem('token', tokenState)}
   
  
function logout(){
    localStorage.clear()
    setUserLogIn(false)
  }


    
            
    return(<>
    <Header userLogIn={userLogIn}/>
        <Routes>
        <Route path="/" element={<UserPosts getPosts={getPosts} setUserLogIn={setUserLogIn} userLogIn={userLogIn} logout={logout}/>} />
        <Route path="/login" element={<LogIn setUserLogIn={setUserLogIn}/>}/>
        <Route path="/profile" element={<Profile tokenState={tokenState} userLogIn={userLogIn}/>}/>
        <Route path="/register" element={<Register/>}/>
           
    </Routes>
    {/* <Route path="/post">  */}
    {/* </Route> */}

    </>
    
    
    )

}

export default App


