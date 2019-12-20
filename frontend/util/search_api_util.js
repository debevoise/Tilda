export const searchAjax = (query = "") => (
    $.ajax({
        url: `api/search/${query}`
    })
) 