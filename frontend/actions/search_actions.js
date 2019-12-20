import { searchAjax } from "../util/search_api_util";

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = payload => ({
    type: RECEIVE_SEARCH,
    payload
})

export const search = query => dispatch => {
    return searchAjax(query).then(
        payload => dispatch(receiveSearch(payload))
    )
}

