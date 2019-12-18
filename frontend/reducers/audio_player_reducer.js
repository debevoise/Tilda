import { PLAY_SONG, PLAY_SONGS, PAUSE_MUSIC, TOGGLE_PLAY_PAUSE, PLAY_NEXT_SONG, PLAY_COLLECTION_FROM_IDX } from "../actions/audio_player_actions";

const defaultState = Object.freeze({
    active: false,
    currentSong: {},
    currentTime: 0,
    playerQueue: [],
    history: [],
    userQueue: [],
    changed: false,
    volume: 100
})


const audioPlayerReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case PLAY_SONG:
            newState.active = true;
            newState.currentSong = action.song
            newState.changed = true
            return newState;
        case PLAY_NEXT_SONG:
        
            if (newState.currentSong.id) newState.history.push(currentSong);
            let nextSong;
            if (newState.userQueue.length !== 0) {
                nextSong = newState.userQueue.shift()
            } else if (newState.playerQueue.length !== 0) {
                nextSong = newState.playerQueue.shift()
            } else {
                newState.active = false;
                nextSong = {};
            }
            newState.currentSong = nextSong;
            return newState;
        case PAUSE_MUSIC:
            newState.active = false;
            return newState;
        // case PLAY_SONGS:
        //     const songs = Object.assign([], action.songs);
        //     newState.active = true;
        //     newState.currentSong = songs.shift();
        //     newState.userQueue = songs;
        //     return newState;
        case PLAY_COLLECTION_FROM_IDX: 
            const { songs, idx } = action;
            newState.currentSong = songs[idx];
            newState.history = songs.slice(0, idx)
            newState.playerQueue = songs.slice(idx + 1)
            return newState;
        case TOGGLE_PLAY_PAUSE:
            newState.active = !state.active;
            return newState;
        default:
            return state;
    }
}

export default audioPlayerReducer;