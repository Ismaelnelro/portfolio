import { createSlice } from '@reduxjs/toolkit';

export const firebaseAuthSlice = createSlice({
    name: 'authFirebase',
    initialState: {
        status: 'no-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    }
    ,
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, /* action */) => {
        },
        checkingCreadentials: (state) => {
            state.status = 'checking'
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCreadentials } = firebaseAuthSlice.actions;