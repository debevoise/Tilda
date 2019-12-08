import React from 'react';
import SessionErrorsIndex from './session_errors_index';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" }
        if (this.props.isSignup) {
            this.state.name = "";
            this.state.gender = "";
            this.state.birthDate = new Date();
        }
        
        this.closeModal = this.closeModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            }); 

        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => {
            this.resetFields();
        });
    }

    renderLoginFormFields() {
        let { email, password } = this.state;
        return (
            <>
                <label>Email:
                    <input type="text" onChange={this.update("email")} value={email}/>
                </label>
                <label>Password:
                    <input type="password" onChange={this.update("password")} value={password}/>
                </label>
            </>
        )
    }

    renderSignupFormFields() {
        let { email, password, name, birthDate, gender } = this.state;
        return (
          <>
            <label>What should we call you?
                <input type="text" onChange={this.update("name")} value={name}/>
            </label>
            <label>Email:
                <input type="text" onChange={this.update("email")} value={email}/>
            </label>
            <label>When were you born?
                <input type="date" onChange={this.update("date")} value={birthDate}/>
            </label>
            <label>Gender:
                <input type="radio" onClick={this.update("gender")} value="female"/>Female
                <input type="radio" onClick={this.update("gender")} value="male"/>Male
                <input type="radio" onClick={this.update("gender")} value="non-binary"/>Non-Binary
            </label>
            <label>Password:
                <input type="password" onChange={this.update("password")} value={password}/>
            </label>
          </>
        );
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
        let formFields = isSignup ? 
            this.renderSignupFormFields() : this.renderLoginFormFields();
        let prettyFormType = isSignup ? 'Sign Up' : 'Log In';


        return (
            <div className="session-form-modal" onClick={this.closeModal}>
                <form className="session-form"  onClick={(e) => e.stopPropagation()}>
                    <h2>{prettyFormType} to Tilda</h2>
                    <SessionErrorsIndex errors={errors}/>
                    { formFields }
                    <br/>
                    <button onClick={this.handleSubmit}>{prettyFormType}</button>
                </form>
            </div>
        );
    }
}