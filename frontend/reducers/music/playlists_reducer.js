import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST } from "../../actions/music_actions";

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
        default:
            return state;
    }
}

export default playlistsReducer;