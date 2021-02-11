export const actionTypes = {
    GET_CURRENT_USER_REQUEST: "GET_CURRENT_USER_REQUEST",
    GET_CURRENT_USER_SUCCESS: "GET_CURRENT_USER_SUCCESS",
    GET_CURRENT_USER_FAILED: "GET_CURRENT_USER_FAILED"
    
}

export const INITIAL_STATE = {
    info: null,
    loading: false,
    error: {
        flag: false,
        msg: null
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENT_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                info: action.payload
            }
        default:
            return state;
    }
};