import { RECEIVE_ARTISTS } from "../../actions/music_actions";
import { combineReducers } from "redux";
import artistsReducer from "./artists_reducer";
import songsReducer from "./songs_reducer";
import albumsReducer from "./albums_reducer";
import playlistsReducer from "./playlists_reducer";

const musicReducer = combineReducers({
    artists: artistsReducer,
    albums: albumsReducer,
    songs: songsReducer,
    playlists: playlistsReducer
});

export default musicReducer;