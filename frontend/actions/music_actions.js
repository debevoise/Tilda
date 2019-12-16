import { 
    fetchLikedArtistsAjax, 
    fetchLikedAlbumsAjax, 
    fetchLikedSongsAjax, 
    fetchLikedPlaylistsAjax, 
    fetchAuthoredPlaylistsAjax,
    fetchAlbumAjax,
    fetchPlaylistAjax,
    fetchArtistAjax,
    createPlaylistAjax,
    removeSongFromPlaylistAjax,
    addSongToPlaylistAjax
} from '../util/music_api_util'



export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS"
export const RECEIVE_ARTIST = "RECEIVE_ARTIST"
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS"
export const RECEIVE_ALBUM = "RECEIVE_ALBUM"
export const RECEIVE_SONGS = "RECEIVE_SONGS"
export const RECEIVE_SONG = "RECEIVE_SONG"
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"

export const RECEIVE_MUSIC_ERRORS = 'RECEIVE_MUSIC_ERRORS'

export const receiveMusicErrors = errors => ({
    type: RECEIVE_MUSIC_ERRORS,
    errors
})

export const receivePlaylists = playlists => ({
    type: RECEIVE_PLAYLISTS,
    playlists
})

export const receivePlaylist = payload => ({
    type: RECEIVE_PLAYLIST,
    payload
})

export const receiveArtists = artists => ({
    type: RECEIVE_ARTISTS,
    artists
})

export const receiveArtist = payload => ({
    type: RECEIVE_ARTIST,
    payload
})

export const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
})

export const receiveAlbum = payload => ({
    type: RECEIVE_ALBUM,
    payload
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
//---Fetch Single

export const createPlaylist = playlist => dispatch => {
    return createPlaylistAjax(playlist).then(
        playlist => dispatch(receivePlaylist(playlist)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    )
}

export const removeSongFromPlaylist = (playlistId, songId) => dispatch => {
    return removeSongFromPlaylistAjax(playlistId, songId).then(
        playlist => dispatch(receivePlaylist(playlist)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    )
}

export const addSongToPlaylist = (playlistId, songId) => dispatch => {
    return addSongToPlaylistAjax(playlistId, songId).then(
        playlist => dispatch(receivePlaylist(playlist)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    )
}


export const fetchArtist = id => dispatch => {
    return fetchArtistAjax(id).then(
        payload => dispatch(receiveArtist(payload)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    )
}

export const fetchAlbum = id => dispatch => {
    return fetchAlbumAjax(id).then(
        payload => dispatch(receiveAlbum(payload)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    )
}

export const fetchPlaylist = id => dispatch => {
    return fetchPlaylistAjax(id).then(
        payload => dispatch(receivePlaylist(payload)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    )
}


//---Fetch Multiple
export const fetchAuthoredPlaylists = () => dispatch => {
    return fetchAuthoredPlaylistsAjax().then(
        playlists => dispatch(receivePlaylists(playlists)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    )
}

export const fetchLikedPlaylists = () => dispatch => {
    return fetchLikedPlaylistsAjax().then(
        playlists => dispatch(receivePlaylists(playlists)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    )
}


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



