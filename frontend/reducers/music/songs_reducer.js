import { RECEIVE_SONGS, RECEIVE_PLAYLIST, RECEIVE_ALBUM, RECEIVE_ARTIST } from "../../actions/music_actions";
import { RECEIVE_SEARCH } from "../../actions/search_actions";

//TODO implement receive playlist, extract playlist songs
// case RECEIVE_SONG:
// newState = Object.assign({}, state);
// let { song } = action
// newState[]

const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONGS:
            return Object.assign({}, state, action.songs);
        case RECEIVE_ALBUM:
            return Object.assign({}, state, action.payload.songs);
        case RECEIVE_PLAYLIST:
            return Object.assign({}, state, action.payload.songs);
        case RECEIVE_SEARCH:
            return Object.assign({}, state, action.payload.songs);
        case RECEIVE_ARTIST:
            return Object.assign({}, state, action.payload.songs)
        default:
            return state;
    }
}

export default songsReducer;