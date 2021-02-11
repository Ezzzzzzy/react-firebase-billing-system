import React, { useState, useEffect, useCallback } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Input,
    InputLabel,
    InputAdornment,
    Box,
    Divider,
    Typography,
    makeStyles,
} from '@material-ui/core';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from '../../../actions/transactionaction'

const useStyles = makeStyles((theme) => ({
    balance: {
        textAlign: "center"
    },
    field: {
        width: '25ch'
    }
}))

const PaymentModal = (props) => {
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [fieldError, setFieldError] = useState({
        error: false,
        message: ""
    })
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const classes = useStyles()

    const handleClose = useCallback(() => {
        props.onClose()
        setDescription("")
        setAmount("")
        setFieldError({
            error: false,
            message: ""
        })
    })

    const handleAmountChange = useCallback((e) => {
        setAmount(e.target.value)
    })

    const handleDescriptionChange = useCallback((e) => {
        setDescription(e.target.value)
    })

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        let refNumber = Math.random().toString(16).substr(2, 8);
        let amountData = parseInt(amount)
        let currentBalance = parseInt(props.currentBalance.replace(/,/g, ''))

        if (amountData > currentBalance && props.type == "Payment") {
            setFieldError({
                error: true,
                message: "Greater than current balance"
            })
        } else {
            let data = {
                amount: amountData,
                transactionType: props.type,
                description: description,
                referenceNumber: refNumber.toUpperCase(),
                userId: auth.uid,
                createdAt: moment.now(),
                currentBalance: currentBalance
            }
            dispatch(createTransaction(data))

            handleClose()
        }


    });

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose} aria-labelledby="dialog-title">
                <DialogTitle id="dialog-title">{props.type}</DialogTitle>
                <Divider />
                <form onSubmit={handleSubmit}>
                    <DialogContent dividers={true} >
                        <DialogContentText className={classes.balance}>
                            <Typography variant="h6">
                                Current Balance: ₱{props.currentBalance}
                            </Typography>
                        </DialogContentText>

                        <Box m={2}>
                            <InputLabel >Amount</InputLabel>
                            <TextField
                                id="amount"
                                value={amount}
                                onChange={handleAmountChange}
                                type="number"
                                className={classes.field}
                                required={true}
                                helperText={fieldError.message}
                                error={fieldError.error}
                            />
                        </Box>
                        <Box m={2}>
                            <InputLabel >Description</InputLabel>
                            <TextField
                                id="description"
                                value={description}
                                onChange={handleDescriptionChange}
                                className={classes.field}
                                helperText="optional"
                            />
                        </Box>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">Cancel</Button>
                        <Button type="submit" color="primary">Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}

export default PaymentModal