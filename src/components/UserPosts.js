import React from 'react';

//import './UserPosts.css';

const UserPosts = ({
  userPosts
}) => {
  return (
    <div>
        <h1>Posts</h1>
        <p>
            {userPosts}
            
        </p>


    </div>
  );
}

export default UserPosts;