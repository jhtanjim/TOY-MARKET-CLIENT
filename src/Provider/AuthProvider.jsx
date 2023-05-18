import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const googleAuthProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create USer
    // const createUser = (email, password, name,) => {
    //     setLoading(true)
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }

    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const Vuser = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    setUser(Vuser);
                    setLoading(false);
                    console.log(Vuser);
                });
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    // signIn
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    // ggle
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    };


    // signout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }


    // check user ase ki nai
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false); // move this line inside the callback
            console.log('current user', currentUser);
        });

        return () => {
            return unsubscribe();
        };
    }, []);



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;