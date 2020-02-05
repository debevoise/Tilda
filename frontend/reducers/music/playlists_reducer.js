import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST } from "../../actions/music_actions";
import { RECEIVE_SEARCH } from "../../actions/search_actions";
import { RECEIVE_HOME } from "../../actions/home_actions";

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            const { playlists } = action;
            return Object.assign({}, state, playlists);
        case RECEIVE_PLAYLIST:
            const newState = Object.assign({}, state);
            const { playlist } = action.payload;
            newState[playlist.id] = playlist;
            return newState;
        case RECEIVE_HOME:
        case RECEIVE_SEARCH:
            const searchedPlaylists = action.payload.playlists
            return Object.assign({}, state, searchedPlaylists);
        default:
            return state;
    }
}

export default playlistsReducer;