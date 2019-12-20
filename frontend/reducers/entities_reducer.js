import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import musicReducer from "./music/music_reducer";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
    search: searchReducer,
    users: usersReducer,
    music: musicReducer
})

export default entitiesReducer; 