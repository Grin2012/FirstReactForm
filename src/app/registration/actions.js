import * as types from './actionTypes';

export function userLogin(user) {
    return (dispatch) => {
        dispatch({
            type: types.SUBMIT_REGISTRATION,
            payload: {
                firstName: user.firstName,
                lastName: user.lastName,
                gender: user.sex,
                email: user.email,
                password: user.password
            }
        })
    }
}
