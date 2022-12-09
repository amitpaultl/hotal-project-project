import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/fiarbase.int'
export const AuthContext = createContext();

const auth = getAuth(app);

const Authantion = ({children}) => {

    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);

    // google

    const provider = new GoogleAuthProvider();

    const googleProviter =()=>{
        setLoader(true)
        return signInWithPopup(auth, provider)

    }

    const googleSingin =()=>{
        setLoader(true)
        return signInWithRedirect(auth, provider);
    }

    // Email sing in

    const emailsingup = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const eamilsingin = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const updateProfil =(name)=>{
       return updateProfile(auth.currentUser, {displayName: name}
            
          
        
       ) 
    }

    const emailVerification = ()=>{
        return sendEmailVerification(auth.currentUser)
    }

    const logout =()=>{
        setLoader(true)
        signOut(auth)
    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, (creantuser) => {
            if (creantuser) {
                if(creantuser.emailVerified || creantuser === null ){
                    setUser(creantuser)
                }
                
            } 
            setLoader(false)
          });
          return () =>{
            unsubscribe();
          }
    }, [])

    const authInfo = {loader,googleProviter, googleSingin,logout,user,emailsingup,eamilsingin, updateProfil, emailVerification,setLoader}
    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authantion;