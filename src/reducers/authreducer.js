export const actionTypes = {
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILED: "LOGIN_FAILED",
    LOGOUT_REQUEST: "LOGOUT_REQUEST"
}

export const INITIAL_STATE = {
    uid: null,
    isAuthenticated: false,
    accessToken: null,
    loading: false,
    error: {
        flag: false,
        msg: null
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                accessToken: action.payload.token,
                uid: action.payload.uid
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                loading: false
            }
        case actionTypes.LOGOUT_REQUEST:
            return INITIAL_STATE
        default:
            return state;
    }

};