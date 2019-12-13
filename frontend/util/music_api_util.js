//GET LIKES
export const fetchLikedArtistsAjax = () => {
    return $.ajax({
        url: `api/likes/artists`
    })
} 

export const fetchLikedAlbumsAjax = () => {
    return $.ajax({
        url: `api/likes/albums`
    })
}

export const fetchLikedPlaylistsAjax = () => {
    return $.ajax({
        url: `api/likes/playlists`
    })
}

export const fetchAuthoredPlaylistsAjax = () => {
    return $.ajax({
        url: 'api/playlists'
    })
}

export const fetchLikedSongsAjax = () => {
    return $.ajax({
        url: 'api/likes/songs'
    })
}

//GET SHOW
export const fetchAlbumAjax = id => {
    return $.ajax({
        url: `api/albums/${id}`
    })
}

export const fetchPlaylistAjax = id => {
    return $.ajax({
        url: `api/playlists/${id}`
    })
}

export const fetchArtistAjax = id => {
    return $.ajax({
        url: `api/artists/${id}`
    })
}