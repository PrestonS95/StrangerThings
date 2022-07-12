import React ,{useState, useEffect} from 'react';
import { getPosts } from '../api'
import './Userposts.css';
import Header from './Header';
import ModifyPost from './ModifyPost';
import NewPosts from './NewPosts';
import button from './NewPosts'
// const resource =  getPosts()
 const UserPosts = ({userLogIn }) => {
    const [posts,setPosts]=useState([])
   
useEffect(() => {
    try {
      Promise.all([getPosts()]).then(
        ([posts]) => {
          setPosts(posts);
        }
      );
    } catch (error) {
      console.error(error, "something broke");
    }
  }, []);

  <ModifyPost posts={posts} setPosts={setPosts}/>
  
  return (
    <div className="Posts">
      <NewPosts posts={posts} setPosts={setPosts}/>
      {

        posts.map(posts=>{
          return(
            <div className='post'key={posts._id} style={{alignItems:'center',margin:'20px 60px',border:'1px solid black' ,padding:'10px'}}>
            <h3>{posts.title}</h3>
            <h4>{posts.author.username}</h4>
            <p>{posts.description}</p>
            <h3>{posts.price}</h3>
            
          </div>
          )

        })
      }
    </div>
  );
}
    
//     async function allPosts() {
       
//         console.log(resource)
//          const posts = await {resource}
//         ;
//         console.log(posts.data:posts)
        
//         return (
//           <ul>
//             {posts.map(post => (
//               <li key={post.id}>{post.text}</li>
//             ))}
//           </ul>
//         );
//       }
//   allPosts()  }
//     const [Posts, setPosts] = useState([])



export default UserPosts