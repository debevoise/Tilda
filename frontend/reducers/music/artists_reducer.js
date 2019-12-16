import { RECEIVE_ARTISTS, RECEIVE_ARTIST, RECEIVE_ALBUM } from "../../actions/music_actions";

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);

    const { payload } = action;
    let artist;
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            //TODO -- figure out what receive artist state looks like
            artist = payload.artist;
            newState[artist.id] = artist;
            return newState;
        case RECEIVE_ALBUM:
            artist = payload.artist;
            newState[artist.id] = artist;
            return newState;
        default:
            return state;
    }
}

export default artistsReducer;