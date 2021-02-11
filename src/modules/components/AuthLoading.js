import React, { useEffect } from 'react';
import LoadingView from "./LoadingView";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from '../../actions/useraction'
import { getTransactions } from '../../actions/transactionaction'


const AuthLoading = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const uid = auth.uid
    useEffect(() => {
        if (auth.isAuthenticated) {
            dispatch(getUser(uid))
            dispatch(getTransactions(uid))
        }
    })

    return (
        auth.loading ? <LoadingView /> : props.children
    )
}

export default AuthLoading