import React, {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom'

const Header = ({}) => {
    const [userLogIn, setUserLogIn] = useState(true);
    return ( 
<header>
      <h1>Welcome To Stranger's Things</h1>
      
          {userLogIn
          ? <> 
              <Link to="/posts" activeClassName="current">POSTS</Link>
              <Link to="/profile" activeClassName="current">PROFILE</Link >
              <Link to="/">LOG OUT</Link>
            </>
          : <>

              {/* <select onChange={ handleSelectChange }>{
                userList.map(user => (
                  <option key={ user.id } value={ user.id }>
                    { user.username }
                  </option>
                ))
              }</select> */}
              <Link to="/posts" activeClassName="current">POSTS</Link>
              <Link to="/profile" activeClassName="current">PROFILE</Link >
              <Link to="/">LOG IN</Link>
              </>
}
    </header>


    )

}
export default Header
