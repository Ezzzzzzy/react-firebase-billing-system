import React, { useState, useEffect, useCallback } from 'react';
import {
    Box,
    Card,
    Divider,
    Grid,
    IconButton,
    Typography,
    Avatar,
    Button
} from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import PaymentModal from './PaymentModal'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5,
        padding: 10
    },
    image: {
        height: 100,
        width: 100
    },
    gridItem: {
        alignItems: 'center',
        display: 'flex'
    },
    gridItem2: {
        alignItems: 'center',
        display: 'flex',
        marginTop: 10
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const Profile = (props) => {
    const classes = useStyles();
    const [amountFormat, setAmountFormat] = useState("")
    const [type, setType] = useState("")
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (props.info) {
            let amount = props.info.balance
            let nf = new Intl.NumberFormat();
            setAmountFormat(nf.format(amount));
        }
    })

    const handleModal = useCallback((status, type)=>{
        setModalOpen(status)
        setType(type)
    })

    return (
        <Card >
            <Grid container justify="space-between" className={classes.root}>
                <Grid item className={classes.gridItem} >
                    <Avatar className={classes.image} />
                </Grid>
                <Grid item className={classes.gridItem2} >
                    <Typography variant="body1" color="textSecondary">Account {props.info.account}</Typography>
                </Grid>
                <Grid item className={classes.gridItem} spacing={1}>
                    <Typography variant="h4">{props.info.name}</Typography>
                </Grid>
                <Grid item className={classes.gridItem2}>
                    <Typography variant="body1" color="textSecondary">Current Balance</Typography>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Typography variant="h5">{amountFormat}</Typography>
                </Grid>
            </Grid>
            <Divider />
            <Box
                display="flex"
                justifyContent="center"
                p={2}
            >
                <Button
                    color="primary"
                    size="large"
                    variant="outlined"
                    startIcon={<AccountBalanceWalletIcon fontSize="large" />}
                    className={classes.margin}
                    onClick={()=>handleModal(true, "Cash In")}
                >
                    Cash In
                </Button>
                <Button
                    color="primary"
                    size="large"
                    variant="outlined"
                    startIcon={<CreditCardIcon fontSize="large" />}
                    className={classes.margin}
                    onClick={()=>handleModal(true, "Payment")}
                >
                    Payment
                </Button>
            </Box>
            <PaymentModal open={modalOpen} currentBalance={amountFormat} type={type} onClose={()=>handleModal(false)}/>
        </Card>
    )
}

export default Profile
