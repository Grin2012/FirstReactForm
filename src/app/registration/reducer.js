import * as types from './actionTypes';

const initialState = {
    user: {
        firstName: 'Anonymous',
        lastName: '',
        gender: '',
        email: '',
        password: ''
    }
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.SUBMIT_REGISTRATION: {
            return {
                ...state,
                user: {
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    gender: action.payload.gender,
                    email: action.payload.email,
                    password: action.payload.password
                }
            }
        }
        default: {
            return state;
        }
    }
};