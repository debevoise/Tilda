import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import musicReducer from "./music/music_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    music: musicReducer
})

export default entitiesReducer;