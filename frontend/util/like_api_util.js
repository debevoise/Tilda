export const likeAjax = (type, id) => {
    return $.ajax({
        url: `api/${type}/${id}/like`,
        method: 'POST'
    })
}

export const unlikeAjax = (type, id) => {
    return $.ajax({
        url: `api/${type}/${id}/unlike`,
        method: 'POST'
    })
}

