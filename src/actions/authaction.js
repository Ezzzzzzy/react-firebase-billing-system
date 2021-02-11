import { authRef, FIREBASE_AUTH_PERSIST } from "../config/firebase";
import { purgeStoredState } from "redux-persist";
import { actionTypes } from "../reducers/authreducer"
import { createToken } from "../config/firebase"
import storage from "redux-persist/lib/storage"
import { deleteToken } from '../utils/token'

export const login = (username, password) => dispatch => {
    dispatch({
        type: actionTypes.LOGIN_REQUEST,
        payload: null
    })
    authRef.setPersistence(FIREBASE_AUTH_PERSIST)
        .then(function () {
            authRef
                .signInWithEmailAndPassword(username, password)
                .then(user => {
                    const data = createToken()
                    dispatch({
                        type: actionTypes.LOGIN_SUCCESS,
                        payload: {
                            token: data.token,
                            uid: data.uid
                        }
                    })
                })
                .catch(error => {
                    dispatch({
                        type: actionTypes.LOGIN_FAILED,
                        payload: error
                    })
                })
        })
        .catch(error => {
            dispatch({
                type: actionTypes.LOGIN_FAILED,
                payload: "Firebase Auth Error"
            })
        })
}

export const logout = () => dispatch => {

    const authPersistConfig = {
        key: "auth",
        storage
    };
    
    dispatch({
        type:actionTypes.LOGOUT_REQUEST,
        payload:null
    })

    deleteToken()
    purgeStoredState(authPersistConfig);
}

