import React, { createContext, useState, useEffect } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    console.log(user)
    const [loader, setLoader] = useState(true)

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const GoogleSignIn = (provider) => {
        setLoader(loader);
        return signInWithPopup(auth, provider);
    }

    const ProfileUpadte = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }



    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    const authInfo = {
        user,
        signIn,
        createUser,
        ProfileUpadte,
        logOut,
        GoogleSignIn,
        loader,
        setLoader
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;