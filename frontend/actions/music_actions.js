import { 
    fetchLikedArtistsAjax, 
    fetchLikedAlbumsAjax, 
    fetchLikedSongsAjax, 
    fetchLikedPlaylistsAjax, 
    like, 
    unlike
} from '../util/music_api_util'

export const RECEIVE_MUSIC_ERRORS = 'RECEIVE_MUSIC_ERRORS'

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS"
export const RECEIVE_ARTIST = "RECEIVE_ARTIST"
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS"
export const RECEIVE_ALBUM = "RECEIVE_ALBUM"
export const RECEIVE_SONGS = "RECEIVE_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"

export const receiveMusicErrors = errors => ({
    type: RECEIVE_MUSIC_ERRORS,
    errors
})

export const receiveArtists = artists => ({
    type: RECEIVE_ARTISTS,
    artists
})

export const receiveArtist = artist => ({
    type: RECEIVE_ARTIST,
    artist
})

export const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
})

export const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
})

export const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
})

export const receiveSong = song  => ({
    type: RECEIVE_SONG,
    song
})

//THUNK ACTION CREATORS
export const fetchLikedArtists = () => dispatch => {
    return fetchLikedArtistsAjax().then(
        artists => dispatch(receiveArtists(artists)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    )
}

export const fetchLikedAlbums = () => dispatch => {
    return fetchLikedAlbumsAjax().then(
        albums => dispatch(receiveAlbums(albums)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    )
}

export const fetchLikedSongs = () => dispatch => {
    return fetchLikedSongsAjax().then(
        songs => dispatch(receiveSongs(songs)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    )
}