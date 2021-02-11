import { transactionRef, singleTransactionRef, userRef } from "../config/firebase";
import { actionTypes } from "../reducers/transactionreducer"
import {getUser} from "./useraction"

export const getTransactions = (uid) => dispatch => {
    dispatch({
        type: actionTypes.TRANSACTION_REQUEST,
        payload: null
    })

    transactionRef.orderByChild('userId')
        .equalTo(uid)
        .on("value", snapshot => {
            const data = snapshot.val()
            const arr = Object.keys(data).map(i => {
                data[i].id = i
                return data[i]
              });
            if (data) {
                dispatch({
                    type: actionTypes.TRANSACTION_SUCCESS,
                    payload: arr.reverse()
                })
            }
        });
}

export const createTransaction = (data) => dispatch => {
    const id = transactionRef.push().key
    let newBalance = data.currentBalance + data.amount
    
    singleTransactionRef(id).set({
        amount: data.amount,
        createdAt: data.createdAt,
        description: data.description,
        referenceNumber: data.referenceNumber,
        transactionType: data.transactionType,
        userId: data.userId
    }).then(()=>{
        let newBalance = data.currentBalance
        if(data.transactionType == "Payment"){
            newBalance -= data.amount
        } else {
            newBalance += data.amount
        }
        userRef(data.userId).update({
            balance: newBalance
        }).then(()=>{
            dispatch(getUser())
        })
    });
}