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
    let store;

    if (window.currentUser) {
        const loggedInState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id },
            errors: { session: [] }
        }; 

        store = configureStore(loggedInState);
        delete window.currentUser;
    } else {
        const defaultState = {
            errors: { session: [] }
        };

        store = configureStore(defaultState);
    }
    
    //TODO testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
});
