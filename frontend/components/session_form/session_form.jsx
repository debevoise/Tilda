import React from 'react';
import SessionErrorsIndex from './session_errors_index';
import { 
    validDay, 
    validEmail, 
    validPassword, 
    validYear,
    formatState } from '../../util/session_form_util'

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
        
        let submitState = formatState(this.state);
        this.props.processForm(submitState);
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
              <option value="01">
                January
              </option>
              <option value="02">
                Febuary
              </option>
              <option value="03">
                March
              </option>
              <option value="04">
                April
              </option>
              <option value="05">
                May
              </option>
              <option value="06">
                June
              </option>
              <option value="07">
                July
              </option>
              <option  value="08">
                August
              </option>
              <option value="09">
                September
              </option>
              <option value="10">
                October
              </option>
              <option  value="11">
                November
              </option>
              <option value="12">
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