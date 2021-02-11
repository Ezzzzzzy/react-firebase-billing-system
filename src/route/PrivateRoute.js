import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import TopBar from '../modules/components/TopBar'
import { Grid, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64
    },
    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden'
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'hidden'
    }
}));

function PrivateRoute({ component: Component, ...rest }) {
    const auth = useSelector(state => state.auth);
    const classes = useStyles()

    return (
        <Route {...rest} render={props => (
            auth.isAuthenticated ?
                <div className={classes.root}>
                    <TopBar />
                    <div className={classes.wrapper}>
                        <div className={classes.contentContainer}>
                            <div className={classes.content}>
                                <Component {...props} />
                            </div>
                        </div>
                    </div>
                </div>
                : <Redirect to="/login" />
        )} />
    )
}

export default PrivateRoute