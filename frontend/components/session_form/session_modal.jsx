import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const SessionModal = (props) => {
    const closeModal = (e) => {
        e.preventDefault();
        this.context.router.push("/sample");
    }

    const { formType } = props;
    const form = (formType === 'login') ? <LoginFormContainer/> : <SignupFormContainer/>
    return (
        <section className="session-form-modal" onClick={closeModal}>
            <h2></h2>
            {form}
        </section>
    )
}

export default SessionModal;