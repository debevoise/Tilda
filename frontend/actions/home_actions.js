export const RECEIVE_HOME = 'RECEIVE_HOME';

export const receiveHome = payload => ({
    type: RECEIVE_HOME,
    payload
})

export const fetchHome = () => dispatch => {
    return fetchHomeAjax().then(
        payload => dispatch(receiveHome(payload)),
        errors => dispatch(receiveMusicErrors(errors.responseJSON))
    );
}

const fetchHomeAjax = () => {
    return $.ajax({
        url: 'api/home'
    })
}

