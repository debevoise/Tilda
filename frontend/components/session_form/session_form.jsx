import React from 'react';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" }
        if (this.props.isSignup) this.state.username = "";

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
            let emptyState = {};
            let fields = Object.keys(this.state);
            fields.forEach(field => emptyState[field] = '');
            this.setState(emptyState);
        });
    }

    renderErrors() {
        const errorsList = this.props.errors.map((err, idx) => (
            <li key='idx'>{err}</li>
        ))
        
        return(
            <ul class='errors-list'>
                {errorsList}
            </ul>
        )
    }
    
    render() {
        let { isSignup } = this.props;
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
            <form className="session-form-modal">
                <h2>{prettyFormType} to Tilda</h2>
                {usernameField}
                {this.renderErrors()}
                <label>
                    Email:
                    <input 
                        type="text" 
                        onChange={this.update("email")} 
                    />
                </label>
                <br/>
                <label>
                    Password:
                    <input 
                        type="password" 
                        onChange={this.update("password")} />
                </label>
                <br/>
                <button onClick={this.handleSubmit}>{prettyFormType}</button>
            </form>
        );
    }
}