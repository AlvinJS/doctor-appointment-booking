import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../firebase.config';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth';
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);

}

export default function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState()

      function signup (email,password){ 
        return createUserWithEmailAndPassword(auth, email,password)
    }

  function login (email,password){ 
        return signInWithEmailAndPassword(auth,email,password)
    }

     function logout (){
        return signOut(auth);
    }
   useEffect(  () => {
    const unsubsribe = onAuthStateChanged(auth,user => {
        setCurrentUser(user)
    })
    return unsubsribe;
    },[])

    const value={
        currentUser,
        login,
        logout,
        signup
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>

        </div>
    )
}
