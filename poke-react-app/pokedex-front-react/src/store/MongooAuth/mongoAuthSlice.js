import { createSlice } from '@reduxjs/toolkit';

export const mongoAuthSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onLogin: (state, { payload }) => {
            state.status = 'authenticated'
            state.user = payload
            state.errorMessage = undefined;
        },
        onLogout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload
        },
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined
        }
    }
});


// Action creators are generated for each case reducer function
export const { onLogin, onLogout, onChecking,clearErrorMessage } = mongoAuthSlice.actions;