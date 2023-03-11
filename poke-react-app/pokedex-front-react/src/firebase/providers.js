import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { FirebaseAuth } from "./config"


/* LOGIN */
export const loginWithEmailAndPassword = async ({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            uid,
            photoURL,
            displayName
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

/* LOGOUT */
export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}




/* REGISTER */ 

export const registerWithEmailAndPassword = async ({ email, password, displayName }) => {
    try {
        const resp = createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        // Aqui actualizamos el perfil del usuario
        await updateProfile(FirebaseAuth, currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            displayName
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}