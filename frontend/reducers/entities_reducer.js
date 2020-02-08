import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import musicReducer from "./music/music_reducer";
import searchReducer from "./search_reducer";
import homeReducer from "./home_reducer";
// import likesReducer from "./likes_reducer";

const entitiesReducer = combineReducers({
    search: searchReducer,
    home: homeReducer,
    users: usersReducer,
    music: musicReducer
})

export default entitiesReducer; 