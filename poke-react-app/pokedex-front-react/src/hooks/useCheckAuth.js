import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/firebaseAuth/firebaseAuthSlice';
import { FirebaseAuth } from '../firebase/config';

export const useCheckAuth = () => {
    const { status } = useSelector(state => state.authFirebase)
    const dispatch = useDispatch();


    useEffect(() => {

        // esta funcion es un observable que se actualiza solo
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) {
                return dispatch(logout());
            }
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }))
        })
    }, [])

    return status
}
