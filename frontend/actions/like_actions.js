import { likeAjax } from "../util/like_api_util"
import { receiveMusicErrors } from "./music_actions";

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_UNLIKE = "RECEIVE_UNLIKE";

export const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
})

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
})

// export const receiveUnlikes = unlike => ({
//     type: RECEIVE_LIKES,
//     unlike
// })


export const like = (type, id) => dispatch => {
    return likeAjax(type, id).then(
        like => dispatch(receiveLike(like)),
        err => dispatch(receiveMusicErrors(err.responseJSON))
    ).then(res => console.log(res))
}