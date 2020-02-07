import { RECEIVE_LIKES } from "../actions/like_actions";

const defaultState = {
    albums: {},
    artists: {},
    playlists: {},
    songs: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVE_LIKES:
            return action.likes;    
        default:
            return state;
    }
}