import axios from 'axios';

const BASE = `https://strangers-things.herokuapp.com/api/`
const COHORT = `2206-FTB-ET-WEB-FT-A/`
const URL = `${BASE}${COHORT}`

export async function registerPerson(event){
    console.log(event)
    console.log(`${BASE}${COHORT}`)
    const registerUsername = await event.target[0].value
    const registerPassword = await event.target[1].value
    console.log(registerPassword, registerUsername)

    const response = await fetch(`${BASE}${COHORT}users/register`,
    
    // console.log(response),
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: registerUsername,
                password: registerPassword,
            }
        })
    }
    )
    const result =  response.json
    console.log(response)
    const token = result.data.token
    
    localStorage.setItem('token', token)
    const tokenFromStorage= localStorage.getItem('token')
    console.log(tokenFromStorage)
}

export async function loginUser(username, password){
  console.log(event)
  // const registerUsername = await event.target[0].value
  // const registerPassword = await event.target[1].value

  const response = await fetch(`${BASE}${COHORT}users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password

        }
      })
    })
    const result = await response.json
    const token = result.data.token
    console.log(token)
    return token
}
// export async function getPosts() {
  //   try {
  //     const  response  = await axios.get(`${ URL }/posts`);
  //     console.log(response)
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
export async function getPosts(){
  try{
    const response = await fetch(`${URL}/posts`)
    const result = await response.json()
    console.log(result.data.posts)
    let postsObj = result.data.posts
    return postsObj
  }catch(err){
    console.error('error', err)

}
}
 export const getProfile = async() =>{
    const response = await fetch(`${URL}${COHORT}users/me`,
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const result = await response.json()
    const data = result.data
    return data
  }

  export const modifyPost = async(token, post)=>{
    const response = fetch(`${URL}${COHORT}posts/${postsId}`,
    {
      method:"PATCH",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer TOKEN_STRING_HERE'

      } ,
      body: JSON.stringify({
        post:{
          title: "",
          description: "",
          price: "",
          location: "",
          willDeliver: null
        },
      })
      })
      const result = await response.json
      const token = result.data.token
      console.log(token)
      return token
    }

    export const DeletePost= async(token, postID)=>{
      const response = fetch(`${URL}${COHORT}posts/${postsID}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer TOKEN_STRING_HERE'
        }
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
    }