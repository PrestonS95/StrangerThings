import React ,{useState, useEffect} from 'react';
import { getPosts } from '../api'

import './Userposts.css';
// const resource =  getPosts()
 const UserPosts = () => {
    const [posts,setPosts]=useState([])
//   useEffect(() => {
//     const init=async()=>{
//     const response=await getPosts()
//     let result = response.data.posts
//     console.log(response,'responses', result);
//     setPosts(result) }
    
//   }, [])
//   useEffect(() => {
      
  
//     init()
//     console.log(posts)
//   }, [posts])
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
  
  
  return (
    <div className="Posts">
      {
        posts.map(posts=>{
          return(
            <div className='post'key={posts._id} style={{alignItems:'center',margin:'20px 60px'}}>
            <h3>{posts.title}</h3>
            <h4>{posts.author.username}</h4>
            <p>{posts.description}</p>
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

//     getPosts()
//     .then((posts) => {
//         setPosts(Posts)
//         console.log(posts, Posts)
        
//     }).catch((err) => {
//     });
//     console.log( Posts,setPosts)
        
//   return (<ul>
//     {Posts.data.posts.map(post => (
//       <li key={post.id}>{post.text}</li>
//     ))}
//   </ul>)}
        
//         <div className="user-posts">
//       <h2>Posts By { `${Posts}` }</h2>
//       {Posts.map(({ id, title, description}) => (
//         <div key={ id } className="post">
//           <h3>{ title }</h3>
//           <p>{ description }</p>
//         </div>
//       ))}
//     </div>
//   );
// }

export default UserPosts