export const actionTypes = {
    TRANSACTION_REQUEST:"TRANSACTION_REQUEST",
    TRANSACTION_SUCCESS:"TRANSACTION_SUCCESS",
    TRANSACTION_FAIL: "TRANSACTION_FAIL"
}

export const INITIAL_STATE = {
    transactions: null,
    loading: false,
    error:{
        flag: false,
        msg: null
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.TRANSACTION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.TRANSACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        default:
            return state;
    }
}