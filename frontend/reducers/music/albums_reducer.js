import { RECEIVE_ALBUMS, RECEIVE_ARTIST, RECEIVE_ALBUM } from "../../actions/music_actions";
import { RECEIVE_SEARCH } from "../../actions/search_actions";

const albumsReducer = (state = {}, action) => {
    let newState;

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUMS:
            //TODO does this work?
            
            return Object.assign({}, action.albums, state);
        case RECEIVE_ALBUM:
            const {album} = action.payload;
            newState = Object.assign({}, state);
            newState[album.id] = album;
            return newState;
        case RECEIVE_ARTIST:
            //TODO check format of state( payload etc )
            newState = Object.assign({}, action.payload.albums, state);
            return newState;
        case RECEIVE_SEARCH:
            let {albums} = action.payload;
            return Object.assign({}, albums, state);
        default:
            return state;
    }
}

export default albumsReducer;