import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logout }) => {
    const loggedIn = (typeof currentUser.id === 'number');
    
    const sessionLinks = (
      <div className="greeting">
        <Link className="login-link" to="/login">
          Login
        </Link>
        <Link className="signup-link"  to="/signup">
          Signup
        </Link>
      </div>
    );
    
    const welcome = (
        <div className='greeting'>
            <h2>
                Welcome, {currentUser.name}!
            </h2>
            <a onClick={logout}>Log Out</a>
        </div>
    )
    
    return loggedIn ? welcome : sessionLinks;
}

export default Greeting;