import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            let nextState = Object.assign({}, state);
            let { user } = action;
            nextState[user.id] = user;
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;