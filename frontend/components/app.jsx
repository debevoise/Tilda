import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute } from '../util/route_util'

const App = () => {
    return (
      <div>
        <h3>Hello from app.jsx</h3>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>

        <AuthRoute exact path='/login' component={LoginFormContainer}/>
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>

      </div>
    );
}

export default App;