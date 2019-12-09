import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute } from '../util/route_util'

import NavBar from './navbar/navbar';
import ContentWindow from './content_window/content_window';
import MediaPlayer from './media_player/media_player';
import SessionModal from './session_form/session_modal';

const App = () => {

    return (
      <>
        <main>
          <NavBar />
          <ContentWindow />

          <AuthRoute
            exact
            path="/login"
            component={() => <SessionModal formType="login" />}
          />
          <AuthRoute
            exact
            path="/signup"
            component={() => <SessionModal formType="signup" />}
          />
        </main>
        <MediaPlayer />
      </>
    );
}

export default App;