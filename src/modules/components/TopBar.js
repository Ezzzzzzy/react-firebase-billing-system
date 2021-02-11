import React, { useCallback, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Badge,
    Box,
    Hidden,
    IconButton,
    Toolbar,
    makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import NotificationsIcon from '@material-ui/icons/Input';
import { logout } from '../../actions/authaction'
import { useDispatch } from 'react-redux';


const TopBar = () => {
    const dispatch = useDispatch()
    const handleLogout = useCallback(() => {
        dispatch(logout())
    })
    return (
        <AppBar>
            <Toolbar>
                <Box flexGrow={1} />
                <IconButton onClick={handleLogout}>
                    <InputIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar