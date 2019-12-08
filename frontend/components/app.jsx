import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute } from '../util/route_util'

import NavBar from './navbar/navbar';

const App = () => {

    return (
        <>
            <main>
                <NavBar />    
                
                <AuthRoute exact path='/login' component={LoginFormContainer}/>
                <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            </main>
            <footer>
                Media player
            </footer>
        </>
    );
}

export default App;