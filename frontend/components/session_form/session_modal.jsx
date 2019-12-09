import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { Link } from 'react-router-dom'

const SessionModal = (props) => {
    const closeModal = (e) => {
        e.preventDefault();
        
    }

    const { formType } = props;
    const form = (formType === 'login') ? <LoginFormContainer/> : <SignupFormContainer/>
    return (
      <Link to='/'>
        <section className="session-form-modal" >
          <h2></h2>
          {form}
        </section>
      </Link>
    );
}

export default SessionModal;