import React from 'react';
import SessionErrorsIndex from './session_errors_index';
import { Redirect } from 'react-router-dom'

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
        if (this.props.isSignup) {
            this.state.name = "";
            this.state.gender = "";
            this.state.year = '';
            this.state.month = '';
            this.state.day = '';
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            }); 
            //TODO
            console.log(this.state)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    renderLoginFormFields() {
        let { email, password } = this.state;
        return (
          <>
          <li>

            <input
                type="text"
                onChange={this.update("email")}
                value={email}
                placeholder="Email"
                />
            </li>
            <li>

            <input
                type="password"
                onChange={this.update("password")}
                value={password}
                placeholder="Password"
                />
            </li>
          </>
        );
    }

    renderGenderButtons() {
        const {gender} = this.state;
        return (
          <li className="gender-options">
              Please select your gender
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
          </li>
        );
    }

    renderBirthDateFields() {
        const { month, day, year } = this.state;
        return (
          <li>
          <label>
            When were you born?
            <select className='month-select' value={this.state.month} onChange={this.update("month")}>
              <option value="">Month</option>
              <option value="January">
                January
              </option>
              <option value="Febuary">
                Febuary
              </option>
              <option value="March">
                March
              </option>
              <option value="April">
                April
              </option>
              <option value="May">
                May
              </option>
              <option value="June">
                June
              </option>
              <option value="July">
                July
              </option>
              <option  value="August">
                August
              </option>
              <option value="September">
                September
              </option>
              <option value="October">
                October
              </option>
              <option  value="November">
                November
              </option>
              <option value="December">
                December
              </option>
            </select>
            <input
              type="number"
              onChange={this.update("day")}
              placeholder="Day"
              value={day}
              />
            <input
              type="number"
              onChange={this.update("year")}
              placeholder="Year"
              value={year}
              />
          </label>
          </li>
        );
    }

    renderSignupFormFields() {
        let { email, password, name, gender } = this.state;
        return (
            <>
            <li>

                <input
                type="text"
                onChange={this.update("name")}
                placeholder="What should we call you?"
                value={name}
                />
            </li>
            <li>

                <input
                type="text"
                onChange={this.update("email")}
                placeholder="Email"
                value={email}
                />
            </li>
            {this.renderBirthDateFields()}
            {this.renderGenderButtons()}
            <li>
                <input
                    type="password"
                    onChange={this.update("password")}
                    placeholder='Password'
                    value={password}
                    />

            </li>
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

    // resetFields() {
    //     let emptyState = {};
    //     let fields = Object.keys(this.state);
    //     fields.forEach(field => (emptyState[field] = ""));
    //     this.setState(emptyState);
    // }


    render() {
        let { isSignup, errors } = this.props;
        let formFields = isSignup ? 
            this.renderSignupFormFields() : this.renderLoginFormFields();
        let prettyFormType = isSignup ? 'Sign Up' : 'Log In';


        return (
          <div className="session-form-modal">
            <section>
              <h1 className="session-form-header">Tilda</h1>
              <form className="session-form" onSubmit={this.handleSubmit}>
                <h2>{prettyFormType} to Tilda</h2>
                <SessionErrorsIndex errors={errors} />
                {formFields}
                <br />
                <button className="submit-button">{prettyFormType}</button>
              </form>
            </section>
          </div>
        );
    }
}