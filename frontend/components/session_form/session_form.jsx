import React from 'react';
import SessionErrorsIndex from './session_errors_index';
import { 
	isValidField,
    formatState } from '../../util/session_form_util';
import { Link } from 'react-router-dom';
import FormError from './form_error';
import TildaLogo from './tildalogo';
import { EmailTakenError } from './error_util';


export default class SessionForm extends React.Component {
    constructor(props) {
		super(props);
        this.state = { email: "", password: "", fieldErrors: {} };
        if (this.props.isSignup) {
            this.state.name = "";
            this.state.gender = "";
            this.state.year = '';
            this.state.month = '';
            this.state.day = '';
        }

        this.handleSubmit = this.handleSubmit.bind(this);
		this.loginGuest = this.loginGuest.bind(this)
	}
	
	componentWillUnmount() {
		this.props.clearSessionErrors()
	}

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            }); 
        }
	  }
	
	validate(field) {
		return e => {
			const { fieldErrors } = this.state
			fieldErrors[field] = isValidField(field, e.currentTarget.value);

			this.setState({
				fieldErrors
			})
		}
	}

	validateAllFields() {
		const signupFields = ['day', 'month', 'year', 'name', 'email', 'gender', 'password'];
		const { fieldErrors } = this.state
		signupFields.forEach(field => {
			let value = isValidField(field, this.state[field])
			fieldErrors[field] = value;
		})
		this.setState({ fieldErrors });
	}

	errorClass(field) {
		const fieldValue = this.state.fieldErrors[field];
		
		if (typeof fieldValue === 'boolean' && !fieldValue) {
			return ' error';
		} else {
			return '';
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		if (this.props.isSignup) {
			this.validateAllFields();
			const errorsArray = Object.values(this.state.fieldErrors);
			let anyErrors = false;
			errorsArray.forEach(field => {
				if (!field) anyErrors = true;
			});
			if (anyErrors) return;
		}
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
				onBlur={this.validate("email")}
                onChange={this.update("email")}
                value={email}
                placeholder="Email"
                />
            </li>

            <li>
            <input
				type="password"
				onBlur={this.validate("password")}
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
          <li>
            <div className="gender-options">
              <label>
                Female
                <input
                  className="radio-input"
                  type="radio"
                  value="female"
                  onBlur={this.validate("gender")}
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
                  onBlur={this.validate("gender")}
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
                  onBlur={this.validate("gender")}
                  onChange={this.update("gender")}
                  checked={gender === "non-binary"}
                />
              </label>
            </div>
            <FormError field="gender" state={this.state} />
          </li>
        );
    }

    renderBirthDateFields() {
		const { month, day, year } = this.state;
		const monthError = this.errorClass('month')
        return (
			<li>
				<div className="birthdate-block">
				<div>Date of birth</div>
				<div className={"birthdate-input" }>
					<select
					className={"month-select" + this.errorClass('month')}
					
					value={month}
					onChange={this.update("month")}
					onBlur={this.validate("month")}
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
						className={this.errorClass('day')}
						onChange={this.update("day")}
						onBlur={this.validate("day")}
						placeholder="Day"
						value={day}
					/>
					<input
						type="number"
						className={this.errorClass('year')}
						onChange={this.update("year")}
						onBlur={this.validate("year")}
						placeholder="Year"
						value={year}
					/>
				</div>
				<FormError field="month" state={this.state} />
				<FormError field="day" state={this.state} />
				<FormError field="year" state={this.state} />
				</div>
			</li>
        );
    }

    renderHeader (isSignup) {
		let headerText = isSignup ? 
			'Sign up to Tilda with your Email Address' : 'To continue, log in to Tilda';
		if (!isSignup) return <h2>{headerText}</h2>;
		
		return (
			<>  
				{this.renderGuestLogin()}
				
				<h2 className='signup-header'>{headerText}</h2>

			</>
		)
    }

    renderSignupFormFields() {
		let { email, password, name, gender } = this.state;
		let emailError = () => {
			const error = this.errorClass('email')
			if (error.length > 0) return error;
			if (this.props.errors.includes('Email has already been taken')) return ' error';
			return '';
		} 
        return (
          <>
            <li>
              <input
				type="text"
				className={this.errorClass('name')}
                onChange={this.update("name")}
                onBlur={this.validate("name")}
                placeholder="What should we call you?"
                value={name}
              />
              <FormError field="name" state={this.state} />
              <EmailTakenError errors={this.props.errors}/>
            </li>
            <li>
              <input
				type="text"
				className={emailError()}
                onChange={this.update("email")}
                onBlur={this.validate("email")}
                placeholder="Email"
                value={email}
              />
              <FormError field="email" state={this.state} />
            </li>
            {this.renderBirthDateFields()}
            {this.renderGenderButtons()}
            <li>
              <input
				type="password"
				className={this.errorClass('password')}
                onChange={this.update("password")}
                onBlur={this.validate("password")}
                placeholder="Password"
                value={password}
              />
              <FormError field="password" state={this.state} />
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
              <footer className="login-instead">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" onClick={this.props.clearSessionErrors}>
                    Log in
                  </Link>
                </p>
              </footer>
            );
        } else {
            return (
              <footer className="signup-instead">
                <h2>Don't have an account?</h2>
                <Link onClick={this.props.clearSessionErrors} to="/signup">
                  <button>Sign up to Tilda</button>
					
                </Link>
				{this.renderGuestLogin()}
              </footer>
            );
        }
	}
	
	loginGuest() {
		return e => {
			e.preventDefault();
			this.props.signInAsGuest();
		}
	}

	renderGuestLogin() {
		return (
			<button className='guest-login' onClick={this.loginGuest()}>Log in as guest</button>
		)
	}


    render() {
        let { isSignup, errors } = this.props;
        let formFields = isSignup ? 
            this.renderSignupFormFields() : this.renderLoginFormFields();
        let prettyFormType = isSignup ? 'Sign Up' : 'Log In';
		let policy = isSignup ? this.renderPolicy() : null;
		let errorsList = !isSignup ? <SessionErrorsIndex errors={errors} /> : null;
        return (
          <div className="session-form-modal">
            <h1 className="session-form-header">
              <TildaLogo />
            </h1>

            <form className="session-form" onSubmit={this.handleSubmit}>
              {this.renderHeader(isSignup)}
              {errorsList}
              {formFields}
              {policy}
              <button className="submit-button">{prettyFormType}</button>
            </form>
            {this.renderInsteadOption(isSignup)}
          </div>
        );
    }
}