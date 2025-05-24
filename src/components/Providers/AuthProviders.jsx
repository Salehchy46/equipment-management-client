import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password );
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observing current user inside the useEffect', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () =>  {
            unsubscribe();
        }
    }, [])

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    } 

    const googleSignIn = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        setLoading(true);
        const gitProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleSignIn,
        githubSignIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;