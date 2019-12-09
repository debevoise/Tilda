import React from 'react';
import SessionErrorsIndex from './session_errors_index';
import { Redirect } from 'react-router-dom'

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" }
        if (this.props.isSignup) {
            this.state.name = "";
            this.state.gender = "";
            this.state.birth_date = '';
        }
        
        this.closeModal = this.closeModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            }); 

            console.log(this.state);
        }
    }

    updateDate(field) {

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    renderLoginFormFields() {
        let { email, password } = this.state;
        return (
          <>
            <input
                type="text"
                onChange={this.update("email")}
                value={email}
                placeholder="Email"
            />
            <input
                type="password"
                onChange={this.update("password")}
                value={password}
                placeholder="Password"
            />
          </>
        );
    }

    renderGenderButtons(gender) {
        return (
          <div className="gender-options">
            <label>
              Female
              <input
                className="radio-input"
                type="radio"
                value="female"
                onChange={this.update("gender")}
                checked={gender === "female"}
              />
            </label>
            <label>
              Male
              <input
                className="radio-input"
                type="radio"
                value="male"
                onChange={this.update("gender")}
                checked={gender === "male"}
              />
            </label>
            <label>
              Non-binary
              <input
                className="radio-input"
                type="radio"
                value="non-binary"
                onChange={this.update("gender")}
                checked={gender === "non-binary"}
              />
            </label>
          </div>
        );
    }

    renderSignupFormFields() {
        let { email, password, name, birthDate, gender } = this.state;
        return (
          <>
            <input
              type="text"
              onChange={this.update("name")}
              placeholder="What should we call you?"
              value={name}
            />
            <input
              type="text"
              onChange={this.update("email")}
              placeholder="Email"
              value={email}
            />
            <input
              type="date"
              onChange={this.update("birth_date")}
              placeholder="When were you born?"
              value={birthDate}
            />
            {this.renderGenderButtons(gender)}
            <input
                type="password"
                onChange={this.update("password")}
                placeholder='Password'
                value={password}
            />

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

    
    
    render() {
        let { isSignup, errors } = this.props;
        let formFields = isSignup ? 
            this.renderSignupFormFields() : this.renderLoginFormFields();
        let prettyFormType = isSignup ? 'Sign Up' : 'Log In';


        return (
            <form className="session-form"  onClick={(e) => e.stopPropagation()}>
                <h2>{prettyFormType} to Tilda</h2>
                <SessionErrorsIndex errors={errors}/>
                { formFields }
                <br/>
                <button onClick={this.handleSubmit}>{prettyFormType}</button>
            </form>
        );
    }
}