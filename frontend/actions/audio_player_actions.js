export const PLAY_SONG = 'PLAY_SONG'
export const PLAY_SONGS = 'PLAY_SONGS'
export const ADD_SONG_TO_QUEUE = 'ADD_SONG_TO_QUEUE'
export const CLEAR_QUEUE = 'CLEAR_QUEUE'
export const PAUSE_MUSIC = 'PAUSE_MUSIC'

export const playSong = song => ({
    type: PLAY_SONG,
    song
})

export const playSongs = songs => ({
    type: PLAY_SONGS,
    songs
})