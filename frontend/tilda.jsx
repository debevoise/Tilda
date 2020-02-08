import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

//TODO testing
// import * as SessionApiUtil from './util/session_api_util'
// import * as MusicApiUtil from './util/music_api_util'

import { like } from './actions/like_actions';
// window.fetchLikedSongs = MusicApiUtil.fetchLikedSongsAjax;
// window.fetchLikedAlbums = MusicApiUtil.fetchLikedAlbumsAjax;
// window.fetchLikedArtists = MusicApiUtil.fetchLikedArtistsAjax;



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
        delete window.currentUser; // Comment out for current user debugging
    } else {
        const defaultState = {
            errors: { session: [] }
        };

        store = configureStore(defaultState);
    }
    
    //TODO testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.like = like;



    ReactDOM.render(<Root store={store} />, root);
});
