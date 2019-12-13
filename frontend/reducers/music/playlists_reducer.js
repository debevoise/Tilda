import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST } from "../../actions/music_actions";

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return action.playlists;
        case RECEIVE_PLAYLIST:
            const newState = Object.assign({}, state);
            const { playlist } = action;
            newState[playlist.id] = playlist;
            return newState;
        default:
            return state;
    }
}

export default playlistsReducer;