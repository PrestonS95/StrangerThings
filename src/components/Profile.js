import React, { useEffect, useState } from "react";
import { getProfile } from "../api";

const Profile = (props) =>{
    let token= ''
    const [myInfo, setMyInfo] = useState({})
    useEffect(()=>{
        token = localStorage.getItem("token")
        async function getMyInfo(){
           const myReturnedInfo = await getProfile(token)
           console.log(myReturnedInfo,'info from api call')
           setMyInfo(myReturnedInfo)
        }
        getMyInfo()
}), []
return(
    <div className="box">{`This is my Profile Component`}

    </div>
)

}
export default Profile
