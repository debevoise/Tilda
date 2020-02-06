import { RECEIVE_HOME } from "../actions/home_actions";

const defaultState = {
    // artistIds: [],
    // albumIds: [],
    // playlistIds: []
}

Object.freeze(defaultState);

export default (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_HOME:
            return action.payload.home    
        default:
            return state;
    }
}