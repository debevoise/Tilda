import { RECEIVE_ARTISTS, RECEIVE_ARTIST, RECEIVE_ALBUM } from "../../actions/music_actions";

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    const { artist } = action;
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            newState[artist.id] = artist;
            return newState;
        case RECEIVE_ALBUM:
            newState[artist.id] = artist;
            return newState;
        default:
            return state;
    }
}

export default artistsReducer;