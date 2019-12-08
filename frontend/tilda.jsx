import React from 'react';
import ReactDOM from 'react-dom';

//TODO testing
import * as SessionApiUtil from './util/session_api_util'
window.login = SessionApiUtil.login
window.signup = SessionApiUtil.signup
window.logout = SessionApiUtil.logout

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let dummyHTML = <h3>Tilda React in Place</h3>;
    ReactDOM.render(dummyHTML, root);
});
