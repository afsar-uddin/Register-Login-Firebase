import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initAuthenticationFirebase from '../Firebase/Firebase.init';

initAuthenticationFirebase();
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState();
    const [authError, setAuthError] = useState('');
    // GOOGLE LOGIN
    const googleLogin = (location, navigate) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/';
                console.log('successfully loggedin');
                navigate(destination);
                // navigate('/');
            }).catch((error) => {
                setAuthError(error.message)
                console.log('failed to sign in')
            });
    };
    // OBSERVE WHETHER USER STATE CHANGED OR NOT 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser()
            }
        });
        return () => unsubscribed;
    }, [auth]);

    // REGISTER USER
    const registerUser = (name, email, password, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
            }).catch((error) => {
                setAuthError(error.message);
                console.log(error)
            })
        navigate('/')
    };

    // SIGN IN USING EMAIL AND PASSWORD
    const loginEmailPassword = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
                console.log(error)
            })
    };

    // LOGOUT 
    const logOut = () => {
        signOut(auth)
            .then({})
            .finally(() => console.log('logut'))
    }


    return {
        user,
        authError,
        googleLogin,
        logOut,
        registerUser,
        loginEmailPassword
    }
};

export default useFirebase;