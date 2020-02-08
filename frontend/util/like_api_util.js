export const fetchLikes = () => {
    return $.ajax({
        url: `api/${type}/${id}/like`,
        method: 'GET'
    })
}

export const likeAjax = (type, id) => {
    return $.ajax({
        url: `api/${type}/${id}/like`,
        method: 'POST'
    })
}

//Not in use, like toggles like object
export const unlikeAjax = (type, id) => {
    return $.ajax({
        url: `api/${type}/${id}/unlike`,
        method: 'POST'
    })
}

