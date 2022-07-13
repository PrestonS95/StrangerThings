import React, { useEffect, useState } from "react";
import { newPost } from "../api";

const NewPosts = ({ posts, setPosts }) => {
      const makePost = () =>{
          newPost()
      }
        return (
          <div class="actions">
            <h2>New Post</h2>
            <form onSubmit={handleSubmit}>
                  <label>Username</label>
                  <input id='username'  onChange={handleOnChange} placeholder="Your Username here" value={username} />
                  <label>Password</label>
                  <input id= 'password' onChange={handleOnChange} placeholder='Your Password Here' value={password} />
                  <button type="submit">Login</button>
              </form>
            </div>
        );
};

export default NewPosts;
