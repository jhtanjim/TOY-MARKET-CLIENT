import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { redirect } from 'react-router-dom';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = userCredential.user;
                return updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    setUser(newUser);
                    setLoading(false);
                    console.log(newUser);
                });
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            // console.log('current user', currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
