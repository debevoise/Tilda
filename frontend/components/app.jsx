import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util'

import NavBar from './navbar/navbar';
import ContentWindow from './content_window/content_window';
// import SessionModal from './session_form/session_modal';

import AudioControlBar from './media_player/audio_player_container';
// import AudioControlBar from './media_player/audio_control_bar';

const App = () => {
	const MainContent = () => (
		<>
			<NavBar />
			<ContentWindow />
			<AudioControlBar/>
		</>
	)


    return (
		<>
			<Switch>
				<AuthRoute
					exact
					path="/login"
					component={LoginFormContainer}
				/>
				<AuthRoute
					exact
					path="/signup"
					component={SignupFormContainer}
				/>
				<Route path='/' component={MainContent}/>
			</Switch>

		</>
    );
}

export default App;