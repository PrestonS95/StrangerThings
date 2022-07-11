import React, { useEffect, useState } from "react";
import { getProfile } from "../api";

const Profile = (props) =>{
    let token= ''
    const [myInfo, setMyInfo] = useState({})
    useEffect(() => {
       
        
        async function getMyInfo() {
            let token =  localStorage.getItem('token')
             console.log(token)
            const myReturnedInfo = await getProfile(token)
            console.log(myReturnedInfo)
            setMyInfo(myReturnedInfo)
        }
         getMyInfo()
    },[])
   console.log(myInfo)
return(
    <div className="box">{`Profile Component`}
        {/* {myInfo.messages.map(messages, posts=>{
          return(
            <div className='profile'key={data._id} style={{alignItems:'center',margin:'20px 60px',border:'1px solid black' ,padding:'10px'}}>
            <h3>{myInfo.data.messages}</h3>
            <h4>{posts.author.username}</h4>
            <p>{posts.data}</p>
            <h3>{posts.price}</h3>
          </div>)})} */}

    </div>
)

}
export default Profile
