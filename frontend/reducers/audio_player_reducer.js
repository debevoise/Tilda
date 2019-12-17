import { PLAY_SONG, PLAY_SONGS } from "../actions/audio_player_actions";

const defaultState = Object.freeze({
    active: false,
    currentSong: null,
    playerQueue: [],
    userQueue: []
})


const audioPlayerReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case PLAY_SONG:
            newState.active = true;
            newState.currentSong = action.song
            return newState;
        case PLAY_SONGS:
            const songs = Object.assign([], action.songs);
            newState.active = true;
            newState.currentSong = songs.shift();
            newState.userQueue = songs;
            return newState;
        default:
            return state;
    }
}

export default audioPlayerReducer;