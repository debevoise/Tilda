export const PLAY_SONG = 'PLAY_SONG'
export const PLAY_SONGS = 'PLAY_SONGS'
export const PLAY_COLLECTION_FROM_IDX = 'PLAY_COLLECTION_FROM_IDX'
export const ADD_SONG_TO_QUEUE = 'ADD_SONG_TO_QUEUE'
export const CLEAR_QUEUE = 'CLEAR_QUEUE'
export const PAUSE_MUSIC = 'PAUSE_MUSIC'
export const PLAY_NEXT_SONG = 'PLAY_NEXT_SONG'
export const PLAY_PREVIOUS_SONG = 'PLAY_PREVIOUS_SONG'
export const TOGGLE_PLAY_PAUSE = 'TOGGLE_PLAY_PAUSE'

export const playSong = song => ({
    type: PLAY_SONG,
    song
})

export const pauseMusic = () => ({
    type: PAUSE_MUSIC
})

export const togglePlayPause = () => ({
    type: TOGGLE_PLAY_PAUSE
})

export const playSongs = songs => ({
    type: PLAY_SONGS,
    songs
})

export const playNextSong = () => ({
    type: PLAY_NEXT_SONG
})

export const playCollectionFromIdx = (songs, idx = 0) => ({
    type: PLAY_COLLECTION_FROM_IDX,
    songs,
    idx
})