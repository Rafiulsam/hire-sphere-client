import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Create user function
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
         
    };

    //sign in function 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signOut function
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    //set auth state observer 
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log('user in the auth state change', currentUser)
        })
        return ()=> unsubscribe();
    },[])

    const authInfo = {
        loading,
        user,
        createUser,
        signIn,
        userSignOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;