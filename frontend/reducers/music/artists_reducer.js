import { RECEIVE_ARTISTS, RECEIVE_ARTIST, RECEIVE_ALBUM } from "../../actions/music_actions";
import { RECEIVE_SEARCH } from "../../actions/search_actions";
import { RECEIVE_HOME } from "../../actions/home_actions";

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);

    const { payload } = action;
    let artist;
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return Object.assign({}, state, action.artists);
        case RECEIVE_ARTIST:
            //TODO -- figure out what receive artist state looks like
            artist = payload.artist;
            newState[artist.id] = artist;
            return newState;
        case RECEIVE_ALBUM:
            artist = payload.artist;
            newState[artist.id] = artist;
            return newState;
        case RECEIVE_HOME:
        case RECEIVE_SEARCH: 
            return Object.assign({}, state, payload.artists)
        default:
            return state;
    }
}

export default artistsReducer;