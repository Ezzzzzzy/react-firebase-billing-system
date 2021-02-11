import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { logout } from '../../actions/authaction'

const Logout = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout())
    });
}

export default Logout