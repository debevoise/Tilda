export const likeAjax = (likeable) => {
    let { type, id } = likeable;
    return $.ajax({
        url: `api/${type}/${id}/like`,
        method: 'POST'
    })
}

export const unlikeAjax = (likeable) => {
    let { type, id } = likeable;
    return $.ajax({
        url: `api/${type}/${id}/unlike`,
        method: 'POST'
    })
}

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

//NEED AUTHORED PLAYLISTS AS WELL
export const fetchLikedPlaylistsAjax = () => {
    return $.ajax({
        url: `api/likes/playlists`
    })
}

export const fetchLikedSongsAjax = () => {
    return $.ajax({
        url: 'api/likes/songs'
    })
}

