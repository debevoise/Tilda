import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logout }) => {
    const loggedIn = (typeof currentUser.id === 'number');
    
    const sessionLinks = (
        <div className='greeting'>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </div>
    )
    
    const welcome = (
        <div className='greeting'>
            <h2>
                Welcome, {currentUser.name}!
            </h2>
            <button onClick={logout}>Log Out</button>
        </div>
    )
    
    return loggedIn ? welcome : sessionLinks;
}

export default Greeting;