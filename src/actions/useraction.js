import { actionTypes } from "../reducers/userreducer"
import { userRef, authRef } from "../config/firebase"

export const getUser = (uid) => dispatch => {
    dispatch({
        type: actionTypes.GET_CURRENT_USER_REQUEST,
        payload: null
    })

    userRef(uid).on("value", snapshot => {
        const data = snapshot.val();
        if (data) {
            dispatch({
                type: actionTypes.GET_CURRENT_USER_SUCCESS,
                payload: data
            })
        } else {
            dispatch({
                type: actionTypes.GET_CURRENT_USER_FAILED,
                payload: "Failed to get user data"
            })
        }
    })

}