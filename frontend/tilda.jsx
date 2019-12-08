import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

//TODO testing
import * as SessionApiUtil from './util/session_api_util'
import Root from './components/root';
window.login = SessionApiUtil.login
window.signup = SessionApiUtil.signup
window.logout = SessionApiUtil.logout

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const defaultState = {
        errors: { session: [] }
    }
    
    const store = configureStore(defaultState);
    
    //TODO testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
});
