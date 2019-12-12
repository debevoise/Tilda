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
        url: `api/user/artists`
    })
} 

export const fetchLikedAlbumsAjax = () => {
    return $.ajax({
        url: `api/user/albums`
    })
}



//NEED AUTHORED PLAYLISTS AS WELL
export const fetchLikedPlaylistsAjax = () => {
    return $.ajax({
        url: `api/user/playlists`
    })
}

export const fetchLikedSongsAjax = () => {
    return $.ajax({
        url: 'api/user/songs'
    })
}

