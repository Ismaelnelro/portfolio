
import { registerWithEmailAndPassword, loginWithEmailAndPassword, logoutFirebase } from '../../firebase/providers';
import { checkingCreadentials, login, logout } from './authSlice';


/* LOGINS */
export const startLoginUserWithEmailAndPassword = ({ email, password }) => {

    return async (dispatch) => {
        dispatch(checkingCreadentials())
        const resp = await loginWithEmailAndPassword({ email, password })

        if (!resp.ok) return dispatch(logout(resp))

        dispatch(login(resp))
    }
}





/* REGISTER */
export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {

    return async (dispatch) => {
        dispatch(checkingCreadentials())

        const { ok, uid, photoURL, errorMessage } = await registerWithEmailAndPassword({ email, password, displayName })

        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, photoURL, displayName, email }))
    }
}



/* LOGOUT */
export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout())
    }
}