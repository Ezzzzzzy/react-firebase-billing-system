import {
    Grid,
    Paper,
    Container,
} from '@material-ui/core';
import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import { getUser } from '../../actions/useraction'
import Profile from './components/Profile'
import Transaction from "./components/Transaction";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: 400,
    },
}))

const Dashboard = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const user = useSelector(state => state.user)
    const record = useSelector(state => state.record)
    const [profile, setProfile] = useState({})
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        if (user.info) {
            setProfile(user.info)
        }
        if(record.transactions){
            setTransactions(record.transactions)
        }
    });

    return (
        <div
            className={classes.root}
            title="Account"
        >
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <Profile info={profile} />
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={6}
                        xs={12}
                    >
                        <Transaction transactions={transactions} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Dashboard