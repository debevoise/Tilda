import React from 'react';
import SessionErrorsIndex from './session_errors_index';
import { 
    validateSignup,
    validateLogin,
    formatState } from '../../util/session_form_util';
import { Link } from 'react-router-dom';

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
            <div className='birthdate-block'>

            <div >Date of birth</div>
            <div className="birthdate-input">
              <select
                className="month-select"
                value={month}
                onChange={this.update("month")}
                >
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">Febuary</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
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
            </div>
            </div>
          </li>
        );
    }

    renderHeader (isSignup) {
      let headerText = isSignup ? 
        'Sign up to Tilda with your Email Address' : 'To continue, log in to Tilda';
      return (
        <h2>{headerText}</h2>
      )
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

    renderPolicy() {
        return (
          <div className="policy">
            <p>
              By clicking on Sign up, you agree to Tilda's <a>Terms and Conditions of Use</a>.
            </p>
            <p>
              To learn more about how Tilda collects, uses, shares and
              protects your personal data please read Tilda's <a>Privacy Policy</a>.
            </p>
          </div>
        );
    }

    renderInsteadOption(isSignup) {
        if (isSignup) {
            return (
                <footer className='login-instead'>
                    <p>Already have an account? <Link to='/login'>Log in</Link></p>
                </footer>
            )
        } else {
            return (
              <footer className="signup-instead">
                <p>
                  Don't have an account?
                </p>
                <Link to='/signup'>
                    
                    <button>Sign up for Tilda</button>
                </Link>
              </footer>
            );
        }
    }


    render() {
        let { isSignup, errors } = this.props;
        let formFields = isSignup ? 
            this.renderSignupFormFields() : this.renderLoginFormFields();
        let prettyFormType = isSignup ? 'Sign Up' : 'Log In';
        let policy = isSignup ? this.renderPolicy() : null;
        return (
          <div className="session-form-modal">
            
              <h1 className="session-form-header">Tilda~</h1>
              <form className="session-form" onSubmit={this.handleSubmit}>
                {this.renderHeader(isSignup)}
                <SessionErrorsIndex errors={errors} />
                {formFields}
                {policy}
                <button className="submit-button">{prettyFormType}</button>
              </form>
                {this.renderInsteadOption(isSignup)}
          </div>
        );
    }
}