import React from 'react';
import { Link } from 'react-router-dom';

const ProtectedLinkModal = (props) => {
    
    
    return (
      <div className="protected-modal">
        <section className="signup-splash">
            <div>
                <h2>Get the most out of Tilda with a free account</h2>
                <ul>
                    <li>No credit card, ever</li>
                    <li>No credit card, ever</li>
                    <li>No credit card, ever</li>
                </ul>
                <Link to='/'></Link>
            </div> 
          <div className='modal-buttons'>
            <Link className="login-link" to="/login">
              Login
            </Link>
            <Link className="signup-link" to="/signup">
              Signup
            </Link>
          </div>
        </section>
      </div>
    );
}