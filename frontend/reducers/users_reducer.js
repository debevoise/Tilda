import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PLAYLIST } from "../actions/music_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            let { user } = action;
            nextState[user.id] = user;
            return nextState;
        case RECEIVE_PLAYLIST:
            let { playlist } = action.payload;
            let { authorId, id } = playlist; 
            if (nextState[authorId] && !nextState[authorId].authored_playlists.includes(id)) {
                nextState[authorId].authored_playlists.push(id);
            }
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;