import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const provider =new GoogleAuthProvider();
  const  createUser=(email,password)=>{
    setLoading(true);
     return createUserWithEmailAndPassword(auth,email,password)
     
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const profileUpdate = (name,photoUrl) =>{
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photoUrl
          });
    }
    const googleLogIn=()=>{
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser);
          setLoading(false);
        })
       return ()=>{
        unSubscribe();
       }
    },[])
    const authInfo={
        createUser,user,signInUser,logOut,loading,profileUpdate,googleLogIn}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
           </AuthContext.Provider> 
        </div>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;