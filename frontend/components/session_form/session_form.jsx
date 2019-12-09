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

    renderGenderButtons() {
        const {gender} = this.state;
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

    renderBirthDateFields() {
        const { month, day, year } = this.state;
        return (
          <label>
            When were you born?
            <select onChange={this.update("month")}>
              <option value="">Month</option>
              <option selected={month === "January"} value="January">
                January
              </option>
              <option selected={month === "February"} value="Febuary">
                Febuary
              </option>
              <option selected={month === "March"} value="March">
                March
              </option>
              <option selected={month === "April"} value="April">
                April
              </option>
              <option selected={month === "May"} value="May">
                May
              </option>
              <option selected={month === "June"} value="June">
                June
              </option>
              <option selected={month === "July"} value="July">
                July
              </option>
              <option selected={month === "August"} value="August">
                August
              </option>
              <option selected={month === "September"} value="September">
                September
              </option>
              <option selected={month === "October"} value="October">
                October
              </option>
              <option selected={month === "November"} value="November">
                November
              </option>
              <option selected={month === "December"} value="December">
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
                <button>{prettyFormType}</button>
              </form>
            </section>
          </div>
        );
    }
}