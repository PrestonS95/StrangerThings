import axios from 'axios';

const BASE = `https://strangers-things.herokuapp.com/api/`
const COHORT = `2206-FTB-ET-WEB-FT-A/`
const URL = `${BASE}${COHORT}`

export async function registerPerson(event){
    console.log(event.target.value)
    console.log(`${BASE}${COHORT}`)
    const registerUsername = event.target[0].value
    const registerPassword = event.target[1].value

    const response = await fetch(`${BASE}${COHORT}users/register`,
    
    console.log(response),
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
    const result = await response.json
    const token = result.data.token
    console.log(token)
    localStorage.setItem("token", token)
    const tokenFromStorage= localStorage.getItem("token")
    console.log(tokenFromStorage)
}

export async function loginUser(event){
  let registerUsername = event.target[0].value
  const registerPassword = event.target[1].value

  const response = await fetch(`${BASE}${COHORT}users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: registerUsername,
          password: registerPassword

        }
      })
    },console.log(response)).then(response => response.json())
      .then(result => {
        const data = result
        console.log(result, data);
        return data
      })
      .catch(console.error);
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