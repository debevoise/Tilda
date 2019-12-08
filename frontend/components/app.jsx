import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute } from '../util/route_util'
import GreetingContainer from './greeting/greeting_container';

const App = () => {
    return (
      <div>
        <h3>Hello from app.jsx</h3>
        
        <GreetingContainer />
        <AuthRoute exact path='/login' component={LoginFormContainer}/>
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>

      </div>
    );
}

export default App;