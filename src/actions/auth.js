import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebaseConfig';
import { type } from '../types/type';
import { finishLoading, startLoading } from './ui';

export const loginEmailAndPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        dispatch(startLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch((error) => {
                console.log(error);
                dispatch(finishLoading());
            });
    };
};

//action [user] login with google button
export const loginWithGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                console.log(errorCode, errorMessage, email);
            });
    };
};

//login action type and payload for user with googlebutton and MailAndPassword.
export const login = (uid, displayName) => ({
    type: type.login,
    payload: {
        uid,
        displayName,
    },
});

// Register action with googleWmailAndPassword
export const RegisterWithEmailPassword = ({ email, password, name }) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                try {
                    await updateProfile(user, { displayName: name });
                } catch (error) {
                    console.log(error);
                }
                dispatch(login(user.uid, user.displayName));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const logout = () => {
    return {
        type: type.logout,
    };
};

export const logoutFirebase = () => {
    const auth = getAuth();
    return async (dispatch) => {
        try {
            await signOut(auth);
            dispatch(logout());
        } catch (error) {
            console.log(error);
        }
    };
};
