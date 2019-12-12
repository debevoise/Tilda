import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({ currentUser, logout }) => {
    const loggedIn = (typeof currentUser.id === 'number');
    
    const sessionLinks = (
		<div className="greeting">
			<Link className="signup-link" to="/signup">
				Sign up
			</Link>
			<Link className="login-link" to="/login">
				Log in
			</Link>

      	</div>
    );
    
    const welcome = (
        <div className='greeting'>
			<div className='profile-icon'>
				<i className="material-icons">person</i>
				<span>{currentUser.name}</span>
			</div>

            <a className='logout-greeting' onClick={logout}>Log Out</a>
        </div>
    )
    
    return loggedIn ? welcome : sessionLinks;
}

export default Greeting;