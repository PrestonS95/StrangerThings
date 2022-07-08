import { useEffect } from "react"
import { //DeletePost, 
    getPosts } from "../api"


const ModifyPost = () =>{
    const [] = useState()

    const handleDelete = (event)=>{
        event.preventDefault
        const token = localStorage.getItem('token')
        DeletePost(token, event.target.id)
    }
    useEffect(()=>{
        async function getPosts(){
            if(!allPosts.length){
                const returnedPosts = await getAllPosts()
                setAllPosts(returnedPosts)
            }
        }
    }
    )



    return(
        <div>
            <button id={`${post.id}`}/>

        </div>
    )
}

export default ModifyPost