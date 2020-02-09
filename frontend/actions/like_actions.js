import { likeAjax, fetchLikesAjax } from "../util/like_api_util"
import { receiveMusicErrors } from "./music_actions";

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
// export const RECEIVE_UNLIKE = "RECEIVE_UNLIKE";

export const receiveLikes = payload => ({
    type: RECEIVE_LIKES,
    payload
})

// export const receiveLike = like => ({
//     type: RECEIVE_LIKE,
//     like
// })

// export const receiveUnlikes = unlike => ({
//     type: RECEIVE_LIKES,
//     unlike
// })


export const like = (type, id) => dispatch => {
    return likeAjax(type, id).then(
        payload => dispatch(receiveLikes(payload)),
        err => dispatch(receiveMusicErrors(err.responseJSON))
    ).then(res => console.log(res))
}

