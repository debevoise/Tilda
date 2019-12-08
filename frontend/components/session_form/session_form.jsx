import React from 'react';
import SessionErrorsIndex from './session_errors_index';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" }
        // if (this.props.isSignup) this.state.username = "";
        this.closeModal = this.closeModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        }); 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => {
            this.resetFields();
        });
    }

    renderErrors() {
        const errorsList = this.props.errors.map((err, idx) => (
            <li key={idx}>{err}</li>
        ))
        
        return(
            <ul className='errors-list'>
                {errorsList}
            </ul>
        )
    }

    resetFields() {
        let emptyState = {};
        let fields = Object.keys(this.state);
        fields.forEach(field => (emptyState[field] = ""));
        this.setState(emptyState);
    }

    closeModal(e) {
        this.props.history.push("/");
        this.resetFields();
    }
    
    render() {
        let { isSignup, errors } = this.props;
        let usernameField = null;
        let prettyFormType = isSignup ? 'Sign Up' : 'Log In';

        if (isSignup) {
            usernameField = (
                <label>Username:
                    <input 
                        type="text"
                        onChange={this.update('username')}
                    />
                </label>
            )
        }

        return (
            <div className="session-form-modal" onClick={this.closeModal}>
                <form className="session-form"  onClick={(e) => e.stopPropagation()}>
                    <h2>{prettyFormType} to Tilda</h2>
                    <SessionErrorsIndex errors={errors}/>
                    {usernameField}
                    <label>Email:
                        <input type="text" onChange={this.update("email")} />
                    </label>
                    <label>Password:
                        <input type="password" onChange={this.update("password")} />
                    </label>
                    <button onClick={this.handleSubmit}>{prettyFormType}</button>
                </form>
            </div>
        );
    }
}