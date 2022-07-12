import { useEffect } from "react"
import { DeletePost, 
    getPosts } from "../api"
import UserPosts from "./UserPosts"


const ModifyPost = ({posts, setPosts}) =>{
    // const [posts, setPosts] = useState()

    const handleDelete = (event)=>{
        event.preventDefault
        const token = localStorage.getItem('token')
        DeletePost(token, event.target.id)
    }
    useEffect(()=>{
        async function getAllPosts(){
            if(!posts.length){
                const returnedPosts = await getPosts()
                setPosts(returnedPosts)
            }
        }getAllPosts()
    }
    )




    return(
        <div>
            <button id={`${posts.id}`}/>

        </div>
    )
}

export default ModifyPost