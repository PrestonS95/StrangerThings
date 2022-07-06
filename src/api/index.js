import axios from 'axios';

const BASE = `https://strangers-things.herokuapp.com/api/`
const COHORT = `2206-FTB-ET-WEB-FT-A/`

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
  const registerUsername = event.target[0].value
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
    }).then(response => response.json())
      .then(result => {
        const data = result
        console.log(result);
        return data
      })
      .catch(console.error);
}
export async function getPosts() {
    try {
      const { data } = await axios.get(`${ api }posts`);
      return data;
      console.log(data)
    } catch (error) {
      throw error;
    }
  }
