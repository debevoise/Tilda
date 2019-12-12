import { RECEIVE_SONGS, RECEIVE_PLAYLIST, RECEIVE_ALBUM } from "../../actions/music_actions";

//TODO implement receive playlist, extract playlist songs
// case RECEIVE_SONG:
// newState = Object.assign({}, state);
// let { song } = action
// newState[]

const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState;
    switch (action.type) {
        case RECEIVE_SONGS:
            return action;
        case RECEIVE_ALBUM:
            return Object.assign({}, state, action.songs);
        case RECEIVE_PLAYLIST:
            return Object.assign({}, state, action.songs)
        default:
            return state;
    }
}

export default songsReducer;