
import { PLAY_SONG, PLAY_SONGS, PAUSE_MUSIC, TOGGLE_PLAY_PAUSE, PLAY_NEXT_SONG, PLAY_COLLECTION_FROM_IDX } from "../actions/audio_player_actions";

const defaultState = Object.freeze({
    actionId: 0,
    active: false,
    currentSong: {},
    playerQueue: [],
    userQueue: [],
    history: []
})


const audioPlayerReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        // case PLAY_SONG:
        //     newState.active = true;
        //     newState.currentSong = action.song
        //     newState.changed = true
        //     return newState;
        // case PLAY_NEXT_SONG:
        //     newState.actionId = newState.actionId + 1;
        //     if (newState.currentSong.id) newState.history.push(currentSong);
        //     let nextSong;
        //     if (newState.userQueue.length !== 0) {
        //         nextSong = newState.userQueue.shift()
        //     } else if (newState.playerQueue.length !== 0) {
        //         nextSong = newState.playerQueue.shift()
        //     } else {
        //         newState.active = false;
        //         nextSong = {};
        //     }
        //     newState.currentSong = nextSong;
        //     return newState;
        case PAUSE_MUSIC:
            newState.actionId = newState.actionId + 1;
            newState.active = false;
            return newState;
        // case PLAY_SONGS:
        //     const songs = Object.assign([], action.songs);
        //     newState.active = true;
        //     newState.currentSong = songs.shift();
        //     newState.userQueue = songs;
        //     return newState;
        case PLAY_COLLECTION_FROM_IDX: 
            newState.actionId = newState.actionId + 1;
            const { songs, idx } = action;
            newState.currentSong = songs[idx];
            newState.history = songs.slice(0, idx)
            newState.playerQueue = songs.slice(idx + 1)
            return newState;
        case TOGGLE_PLAY_PAUSE:
            newState.actionId = newState.actionId + 1;
            newState.active = !state.active;
            return newState;
        default:
            return state;
    }
}

export default audioPlayerReducer;