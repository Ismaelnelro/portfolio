/* 
This CoustomHook will be interacting with Store file on store folder
and will be conected with Api dbmongoApi
*/

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import dbmongoApi from '../apis/MongoDB/apiMongoDB';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/MongooAuth/mongoAuthSlice';

export const useAuthStore = () => {

    const dispatch = useDispatch();
    const { status, user, errorMessage } = useSelector(state => state.authMongoo);

    
    const startLogin = async ({ email, password }) => {
        dispatch(onChecking())
        try {
            const { data } = await dbmongoApi.post('/auth', { email, password })
            
            localStorage.setItem('token', data.token)
            // localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({ name: data.name, uid: data.uid }))

        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }
    }



    const startRegister = async ({ email, password, name }) => {

        try {
            const { data } = await dbmongoApi.post('/auth/new', { email, password, name })
            localStorage.setItem('token', data.token)
            dispatch(onLogin({ name: data.name, uid: data.uid }))

        } catch (error) {
            console.log(error);
            dispatch(onLogout(error.response.data?.msg));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }
    }


    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return dispatch(onLogout())
        }
        try {
            const { data } = await dbmongoApi.get('/auth/renew');
            localStorage.setItem('token', data.token)
            dispatch(onLogin({ name: data.name, uid: data.uid }))
        } catch (error) {
            console.log(error);
            localStorage.clear();
            dispatch(onLogout());
        }
    }


    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }


    return {
        //*Porperties
        status,
        user,
        errorMessage,

        //*Metodos
        startLogin,
        startLogout,
        startRegister,
        checkAuthToken
    }
}